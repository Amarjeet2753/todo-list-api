import mongoose from "mongoose";



const connectDB = async () => {
    
    try {
        
        // Connect to the database
        
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Database connected successfully !');
    } catch (error) {
        console.log("Error occured in connection ", error); 
    }
}
export default connectDB;