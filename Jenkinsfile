pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('e2e') {
            steps {
                sh 'ng e2e'
            }
        }
    }
}
