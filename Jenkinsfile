#!/usr/bin/env groovy
DISCORD_WEBHOOK_URL = "https://discordapp.com/api/webhooks/689417049948422144/jbRcBTBmIfrdr2715eM5SEscI5wluENmdw8-IZKW4crLglddwDT8tCJHZU6UoxUsFjIG"

node {
    lock(env.BRANCH_NAME) {
        // Set maximum 3 artifacts for other branches then the master
        if (env.BRANCH_NAME=='master'){
            properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: ''))])
        } else {
            properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '3', daysToKeepStr: '', numToKeepStr: ''))])
        }

        try {
            stage('Checkout') {
                deleteDir()

                discordSend description: "Branch: $BRANCH_NAME", footer: "🧰 Job has successfully started", link: env.BUILD_URL, unstable: true, title: "Starting build: #$BUILD_NUMBER", webhookURL: DISCORD_WEBHOOK_URL
                gitData = checkout scm
                
                
                def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

                buildStatus.setBuildStatus('Checking out SCM', 'PENDING')

                sh 'kip check'
            }
            stage('Build libraries & services') {
                def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

                buildStatus.setBuildStatus('Building', 'PENDING')

                sh 'kip build -e prod'
            }
            stage('Run tests') {
                def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

                buildStatus.setBuildStatus('Testing', 'PENDING')
            }
            stage('Push images') {
                echo 'Push images'
            }
            stage('Deploy') {
                echo 'Deploy'
            }
        } finally {
            def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

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
