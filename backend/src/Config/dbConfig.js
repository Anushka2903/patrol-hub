import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conString = process.env.MONGODB_URI;

export async function ConfigureDb() {
    try {
        if (!conString) {
            throw new Error("MONGODB_URI is missing in .env");
        }

        await mongoose.connect(conString);
        console.log("DB Connected....");
    }
    catch (error) {
        console.error("DB connection failed:", error.message);
        throw error;
    }
}