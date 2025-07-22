// backend/models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  stockName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  action: {
    type: String,
    enum: ['buy', 'sell'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// ✅ Use existing model if already compiled
module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);
