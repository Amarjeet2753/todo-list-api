# todo-list-api

A simple REST API for managing a to-do list application with features like creating, fetching, updating, and deleting tasks.

## Endpoints

### 1. POST /api/v1/tasks
Create a new task.

**Request Body:**

{
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending" (optional field by deafault it will be pending)
} 


### 2. GET /api/v1/tasks
Fetch all tasks.

### 3. GET /api/v1/tasks/:id
Fetch a task by its ID.

### 4. PUT /api/v1/tasks/:id
Update a task's status (pending, in-progress, completed).

### 5. DELETE /api/v1/tasks/:id
Delete a task by its ID.

# How to Run the Project
Follow these steps to run the project locally:

## 1. Clone the repository:
git clone https://github.com/Amarjeet2753/todo-list-api.git
cd todo-list-api

## 2.Install dependencies:
npm install

## 3.Create a .env file in the root directory and add your MongoDB connection string:
MONGO_DB_URI=mongodb+srv://<your-username>:<your-password>@cluster0.eagen.mongodb.net/todoApp?retryWrites=true&w=majority
PORT=8080

## 4.Start the server:
npm run dev

The server will be running on http://localhost:8080.

Now you can test API using  api-testing tools like Postman , Insomnia etc.