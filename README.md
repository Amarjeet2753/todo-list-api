# todo-list-api

A simple REST API for managing a to-do list application with features like creating, fetching, updating, and deleting tasks.

## Endpoints

### 1. POST /api/v1/tasks
Create a new task.

**Request Body:**
```json
{
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending"
} ```


### 2. GET /api/v1/tasks
Fetch all tasks.

