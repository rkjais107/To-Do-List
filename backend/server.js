import express from "express";
import dotenv from "dotenv";
dotenv.config(); // to read the files from  enviornment variable
import colors from "colors";
import connectDB from "./config/db.js";
import listRoutes from "./routes/listRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
connectDB();

// Global constants
const port = process.env.PORT || 5000;

/// express server configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Body parser

// Routes
app.use("/api/list", listRoutes);
app.use("/api/users", userRoutes);
// Root route
app.get("/", (req, res) => {
  res.json({ message: "Hello from the server." });
});

// Using errorMiddleware
app.use(notFound);
app.use(errorHandler);

// server listening on port 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
