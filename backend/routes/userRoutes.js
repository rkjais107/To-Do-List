import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
const router = express.Router();

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
router.post("/register", registerUser);

// @desc    Auth/login user and get token
// @route   POST /api/users/login
// @access  Public
router.post("/login", loginUser);

// @desc    Logout a user and clear a token
// @route   POST /api/users/logout
// @access  Public
router.get("/logout", logoutUser);

export default router;
