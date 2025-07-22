const {Schema}=require("mongoose");

const HoldingsSchema=new Schema({
    userid:String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports={HoldingsSchema};