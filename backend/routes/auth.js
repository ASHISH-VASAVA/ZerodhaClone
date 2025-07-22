const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// ✅ Signup Route
router.post("/signup", async (req, res) => {
  try {
    console.log("📨 Signup Request:", req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    console.log("✅ User Saved:", newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Signup Error:", err.message);
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error("❌ Login Error:", err.message);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

module.exports = router;
