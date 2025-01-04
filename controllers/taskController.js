
import { Task } from "../models/task.model.js";
import mongoose from "mongoose";


// Create a new task

export const createTask = async (req, res) => {
    try {

        //  console.log(req.body);
        const { title, description, status = 'pending' } = req.body;

        // Ensure title and description are provided
        if (!title) {
            return res.status(400).json({success : false, error: 'Title is required' });
        }
        if (!description) {
            return res.status(400).json({ success : false, error: 'Description is required' });
        }

        // Ensure status is valid pending, in-progress, completed

        const validStatuses = ['pending', 'in-progress', 'completed'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ success : false, error: 'Invalid status value only "pending, in-progress, completed" is allowed' });
        }

        // Create the task
        const task = new Task({ title, description, status });
        await task.save();

        return res.status(201).json({ success: true, message: "Todo created successfully .", task });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Get all tasks

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({ success: true, tasks });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Get a single task

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;

     // Validate if the ID is a valid ObjectId
     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid task ID format" });
    }

        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        return res.status(200).json({ success: true, task });
    } catch (error) {
        res.status(500).json({ success: false, message :"error in task get by id ", error: error.message });
    }
}


// Update a task status

export const updateTaskStatus = async (req, res) => {
  const { id } = req.params; // Get task ID from request params

   // Validate if the ID is a valid ObjectId
   if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid task ID format" });
}

  const { status } = req.body; // Get status from request body

  // Check if the provided status is valid

  if (!['pending', 'in-progress', 'completed'].includes(status)) {
    return res.status(400).json({success : false, message: 'Invalid status value only "pending, in-progress, completed" is allowed' });
  }

  try {
    // Find task by ID and update the status
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status }, // Update the status
      { new: true, runValidators: true } // Return the updated task
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json({success : true , message :"Task updated successfully .",updatedTask});
  } catch (error) {
    console.error(error);
    return res.status(500).json({success : false, message: 'error in task status updation', error: error.message });
  }
};


// Delete a task

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

         // Validate if the ID is a valid ObjectId
         if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Invalid task ID format" });
        }
        
        // Find task by ID and delete   
        const task  = await Task.findByIdAndDelete(id); 
        if (!task) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }       

        return res.status(200).json({ success: true, message: "Task deleted successfully" });

    } catch (error) {
       return res.status(500).json({ success: false, message : "error in task deletion",  error: error.message });
    }
}