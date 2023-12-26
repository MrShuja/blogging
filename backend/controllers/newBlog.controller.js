import BlogModel from "../models/newBlog.model.js"

export const createBlog = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const newBlog = await BlogModel.create({ title, content, category, image: req.file ? req.file.filename : undefined });
        res.status(200).json({ status: 200, success: true, message: "New blog has been posted", newBlog });
    } catch (err) {
        console.log("error in try block" + err);
        res.status(500).json({ status: 500, success: false, message: "Internal Server Error" });
    }
};

// to get all blog
export const getAllBlog = async (req, res) => {
    try {
        console.log("geting data")
        const users = await BlogModel.find()
        if (!users) {
            return res.status(404).json({ message: "no blogs found" })
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

// Controller to fetch single blog
export const getSingleBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findOne({ _id: id });
        // console.log(blog)
        if (!blog) {
            // Return a 404 status code and a meaningful message
            return res.status(404).json({ status: 404, success: false, message: "Blog not found" });
        }

        // Return the blog details if found
        res.json({ status: 200, success: true, message: "Blog found successfully", blog });
    } catch (error) {
        // Handle any other errors
        console.error(error);
        res.status(500).json({ status: 500, success: false, message: "Internal Server Error" });
    }
};
