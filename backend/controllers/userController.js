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
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  console.log(name, email, password);
  try {
    const { name, email, password } = req.body;
    const user = User.findOne({ email });
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
// @route   POST /api/users/logout
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { registerUser, loginUser };
