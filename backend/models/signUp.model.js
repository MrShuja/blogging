import mongoose from "mongoose";

const signUpSchema=mongoose.Schema({
    name:{
        type:String,
        default:"",
        require: true
    },
    email:{
        type:String,
        default:"",
        unique:true
    },
    password:{
        type:String,
        default:""
    }
}, {timestamps:true} )
const signupModel = mongoose.model("users", signUpSchema)
export default signupModel;