
pipeline {
 agent { label 'ec2-agent' }

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

        stage ('Deploy to AWS EC2') {
            steps {
                sshagent(['task-manager-ec2']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ec2-user@3.7.73.8 "
                            cd ~/task-manager &&
                            git pull &&
                            docker rm -f task-manager-container || true &&
                            docker build -t task-manager . &&
                            docker run -d -p 3000:3000 --name task-manager-container task-manager
                        "
                    '''
                }
            }
        }
    }
}
