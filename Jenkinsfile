#!/usr/bin/env groovy
DISCORD_WEBHOOK_URL = "https://discordapp.com/api/webhooks/689417049948422144/jbRcBTBmIfrdr2715eM5SEscI5wluENmdw8-IZKW4crLglddwDT8tCJHZU6UoxUsFjIG"

enum ServiceType {
    Angular,
    DotNetCore
}

class Service {
    String name
    String path
    ServiceType type

    Service(name, path, type) {
        this.name = name
        this.path = path
        this.type = type
    }
}

class PackageManager {
    Boolean protobuffersChanged(){
        def diffResult = execute("git diff .\\libraries\\protobuffers\\protobuffers\\protobuffers\\protobuffers");
        Boolean needsUpdate = diffResult.length() > 0;
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
        def get = new URL("http://nuget.kn01.fhict.nl/v3/search?id=Bied.Protobuffers").openConnection();
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
        int count = 5;
        xml = xml.replace("1.0.0", version);
        def w = file.newWriter();
        w << xml;
        w.close()
        String packResult = execute("dotnet build .\\libraries\\protobuffers\\protobuffers --version-suffix test -o build");
    }

    def pushPackage(String version){
        String pushResult = execute("nuget push -source http://nuget.kn01.fhict.nl/v3/index.json .\\build\\Bied.Protobuffers." + version + ".nupkg")
    }

    def updatePackageIfNeeded(){
        if(protobuffersChanged()){
            println("update needed");
            def current = getLiveVersion();
            def newVersion = incrementVersion(current);
            createPackage(newVersion);
             //pushPackage();
            println("Version updated from " + current + " to " + newVersion);
        } 
        else {
            println("no protobuffer differences found package will not be updated");
        }
    }
}

/*
 * All our services are defined here
 *
 * NOTE! If you have a new service don't forget to add it here!
 */
def services = [
    new Service(
        'authentication-ui', 
        'services/authentication-ui/', 
        ServiceType.Angular
    )
];

node {
    lock(env.BRANCH_NAME) {
        /*
         * Set maximum 3 artifacts for other branches then the master
         */
        if (env.BRANCH_NAME=='master'){
            properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: ''))])
        } else {
            properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '3', daysToKeepStr: '', numToKeepStr: ''))])
        }

        try {
            stage('Checkout') {
                /*
                 * Cleanup the Jenkins workspace
                 */
                deleteDir()

                discordSend description: "Branch: $BRANCH_NAME", footer: "🧰 Job has successfully started", link: env.BUILD_URL, unstable: true, title: "Starting build: #$BUILD_NUMBER", webhookURL: DISCORD_WEBHOOK_URL

                /*
                 * Clone git repo
                 */
                gitData = checkout scm
                
                /*
                 * Stash services
                 */
                for (service in services) {
                    stash name: service.name, includes: "$service.path/*"
                } 

                def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

                buildStatus.setBuildStatus('Checking out SCM', 'PENDING')

                /*
                 * Check if all required cli tools are installed
                 */
                sh 'kip check'
            }
            stage('Build libraries & services') {
                def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

                buildStatus.setBuildStatus('Building', 'PENDING')

                /*
                 * Build all services of a kip project in the production environment
                 */
                sh 'kip build -e prod'
            }
            stage('Run tests') {
                def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

                buildStatus.setBuildStatus('Testing', 'PENDING')

                /*
                 * The test images will most likely not be build by Docker from scratch everytime (caching).
                 */
                def angularTestImage = docker.build('angular-test', '-f ci/images/angular.Dockerfile .');
                // def dotNetCoreTestImage = docker.build('dotnet-core-test', '-f ci/images/dotnet.Dockerfile .');

                for (service in services) {
                    switch(service.type) {
                        case ServiceType.Angular:
                            angularTestImage.inside {
                                unstash service.name
                                sh "npm i --prefix $service.path"
                                sh "npm run e2e --prefix $service.path"
                            }  
                            break;
                        /* case ServiceType.DotNetCore:
                            dotNetCoreTestImage.inside {
                                unstash service.name
                                sh "<Your install or test command>"
                            }  
                            break; */
                    }                     
                }
            }
            if (env.BRANCH_NAME=='develop'){
                stage('Push images') {
                    withCredentials([[$class: 'FileBinding', credentialsId: "s66-2-keyfile", variable: 'GOOGLE_APPLICATION_CREDENTIALS']]){
                        sh 'gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS'
                    }

                    sh 'gcloud auth configure-docker --project s66-2-271821'

                    sh 'kip push -e prod'
                }
                stage('Deploy') {
                    echo 'Deploy'
                }
            }
        } finally {
            def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

            /*
             * Set the final status of the build
             */
            if(currentBuild.currentResult == 'SUCCESS') { 

                 if (env.BRANCH_NAME=='develop'){
                     PackageManager packagemanager = new PackageManager();
                     packagemanager.updatePackageIfNeeded();
                 }
                
                buildStatus.setBuildStatus('success', 'SUCCESS')
                discordSend description: "Branch: $BRANCH_NAME", footer: "✅ Job has succeeded", link: env.BUILD_URL, result: currentBuild.currentResult, title: "Finished build: #$BUILD_NUMBER", webhookURL: DISCORD_WEBHOOK_URL, thumbnail: "https://townsquare.media/site/695/files/2015/11/bob-the-builder.jpg?w=980&q=75"
            } else if(currentBuild.currentResult == 'ABORTED' || currentBuild.currentResult == 'FAILURE' || currentBuild.currentResult == 'UNSTABLE') {
                buildStatus.setBuildStatus('failure', 'FAILURE')
                discordSend description: "Branch: $BRANCH_NAME", footer: "❌ Job has failed", link: env.BUILD_URL, result: currentBuild.currentResult, title: "Failed build: #$BUILD_NUMBER", webhookURL: DISCORD_WEBHOOK_URL
            } else {
                echo "Build status unkown ${currentBuild.currentResult}"
            }
            
        }
    }
}
