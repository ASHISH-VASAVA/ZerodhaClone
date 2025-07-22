const {Schema}=require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  stockName: {
    type: String,
    required: true,
  },
  orderType: {
    type: String, // "buy" or "sell"
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports={OrdersSchema};