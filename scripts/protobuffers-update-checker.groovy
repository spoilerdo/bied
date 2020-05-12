
class PackageManager {
    Boolean protobuffersChanged(){
        println execute("git fetch");
        def diffResult = execute("git diff develop origin/develop .\\libraries\\protobuffers\\protobuffers\\protobuffers\\protobuffers");
        Boolean needsUpdate = diffResult.length() > 0;
        println execute("git pull");
        return needsUpdate;
    }

    String execute(String command){
        def out = new ByteArrayOutputStream()
        def err = new ByteArrayOutputStream()
        def proc = command.execute()
        proc.consumeProcessOutput(out, err)
        proc.waitFor()
        if(("" +err +"").length() > 0){
            println "error stream was ${err}";
        }
        return out;
    }

    def getLiveVersion(){
        def get = new URL("http://nuget.fontysbied.nl/v3/search?id=Bied.Protobuffers").openConnection();
        def getRC = get.getResponseCode();
        String text = get.getInputStream().getText();
        int start = text.indexOf("version");
        String beginRemovedText =text.substring(start+"version\":\"".length());
        String oldVersion = beginRemovedText.substring(0,beginRemovedText.indexOf('\"'));
        return oldVersion;
    }

    def incrementVersion(String oldVersion){
        int lastNumber = oldVersion.substring(4).toInteger();
        int newVersionNumber = lastNumber+1;
        String newVersion = "1.0."+newVersionNumber;
        return newVersion;
    }

    def createPackage(String version){
        
        def file =  new File("libraries/protobuffers/protobuffers/protobuffers/protobuffers.csproj");
        String xml = file.getText();
        int vbegin = xml.indexOf("Version")+"Version>".length();
        int vEnd = xml.indexOf("</Version");
        int count = 5;
        xml = xml.substring(0,vbegin) + version + xml.substring(vEnd)
        def w = file.newWriter();
        w << xml;
        w.close()
        String packResult = execute("dotnet build .\\libraries\\protobuffers\\protobuffers --version-suffix test -o ../build");
    }

    def pushPackage(String version){
        String pushResult = execute("nuget push -source http://nuget.fontysbied.nl/v3/index.json ..\\build\\Bied.Protobuffers." + version + ".nupkg")
    }

    def updatePackageIfNeeded(){
        if(protobuffersChanged()){
            println("update needed");
            def current = getLiveVersion();
            def newVersion = incrementVersion(current);
            createPackage(newVersion);
            pushPackage(newVersion);
            println execute("git checkout .");
            println("Version updated from " + current + " to " + newVersion);
        } 
        else {
            println("no protobuffer differences found package will not be updated");
        }
    }
}
PackageManager packagemanager = new PackageManager();
packagemanager.updatePackageIfNeeded();
