const mongoose = require("mongoose");
const OrdersSchema = require("../schema/OrdersSchema");

const OrdersModel = mongoose.model("Orders", OrdersSchema);

module.exports = OrdersModel;