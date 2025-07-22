const {Schema}=require("mongoose");

const OrdersSchema=new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode:String,
    timestamp: {
    type: Date,
    default: Date.now, // ✅ required to sort and filter by time
  },
});

module.exports={OrdersSchema};