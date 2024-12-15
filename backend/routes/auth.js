const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Make sure this path is correct

const router = express.Router();

// Register route
// Register Route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    console.log('New user created:', newUser); // Log the newly created user

    // Generate JWT Token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token, userId: newUser._id, username: newUser.username });
  } catch (err) {
    console.error(err); // Log the error to help debug
    res.status(500).json({ message: "Server error" });
  }
});


// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
});

module.exports = router;
