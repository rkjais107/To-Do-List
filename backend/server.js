import express from "express";
import dotenv from "dotenv";
dotenv.config(); // to read the files from  enviornment variable
import colors from "colors";

// Global constants
const port = process.env.PORT || 5000;

/// express server configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Body parser
