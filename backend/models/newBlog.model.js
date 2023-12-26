import mongoose from "mongoose";

const newBlogSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        required:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
}, {timeStamps:true}
)
const blogModel=mongoose.model("newblog", newBlogSchema)
export default blogModel;
