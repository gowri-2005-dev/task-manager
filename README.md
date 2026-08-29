 Task Manager API

A simple Task Manager REST API built using Node.js and Express.js.

The project demonstrates CRUD operations and deployment using Docker and Kubernetes.

## Technologies Used

- Node.js
- Express.js
- Docker
- Kubernetes
- Minikube
- Jenkins
- GitHub
- Postman

## Project Features

- Create a task
- View all tasks
- Update a task
- Delete a task
- Dockerize the application
- Deploy the application using Kubernetes
- Run two replicas of the application

## API Endpoints
 
 GET    | `/tasks` | Get all tasks |
 POST   | `/tasks` | Create a new task |
 PUT    | `/tasks/:id` | Update a task |
 DELETE |`/tasks/:id` | Delete a task |

## Run the Application Locally

Install dependencies:

```bash
npm install
```

### Start the Server

```bash
node server.js
```

The server will run on:

```text
http://localhost:3000
```

## Test the API Using Postman

Use Postman to test the Task Manager APIs.

### 1. GET - Get All Tasks

```text
GET http://localhost:3000/tasks
```

This returns all the tasks stored in the application.

### 2. POST - Create a Task

```text
POST http://localhost:3000/tasks
```

Select:

Body → raw → JSON

Enter:

```json
{
  "name": "Learn Docker"
}
```

This creates a new task.

### 3. PUT - Update a Task

```text
PUT http://localhost:3000/tasks/1
```

Body → raw → JSON

```json
{
  "name": "Learn Kubernetes"
}
```

This updates the task with ID 1.

### 4. DELETE - Delete a Task

```text
DELETE http://localhost:3000/tasks/1
```

This deletes the task with ID 1.

## Docker

Docker is used to containerize the Task Manager application.

### Build Docker Image

```bash
docker build -t task-manager .
```

### Run Docker Container

```bash
docker run -p 3000:3000 --name task-manager-container task-manager
```

### Check Docker Image

```bash
docker images
```

### Check Running Container

```bash
docker ps
```

## Jenkins CI/CD

Jenkins is used to automate the build and deployment process.

The pipeline configuration is stored in:

```text
Jenkinsfile
```

The basic workflow is:

GitHub
   ↓
Jenkins
   ↓
Build
   ↓
Docker
   ↓
Deployment


## Kubernetes

Kubernetes is used to deploy and manage the Task Manager application.

The Kubernetes configuration files are:

```text
deployment.yaml
service.yaml
```

### Load Docker Image into Minikube

```bash
minikube image load task-manager:latest
```

### Apply Deployment

```bash
kubectl apply -f deployment.yaml
```

### Check Pods

```bash
kubectl get pods
```

### Check Deployment

```bash
kubectl get deployment
```

The application uses 2 replicas.

## Kubernetes Service

The Kubernetes Service exposes the application.

### Apply Service

```bash
kubectl apply -f service.yaml
```

### Check Service

```bash
kubectl get service
```

### Get Application URL

```bash
minikube service task-manager-service --url
```

Use the URL provided by Minikube to access the application.

## GitHub

After making changes to the project:

```bash
git add .
git commit -m "Update Task Manager project"
git push
```


This uploads the latest changes to GitHub.

## Project Workflow

```text
Node.js + Express
        ↓
      Git
        ↓
    GitHub
        ↓
    Jenkins
        ↓
     Docker
        ↓
   Kubernetes
        ↓
    Minikube
        ↓
 Kubernetes Service
        ↓
     Postman
```

## Data Storage

The current application stores tasks in an in-memory JavaScript array.

Therefore, the tasks are temporary and will be lost when the Node.js application restarts.

A database such as MongoDB can be added in the future for permanent storage.

## Future Improvements

* Add MongoDB
* Add authentication
* Add input validation
* Add automated testing
* Push Docker image to Docker Hub
* Deploy to AWS
* Add Kubernetes monitoring

## Conclusion

The Task Manager API project demonstrates the complete development and deployment workflow of a Node.js application.

The project starts with building CRUD APIs using Node.js and Express.js and then uses Git and GitHub for version control. Jenkins is used for CI/CD automation, Docker is used for containerization, and Kubernetes with Minikube is used for application deployment and management.

This project provides practical experience in developing, testing, containerizing, automating, and deploying a real-world application.

## Author

**Gowri**
