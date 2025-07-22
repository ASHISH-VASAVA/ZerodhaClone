const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  stockName: String,
  quantity: Number,
  price: Number,
  mode: String, // BUY or SELL
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
