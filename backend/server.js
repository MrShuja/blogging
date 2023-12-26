import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import NewBlog from "./routes/blog.route.js";
import dotenv from 'dotenv'
import cors from 'cors';
import path from "path";
import { fileURLToPath } from 'url'; // Import fileURLToPath
import { dirname } from 'path'; // Import dirname

const __filename = fileURLToPath(import.meta.url); // Use fileURLToPath
const __dirname = dirname(__filename); // Use dirname

dotenv.config();
const app = express();
const PORT = 8000 ||process.env.PORT;

const username = process.env.USER;
const password = process.env.PASSWORD;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors("*"))
// to add new blog
app.use("/api", NewBlog)
app.use('/upload', express.static(path.join(__dirname, 'upload')));


mongoose.connect(`mongodb+srv://${username}:${password}@shuja.qo1pqqp.mongodb.net/blog_site`).then(()=>{
    console.log("database connected")
})
app.listen(PORT, ()=>{
    console.log(`Server is lisenting on port ${PORT}`)
})