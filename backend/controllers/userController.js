import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {});

// @desc    Auth/login user and get token
// @route   POST /api/users/logout
// @access  Public
const loginUser = asyncHandler(async (req, res) => {});

export { registerUser, loginUser };
