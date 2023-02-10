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

// Root route
app.get("/", (req, res) => {
  res.send("Hello from the server.");
});

// server listening on port 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
