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
                    "host": "{{ domain }}",
                ],
                "port": {
                    "name": "http",
                    "number": 80,
                    "protocol": "HTTP"
                }
            },
            {
                "hosts": [
                    "host": "{{ domain }}",
                ],
                "port": {
                    "name": "https",
                    "number": 443,
                    "protocol": "HTTPS"
                }
            }
        ]
    }
}
`;
