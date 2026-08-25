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
       stage ('Docker Build') {
          steps {
             sh 'docker build -t task-manager .'
          }
       }
       stage ('Docker Run') {
          steps {
             sh 'docker rm -f task-manager-container || true'
             sh 'docker run -d -p 3000:3000 --name task-manager-container task-manager'
          }
    }
}
