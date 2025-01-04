import  mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    status: { 
        type: String, 
        enum: ['pending', 'in-progress', 'completed'], 
        default: 'pending', 
    },
},{timestamps:true});


export const Task = mongoose.model('Task', taskSchema);