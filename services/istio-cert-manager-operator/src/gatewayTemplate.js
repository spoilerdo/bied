module.exports = `
{
    "apiVersion": "networking.istio.io/v1beta1",
    "kind": "Gateway",
    "metadata": {
        "name": "{{ gatewayName }}",
        "namespace": "{{ namespace }}"
    },
    "spec": {
        "selector": {
            "istio": "{{ gatewayName }}"
        },
        "servers": [
            {
                "hosts": [
                    "{{ domain }}"
                ],
                "port": {
                    "name": "http",
                    "number": 80,
                    "protocol": "HTTP"
                }
            }
        ]
    }
}
`;