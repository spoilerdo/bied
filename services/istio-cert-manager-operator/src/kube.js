const k8s = require("@kubernetes/client-node");
const axios = require("axios").default;
const https = require("https");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const server = kc.getCurrentCluster().server;
const opts = {};
kc.applyToRequest(opts);

const httpsAgent = new https.Agent({ ca: opts.ca, keepAlive: false });
const inst = axios.create({
  headers: { ...opts.headers },
  httpsAgent: httpsAgent,
  baseURL: `${server}`,
});

module.exports = inst;
