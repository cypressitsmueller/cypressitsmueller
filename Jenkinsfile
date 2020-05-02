pipeline {
    agent {
        docker {
            image 'cypress/base:12.16.1'
            args '-p 3000:3000'
        }
    }
    stages {
            stage('Back-end') {
                agent {
                    docker { image 'maven:3-alpine' }
                }
                steps {
                    sh 'mvn --version'
                }
            }
            stage('Front-end') {
                agent {
                    docker { image 'node:7-alpine' }
                }
                steps {
                    sh 'node --version'
                }
            }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npm run cy:verify'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run ci:cy-run'
            }
        }
    }
}
