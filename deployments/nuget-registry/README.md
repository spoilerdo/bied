# Nuget Registry

## How to use it

1. The first thing you do is make a nuget package from the files you want to upload:

    1.1 For this you will need to install the [nuget CLI](https://docs.microsoft.com/en-us/nuget/install-nuget-client-tools)

    1.2 After that you want to make a .nuspec file that will configure the nuget package. More information can be found [here](https://docs.microsoft.com/en-us/nuget/reference/nuget-config-file) or you can see the protobuffers nuspec config [here](https://github.com/Choem/bied/tree/develop/libraries/protobuffersNuget)

    1.3 The last thing to do is generating the nuget package: `nuget pack Nuget.Package.Name.nuspec`

2. Than you want to set a nuget apikey to get access to the nuget registry:

    `nuget setapikey 9a1ec93c-cb39-4744-a8fc-9a0f7e5f49fa -source http://nuget.kn01.fhict.nl/api/v2/package`
3. After that you can push your nuget package to the registry:
   
    `dotnet nuget push -s http://nuget.kn01.fhict.nl/v3/index.json package.nupkg`
4. If everything goes well you will see your package here: [nuget registry](http://nuget.kn01.fhict.nl/)