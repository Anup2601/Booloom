import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/user_routs.js"
// import http from "http";


const app=express();
const server=createServer(app);
const io=connectToSocket(server);


app.set("port", (process.env.PORT || 5173))

app.use(cors());
app.use(express.json({limit:"100kb"}));
app.use(express.urlencoded({limit:"100kb", extended:true}));

app.use("/api/v1/users",userRoutes);
// app.use("/api/v2/users",newUserRoutes);

const start =async()=>{
    app.set("mongo_user")
    const connectionDB=await mongoose.connect("mongodb+srv://anupm0873:f1XWZh288Vfwsj7J@cluster0.hny9o.mongodb.net/");
    console.log(`MONGO Connected DB Host: ${connectionDB.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("App is listing to port");
    })
}
start();
