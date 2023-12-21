const express = require("express");
const router = express.Router();
const controller = require("../controllers/signUp.controller");


router.post("/", controller.store);
router.post("/login", controller.login);

module.exports= router;
