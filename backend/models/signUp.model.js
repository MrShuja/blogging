const mongoose = require("mongoose");

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
module.exports=mongoose.model("signUp", signUpSchema)