const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  createdAt: { type: Date, default: Date.now } // 👈 Auto adds order time
});

module.exports = { OrdersSchema };
