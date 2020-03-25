def getRepoURL() {	
  sh "git config --get remote.origin.url > .git/remote-url"	
  return readFile(".git/remote-url").trim()	
}	

def getCommitSha() {	
  sh "git rev-parse HEAD > .git/current-commit"	
  return readFile(".git/current-commit").trim()	
}	

def getContext() {
  if (env.CHANGE_ID) {
    return "continuous-integration/jenkins/pr-merge";
  }
  return "continuous-integration/jenkins/branch"
}

def setBuildStatus(String message, String state) {	
  repoUrl = getRepoURL()	
  commitSha = getCommitSha()	
  context = getContext()
  step([	
      $class: "GitHubCommitStatusSetter",	
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: repoUrl],
      commitShaSource: [$class: "ManuallyEnteredShaSource", sha: commitSha],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: context],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "ERROR"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]	
  ]);	
}

return this 