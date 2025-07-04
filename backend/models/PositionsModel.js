const mongoose = require("mongoose");
const PostionsSchema = require("../schema/PositionsSchema");

const PositionsModel = mongoose.model("Positions", PostionsSchema);

module.exports = PositionsModel;