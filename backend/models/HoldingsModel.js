const mongoose = require("mongoose");
const HoldingsSchema = require("../schema/HoldingsSchema");

const HoldingsModel = mongoose.model("Holdings", HoldingsSchema);

module.exports = HoldingsModel;