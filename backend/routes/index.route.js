const express = require("express");
const router = express.Router();
const SignUpRoute = require("./signUp.route");

router.use("/signUp", SignUpRoute);

module.exports=router;