import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDb.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;



// Middleware
app.use(express.json());


// Api routes
app.use('/api/v1/tasks', taskRoutes);



// Check required environment variables
if (!process.env.MONGO_DB_URI) {
    console.error("Error: MONGO_DB_URI is not defined in the environment variables.");
    process.exit(1);
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
 }).catch((error) => { 
    console.log("Error occured in connection ", error);
});



