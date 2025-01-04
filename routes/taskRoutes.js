import express from 'express';
import { createTask, deleteTask, getAllTasks, getTaskById, updateTaskStatus } from '../controllers/taskController.js';


const router = express.Router();


// create a new task 
router.post('/',createTask )

//get all tasks
router.get('/',getAllTasks);

//get a single task by id 
router.get('/:id', getTaskById)

//update a task status
router.put('/:id', updateTaskStatus)

//delete a task
router.delete('/:id', deleteTask)



export default router;