const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userSchema");
require("dotenv").config();

const saltRounds = 10;

// Signup
async function userAuth(req, res) {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hash = await bcrypt.hash(password, saltRounds);

    const newUser = new userModel({
      firstName,
      lastName,
      email,
      password: hash,
      role,
    });

    await newUser.save();

    res.status(200).json({ message: "Signup successful!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

// Login
async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWTSECRETKEY,
      { expiresIn: "1d" }
    );

    res.cookie("jwtToken", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({
      message: "Login successful",
      role: user.role,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { userAuth, login };
