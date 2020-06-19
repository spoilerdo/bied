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

/*
 * All our services are defined here
 *
 * NOTE! If you have a new service don't forget to add it here!
 */
def services = [
    // new Service(
    //     'authentication-ui', 
    //     'services/authentication-ui/', 
    //     ServiceType.Angular
    // )
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
                sh "kip build -e prod -k ${gitData.GIT_COMMIT}"
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

                    sh "kip push -e prod -k ${gitData.GIT_COMMIT}"
                }
                stage('Deploy') {
                    // Authenticate with gcloud
                    withCredentials([[$class: 'FileBinding', credentialsId: "s66-2-keyfile", variable: 'GOOGLE_APPLICATION_CREDENTIALS']]){
                        sh 'gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS'
                    }

                    // Connect kubectl to cluster
                    sh "gcloud container clusters get-credentials bied-staging --zone europe-west4-a --project s66-2-271821"

                    sh 'kubectl config set-context --current --namespace default'

                    sh "kip deploy -e prod -k ${gitData.GIT_COMMIT}"
                }
            }
        } finally {
            def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

            /*
             * Set the final status of the build
             */
            if(currentBuild.currentResult == 'SUCCESS') { 
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
