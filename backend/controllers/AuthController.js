const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../utils/SecretToken");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, username, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const newUser = await User.create({ email, username, password, createdAt });
    const token = createSecretToken(newUser._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
    });
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "Please enter the details" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "User Logged in successfully",
      success: true,
    });
    next();
  } catch (err) {
    console.error(err);
  }
};