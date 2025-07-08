const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const HoldingsModel = mongoose.model("Holding", HoldingsSchema);

module.exports = { HoldingsModel };
