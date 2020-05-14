# Bied.Protobuffers NuGet Package Updater

Voor de protobuffers NuGet package is er een groovy script geschreven die controleert of er in de dev branch aanpassingen zijn gemaakt aan de protobuffers. Wanneer er aanpassingen zijn gemaakt dan wordt er een nieuw package gemaakt met een verhoogd versie nummer.   

## Jenkins -> NuGet host connectie Probleen

Helaas werkt het script nu niet met Jenkins wegens problemen met de Jenkins -> NuGet host connectie. Jenkins kan wel met andere websites verbinden maar niet met [nuget.kn01.fhict.nl](http://nuget.kn01.fhict.nl/) (de oude package server).Oplossen zou via Fontys rancher beheerder gaan of door een andere host te vinden. Beide oplossingen gaan tijd kosten en aangezien de NuGet package up to date houden cruciaal is voor de C# services is er gekozen (voor nu) de script lokaal te draaien. Het draait nu lokaal op Besm's pc en word automatisch dagelijks aangeroepen. Later kunnen we dit nog instellen met Jenkins als de hosting probleem opgelost is. De script is geschreven in groovy woordoor het later makkelijk in de JenkinsFile te stoppen.

Het probleem lijkt nu opgelost te zijn sinds we zijn verhuized naar [http://nuget.fontysbied.nl](http://nuget.fontysbied.nl/). Een andere mogelijke oplossing zou kunnen zijn door niet de FQDN te gebruiken maar nugetregistry-service.nuget.svc.cluster.local. in de Jenkins omgeving. Voor nu laten we het werken met de lokale script aangezien veel mensen deze package nodig hebben om hun services te deployen en het deployen van services nu de prioriteit heeft. Later kunnen we overstappen naar Jenkins. 

## Lokaal draaien

De script staat onder `scripts` folder met de naam `protobuffers-update-checker.groovy`. Met de groovy compiler kan het aangeroepen worden. Het moet aangeroepen worden in de repository hoofd folder. 


__NOTE:__ De script update de package wanneer er nieuwe dev commits gepushed zijn die de protobuffers hebben aangepast vergeleken met de lokale git repository. Dus niet lokaal draaien op zelfde folder als de development environment. En graag aangeven aan mij (Besm) als je de script lokaal gaat draaien anders komen er mogelijk dubbele updates.

