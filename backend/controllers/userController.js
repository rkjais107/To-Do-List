import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_SECRET;
import User from "../models/userModel.js";

// To generate token
const signToken = (user) => {
  return jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1d" });
};
// To hash password
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    const token = signToken(newUser);
    res.status(200).json({
      message: "User created successfully",
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Auth/login user and get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Passord is incorrect" });
    }
    const token = signToken(user);
    res.status(200).json({
      message: "User Login successfully",
      _id: user._id,
      name: user.name,
      email: user.email,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Logout a user and clear a token
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  try {
    const token = "";
    res.status(200).json({
      message: "User logout successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { registerUser, loginUser, logoutUser };
