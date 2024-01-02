import express from "express";
const router = express.Router();
import {createNewUser, loginUser} from "../controllers/signUp.controller.js";


router.post("/newUser", createNewUser);
router.post("/newUser/login", loginUser);

export default router;
