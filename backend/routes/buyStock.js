const express = require("express");
const router = express.Router();
const Holding = require("../models/Holding");

// Buy Stock
router.post("/buyStock", async (req, res) => {
  const { userId, stockName, quantity, price } = req.body;

  try {
    const existingHolding = await Holding.findOne({ userId, stockName });

    if (existingHolding) {
      // update existing holding
      existingHolding.quantity += quantity;
      existingHolding.averagePrice =
        (existingHolding.averagePrice * existingHolding.quantity + price * quantity) /
        (existingHolding.quantity + quantity);

      await existingHolding.save();
    } else {
      // create new holding
      const newHolding = new Holding({
        userId,
        stockName,
        quantity,
        averagePrice: price,
      });
      await newHolding.save();
    }

    res.status(200).json({ message: "Stock bought successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
