## Istio Cert Manager Operator

This service fixes some issues that happen when a cluster is using Cert Manager (CM) and Istio.

When requesting a new certificate with CM you will have to specify a solver. Using the HTTP solver is the most common, because there are very few dns providers with an API that CM understands. The HTTP Solver will deploy a pod which contains the .well-known/acme/.... response that for example Let's Encrypt expect. However, CM will create an Ingress resource to expose the pod. This does not work in an Istio environment since Istio works with Gateway and Virtual Service resources to expose the pod.

This operator will create a proper Virtual Service ~and Gateway~ when a new certificate challenge is created and the accompanying service is available. After the certificate is issued succesfully the operator will remove the virtual service and gateway.
