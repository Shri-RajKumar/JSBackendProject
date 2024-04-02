import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOODB_URL}/&${DB_NAME}`)
        console.log(`mongoose Connected !! Db Host !! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGOOSE DB CONNECTION ERROR", error);
        process.exit(1)
    }
}