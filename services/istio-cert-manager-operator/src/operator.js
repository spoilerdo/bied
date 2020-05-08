const kube = require("./kube");
const handlebars = require("handlebars");
const vsTemplate = handlebars.compile(require("./virtualServiceTemplate"));
const gTemplate = handlebars.compile(require("./gatewayTemplate"));
const _m = {};

/**
 * { [challengeName: string]: any }
 */
const activeChallenges = {};

// ===================================
// Kube interaction
// ===================================

/**
 *
 */
const generateVirtualServiceName = (serviceName) => {
  return `bied-cm-operator-${serviceName}`;
};

/**
 *
 */
const deployVirtualService = async (token, namespace, serviceName, domain, gatewayName) => {
  const virtualServiceName = generateVirtualServiceName(serviceName);
  const vsJSON = vsTemplate({
    virtualServiceName,
    token,
    namespace,
    serviceName,
    domain,
    gatewayName
  });
  const vs = JSON.parse(vsJSON);
  const res = await kube.post(
      `/apis/networking.istio.io/v1beta1/namespaces/${namespace}/virtualservices`,
      vs
  );
  console.log("Deployed virtual service");
};

/**
 *
 */
const generateGatewayName = (serviceName) => {
  return `bied-cm-gateway-${serviceName}`;
};

/**
 * Deploying a gateway
 */
const deployGateway = async (token, namespace, serviceName, domain) => {
  const gatewayName = generateGatewayName(serviceName);

  const gJSON = gTemplate({
    gatewayName,
    namespace,
    serviceName,
    domain,
  });
  console.log('hoi gJSON', gJSON);
  const gatewayFile = JSON.parse(gJSON);
  try {
    const res = await kube.post(
      `/apis/networking.istio.io/v1beta1/namespaces/${namespace}/gateways`,
        gatewayFile
    );
  } catch (e) {
    console.log("big error", e.message)
  }
  console.log("Deployed gateway");
  return gatewayName;
};

/**
 *
 */
const deleteVirtualService = async (namespace, name) => {
  const res = await kube.delete(
    `/apis/networking.istio.io/v1beta1/namespaces/${namespace}/virtualservices/${name}`
  );

};

/**
 *
 */
const getServiceChallenge = (request) => {
  // We only need services which are created by cert-manager for http01 solvers
  const isSolver =
    request.object.metadata.labels["acme.cert-manager.io/http01-solver"];
  if (!isSolver) {
    return null;
  }

  // Ensure this solver svc is owned by a challenge
  const owners = request.object.metadata.ownerReferences;
  const filteredOwners = owners.filter((owner) => owner.kind === "Challenge");
  if (filteredOwners.length < 1) {
    throw new Error(
      "Where did this one come from? Cert-Manager HTTP01 Solver service found, but it is not owned by a challenge"
    );
  }
  const challengeOwner = filteredOwners[0];

  // challengeOwner should be a reference to a Challenge created earlier
  // see `onChallengeCreated`.
  const key = request.object.metadata.namespace + challengeOwner.name;
  const challenge = activeChallenges[key];
  if (typeof challenge !== "object") {
    throw new Error(
      "Got a service which is owned by a challenge that we did not register? Perhaps it was created before we were"
    );
  }
  return challenge;
};

/**
 *
 */
const searchCreatedService = (
  tokenID,
  token,
  namespace,
  domain,
  tryCount = 1
) => async () => {
  const res = await kube.get(`/api/v1/namespaces/${namespace}/services`);
  const items = res.data.items;
  const filtered = items.filter(
    (i) =>
      i.metadata.labels &&
      i.metadata.labels["acme.cert-manager.io/http-token"] === tokenID
  );

  // If it does not yet exist, retry or fail
  if (filtered.length < 1) {
    // Try at max three times
    if (tryCount < 3) {
      console.warn(
        `Could not find HTTP01 solver service in ${namespace} for tokenID ${tokenID}, tried ${tryCount} times`
      );
      return setTimeout(
        searchCreatedService(tokenID, token, namespace, domain, ++tryCount),
        1000
      );
    } else {
      console.error(
        `Could not find HTTP01 solver service in ${namespace} for tokenID ${tokenID} after ${tryCount} tries!`
      );
      return;
    }
  }

  console.log("Found HTTP01 solver service, deploying virtual service...");
  const service = filtered[0];
  const gatewayName = await deployGateway(token, namespace, service.metadata.name, domain);
  await deployVirtualService(token, namespace, service.metadata.name, domain, gatewayName);
};

// ===================================
// Event handlers
// ===================================

/**
 *
 */
const onChallengeCreated = async (request) => {
  const key = request.namespace + request.object.metadata.name;
  activeChallenges[key] = request.object;
};
/**
 *
 */
const onChallengeDeleted = async (request) => {
  const key = request.namespace + request.oldObject.metadata.name;
  delete activeChallenges[key];
};
/**
 *
 */
const onChallengeUpdated = async (request) => {
  const key = request.namespace + request.object.metadata.name;
  activeChallenges[key] = request.object;
};

/**
 *
 */
const onServiceCreated = async (request) => {
  const challenge = getServiceChallenge(request);
  if (challenge === null) {
    return;
  }

  const token = challenge.spec.token;
  const namespace = request.namespace;

  if (typeof request.object.metadata.name !== "string") {
    // Because the services created by cert-manager uses the "generate-name"
    // property, there will not be a name available here. Therefore we have
    // to match the label after a certain period to find which service was
    // actually created.
    console.log("Created service did not have a name yet, retry in 1 second");
    const tokenID =
      request.object.metadata.labels["acme.cert-manager.io/http-token"];
    setTimeout(
      searchCreatedService(tokenID, token, namespace, challenge.spec.dnsName),
      1000
    );
    return;
  }

  // Deploy VirtualService
  await deployVirtualService(token, namespace, request.object.metadata.name);
};
/**
 *
 */
const onServiceDeleted = async (request) => {
  // Remove Virtual Service
  const virtualServiceName = generateVirtualServiceName(
    request.oldObject.metadata.name
  );
  return deleteVirtualService(request.namespace, virtualServiceName);
};
/**
 *
 */
const onServiceUpdated = async (request) => {
  const service = request;
  const challenge = getServiceChallenge(service);
  if (challenge === null) {
    return;
  }

  console.warn(`HTTP01 solver service is being updated??`);
};

// ==========================
// Routing
// ==========================

/**
 *
 */
const onChallengeChange = async (operation, request) => {
  if (operation === "CREATE") {
    return onChallengeCreated(request);
  } else if (operation === "DELETE") {
    return onChallengeDeleted(request);
  } else if (operation === "UPDATE") {
    return onChallengeUpdated(request);
  }
};

/**
 *
 */
const onServiceChange = async (operation, request) => {
  if (operation === "CREATE") {
    return onServiceCreated(request);
  } else if (operation === "DELETE") {
    return onServiceDeleted(request);
  } else if (operation === "UPDATE") {
    return onServiceUpdated(request);
  }
};

/**
 *
 */
_m.onChange = async (operation, kind, request) => {
  console.log(`GOT ${operation} FOR ${kind}`);
  if (kind === "Challenge") {
    return onChallengeChange(operation, request);
  }
  if (kind === "Service") {
    return onServiceChange(operation, request);
  }
};

module.exports = _m;
