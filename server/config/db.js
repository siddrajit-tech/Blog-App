import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("Error connecting MongoDb", error);
    process.exit(1);
  }
}
