import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("database connected.......");
  } catch (error) {
    console.log(error.message);
  }
};

export default db;
