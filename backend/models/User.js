const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },     // ✅ Display name
  email: { type: String, required: true, unique: true }, // ✅ Email is unique
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", UserSchema);
