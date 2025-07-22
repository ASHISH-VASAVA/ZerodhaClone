const express = require("express");
const router = express.Router();
const Holding = require("../models/Holding");

router.post("/sellStock", async (req, res) => {
  const { userId, stockName, quantity } = req.body;

  try {
    const holding = await Holding.findOne({ userId, stockName });

    if (!holding || holding.quantity < quantity) {
      return res.status(400).json({ error: "Not enough stock to sell" });
    }

    holding.quantity -= quantity;

    if (holding.quantity === 0) {
      await Holding.deleteOne({ _id: holding._id });
    } else {
      await holding.save();
    }

    res.status(200).json({ message: "Stock sold successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
