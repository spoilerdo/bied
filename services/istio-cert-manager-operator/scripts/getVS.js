const kube = require("../src/kube");

const main = async () => {
  try {
    const res = await kube.delete(
      "/apis/networking.istio.io/v1beta1/namespaces/istio-system/virtualservices/bied-cm-operator-cm-acme-http-solver-nww4b"
    );
    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
};
main();
