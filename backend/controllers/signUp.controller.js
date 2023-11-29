const SignUp = require("../models/signUp.model");

//the signUp controller to post the new user data on the database
exports.store=async(req, res)=>{
    try{
        const payload = req.body;
        const signup = await SignUp.create(payload);
        res.json({status:200, success:true, message:"new user signUp successfully", signup})
    }catch(err){
        console.log(err)
    }
}