const Positions = require("../models/PositionsModel");

module.exports.allPositions = async (req, res) => {
  try {
    let allPositions = await Positions.find({});
    res.json(allPositions);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};