import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
const router = express.Router();

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
router.post("/register", registerUser);

// @desc    Auth/login user and get token
// @route   POST /api/users/logout
// @access  Public
router.post("/login", loginUser);

export default router;
