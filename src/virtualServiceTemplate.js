module.exports = `
{
  "apiVersion": "networking.istio.io/v1beta1",
  "kind": "VirtualService",
  "metadata": {
    "name": "{{ virtualServiceName }}",
    "namespace": "{{ namespace }}"
  },
  "spec": {
    "gateways": ["ingressgateway"],
    "hosts": ["{{ domain }}"],
    "http": [
      {
        "match": [
          {
            "uri": {
              "exact": "/.well-known/acme-challenge/{{ token }}"
            }
          }
        ],
        "route": [
          {
            "destination": {
              "host": "{{ serviceName }}",
              "port": {
                "number": 8089
              }
            }
          }
        ]
      }
    ]
  }
}
`;
