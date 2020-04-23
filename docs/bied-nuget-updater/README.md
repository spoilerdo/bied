# Bied.Protobuffers NuGet Package Updater

Voor de protobuffers NuGet package is er een groovy script geschreven die controleert of er in de dev branch aanpassingen zijn gemaakt aan de protobuffers. Wanneer er aanpassingen zijn gemaakt dan wordt er een nieuw package gemaakt met een verhoogd versie nummer.   

## Hosting Probleen

Helaas werkt het script nu niet met Jenkins wegens aantal problemen met de Jenkins -> NuGet host connectie. Jenkins kan wel met andere websites verbinden maar niet met [nuget.kn01.fhict.nl](http://nuget.kn01.fhict.nl/). Waarschijnlijk een certificaat probleem. Oplossen zou via Fontys rancher beheerder gaan of door een andere host te vinden. Beide oplossingen gaan vrij veel tijd kosten vandaar dat er gekozen is om voor nu de script lokaal te draaien. Het draait lokaal op Besm's pc en word automatisch dagelijks aangeroepen. Later kunnen we dit nog instellen met Jenkins als de hosting probleem opgelost is. 

## Lokaal draaien

De script staat onder `scripts` folder met de naam `protobuffers-update-checker.groovy`. Met de groovy compiler kan het aangeroepen worden. Het moet aangeroepen worden in de reposityry hoofd folder. 

Belangerijk! De script update het package wanneer er nieuwe dev commits met aanpassingen zijn aan de protobuffers vergeleken met de lokale versie van de repository. Dus niet lokaal draaien op zelfde folder als de development environment. En graag aangeven aan mij (Besm) als je de script lokaal gaat draaien anders komen er mogelijk dubbele updates.
