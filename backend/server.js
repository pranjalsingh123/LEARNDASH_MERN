const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

// MongoDB URI and JWT secret directly defined
const MONGO_URI = "mongodb://localhost:27017/LearnDash"; // MongoDB connection string
const JWT_SECRET = "mysecretkey"; // Secret key for JWT

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors()); // To allow cross-origin requests

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log("MongoDB connection error:", err);
  });

// Basic route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Authentication routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
