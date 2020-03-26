# Handleiding

Dit hoofdstuk geeft toelichting over het gebruik van Istio en hoe daarmee bepaalde services openbaar kunnen worden gemaakt. Deze handleiding gaat in op slechts de basis. Voor extra informatie of een edge-case neem contact met mij (Tim van Osch) op.

## Quickstart

Dit is een “Get-Up-and-Running” hoofdstuk en gaat niet in op Istio of de werking. Dit hoofdstuk zorgt ervoor dat je Istio geïnstalleerd en werkend heb.

**Vereisten**:

- Repository gecloned
- Kubernetes draaiend via
  - Minikube
  - Docker-Desktop
- Kubectl geinstalleerd

**Stappen**:

1.  Istio configuratie en operator deployen:  
    `$ kubectl apply -f services/gateway/istio-deployment.yaml`
2.  Activeer SideCar injection in de juiste namespace (bijv. default)  
    `$ kubectl label ns default istio-injection=enabled`
3.  Wacht totdat de deployments in istio-system beschikbaar zijn (READY 1/1).  
    `$ kubectl get deploy -n istio-system`

![](./docs/media/istio-available.png)

## Testen

In deze test zal een “echo-server” worden gedeployed op het pad /echo.

1.  Deploy echo-server in cluster:  
    `$ kubectl apply -f services/gateway/demo/echo-deployment.yaml`
2.  Expose echo-server via Istio:  
    `$ kubectl apply -f services/gateway/demo/echo-istio.yaml`
3.  Test deployment via browser. (Zie “IP Adres” hoofdstuk)  
    `http://<IP_adres>/echo`

### IP Adres voor Minikube

1.  Start een tunnel zodat LoadBalancer services een IP adres krijgen. Dit vereist sudo of administrator rechten.  
    `$ minikube tunnel`

2.  Zoek `ExternalIP` voor `istio-ingressgateway`. Dit is het IP adres voor de Istio Ingress Gateway. Hier worden services blootgesteld.  
    ![](./docs/media/loadbalancer-external-ip.png)

### IP Adres voor Docker-Desktop

1.  WSL2: Configureer WSL met LocalhostForwarding:
    Open of creeer bestand: %UserProfile%\.wslconfig
2.  Schrijf `localhostForwarding=true` onder `[wsl2]`
    ```
    [wsl2]
    localhostForwarding=true
    ```
    _Tip: Zet hier ook limieten op geheugen verbruik_
    ```
    [wsl2]
    memory=4GB
    swap=0
    localhostForwarding=true
    ```
3.  Het IP Adres is nu 127.0.0.1 (of localhost). Dit is het IP adres voor de Istio Ingress Gateway. Hier worden services blootgesteld.
