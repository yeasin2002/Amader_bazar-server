import mongoose from "mongoose";
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("MongoDB Connected");
    }
  } catch (error) {
    console.log("MongoDB Connection Failed");
    console.log(chalk.red(error.message));
  }
};
export default connectDB;
