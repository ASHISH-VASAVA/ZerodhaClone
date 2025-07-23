const {Schema}=require("mongoose");

const OrdersSchema=new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode:String,
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // optional if you have a user model
  },
});

module.exports={OrdersSchema};