// /backend/schemas/OrdersSchema.js
const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Optional: if you want to link it to User model
    required: true
  }
});

module.exports = { OrdersSchema };
