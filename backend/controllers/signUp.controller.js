const SignUp = require("../models/signUp.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "this-is-a-secret-key";

//the signUp controller to post the new user data on the database
exports.store=async(req, res)=>{
    try{
        const payload = req.body;
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(payload.password, saltRounds);
        payload.password=hashPassword;
        const signup = await SignUp.create(payload);
        res.json({status:200, success:true, message:"new user signUp successfully", signup})
    }catch(err){
        console.log(err)
    }
}

// Login authenticatiion 

exports.login = async (req, res) =>{
    try{
        const {email, password} = req.body;
        console.log(email)
        const findUser = await SignUp.findOne({email});
        if(!findUser){
            return res.json({message:"User not found"});
        }
            await bcrypt.compare(password, findUser.password, (err, result) =>{
                if(err){
                    return res.json({err});
                }else if(result){
                    const payload = {userId:findUser._id, email:findUser.email};
                    jwt.sign(payload, SECRET_KEY, {expiresIn:1500},(err, result)=>{
                        if(err){
                            return res.json({err})
                        }else {
                            res.json({message:"Login Successfully", token:result})
                        }


                    })
                } else{
                    res.json({message:"Password does not match"})
                }
            })
        
    }catch(err){
        console.log(err)

    }
}