const Holdings = require("../models/HoldingsModel");

module.exports.allHoldings = async (req, res) => {
  try {
    let allHoldings = await Holdings.find({});
    res.json(allHoldings);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.newHoldings = async (req, res) => {
  try {
    let newHoldings = new Holdings({
      name: req.body.name,
      qty: req.body.qty,
      avg: req.body.avg,
      price: req.body.price,
      net: req.body.net,
      day: req.body.day,
      isLoss: req.body.isLoss,
    });
    await newHoldings.save();
    res.send("Holdings saved successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};