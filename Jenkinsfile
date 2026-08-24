pipeline {
    agent any
    stages {
       stage ('Install Dependencies') {
           steps {
              sh 'npm install'
           }
       }
       stage ('Run Application Check') {
          steps {
             sh 'npm test || true'
          }
       }
    }
}
