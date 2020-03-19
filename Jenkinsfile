#!/usr/bin/env groovy

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

                gitData = checkout scm
                
                def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

                buildStatus.setBuildStatus('Checking out SCM', 'PENDING')
            }
            stage('Build libraries & services') {
                echo 'Build libraries & services'

                def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

                buildStatus.setBuildStatus('Building', 'PENDING')
            }
            stage('Run tests') {
                echo 'Run tests'

                def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

                buildStatus.setBuildStatus('Testing', 'PENDING')
            }
        } finally {
            def buildStatus = load 'ci/scripts/groovy/buildStatus.groovy'

            if(currentBuild.currentResult == 'SUCCESS') { 
                buildStatus.setBuildStatus('success', 'SUCCESS')
            } else if(currentBuild.currentResult == 'ABORTED' || currentBuild.currentResult == 'FAILURE' || currentBuild.currentResult == 'UNSTABLE') {
                buildStatus.setBuildStatus('failure', 'FAILURE')
            } else {
                echo "Build status unkown ${currentBuild.currentResult}"
            }
            
            discordSend description: "Jenkins Pipeline Build", footer: "Met vriendelijke groet, Bob", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discordapp.com/api/webhooks/689417049948422144/jbRcBTBmIfrdr2715eM5SEscI5wluENmdw8-IZKW4crLglddwDT8tCJHZU6UoxUsFjIG"
        }
    }
}
