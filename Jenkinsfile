pipeline {
 agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'svn --version'
            }
        }
            stage('build') {
              steps {
                // there a few default environment variables on Jenkins
                // on local Jenkins machine (assuming port 8080) see
                // http://localhost:8080/pipeline-syntax/globals#env
                echo "Running build"
                sh 'npm e2e'
                sh 'npm run cy:verify'
              }
            }
    }
}
