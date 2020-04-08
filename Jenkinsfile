pipeline {
  agent any

  stages {
    // first stage installs node dependencies and Cypress binary
    stage('build') {
      steps {
        // there a few default environment variables on Jenkins
        // on local Jenkins machine (assuming port 8080) see
        // http://localhost:8080/pipeline-syntax/globals#env

        sh 'npm ci'
      }
    }

    // this stage runs end-to-end tests, and each agent uses the workspace
    // from the previous stage
    stage('cypress tests') {

       steps {
         // start local server in the background
         // we will shut it down in "post" command block
         sh 'npm run e2e'
       }

    }
  }

}
