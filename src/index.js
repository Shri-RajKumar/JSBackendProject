import dotenv from "dotenv";
import {connectDB} from './db/index.js'

dotenv.config({
    path:".env"
})

connectDB()








/*

import express from "express";
const app = express()

( async()  => {
    try {
        await mongoose.connect(`${process.env.MONGOODB_URL}/&${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERR:",error);
            throw error
        })
    } catch (error) {
        console.log("ERROR", error);
        throw err
    }
} )()

*/