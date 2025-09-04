import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

import authRoutes from './routes/auth.route.js';
import msgRoutes from './routes/message.route.js';

import { connectDB } from './lib/db.js';
import { config } from 'dotenv';
config();

import { app, server } from './lib/socket.js';

const PORT = process.env.PORT;
const __dirname = path.resolve();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/msg",msgRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
    })
}


connectDB();
server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    
})