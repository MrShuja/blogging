import express from "express";
const router = express.Router();
import multer from 'multer';
import path from "path";
import { createBlog, getAllBlog, getSingleBlog, deleteBlog, getLatestBlogs} from '../controllers/newBlog.controller.js';

const storage = multer.diskStorage({
    destination:(req, path, cb)=>{
        cb(null, "upload/")
        
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage
})

router.post("/newBlogs", upload.single("image"), createBlog);
router.get("/blogs", getAllBlog);
router.get("/:id", getSingleBlog)
router.delete("/:id", deleteBlog);
router.get("/blogs/latestBlogs", getLatestBlogs)



export default router;
