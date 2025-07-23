const {Schema}=require("mongoose");

const OrdersSchema=new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode:String,
    userId: String ,
});

module.exports={OrdersSchema};