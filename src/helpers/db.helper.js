import config from "@/config";
import mongoose from "mongoose";

export default async function connectDB() {
  if (mongoose.connection?.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    return await mongoose.connect(config.db_url, {
      maxPoolSize: 10, // set pool size to 10
      minPoolSize: 0,
      serverSelectionTimeoutMS: 30000,
    });
  }
}
