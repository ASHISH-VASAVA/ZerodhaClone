const express = require("express");
const router = express.Router();
const { HoldingsModel } = require("../models/HoldingsModel");
const { PositionsModel } = require("../models/PositionsModel");
const { OrdersModel } = require("../models/OrdersModel");
const authMiddleware = require("../middleware/authMiddleware");

// ✅ Protected User Data Route
router.get("/data/:userId", authMiddleware, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    const positions = await PositionsModel.find({});
    const orders = await OrdersModel.find({});

    res.json({ holdings, positions, orders });
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

// ✅ Handle Buy or Sell Order
router.post("/order", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // Save order
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    const holding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + Number(qty);
        const totalCost = holding.avg * holding.qty + Number(price) * Number(qty);
        holding.qty = totalQty;
        holding.avg = totalCost / totalQty;
        holding.price = Number(price);
        await holding.save();
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty: Number(qty),
          avg: Number(price),
          price: Number(price),
          net: "+0%",
          day: "+0%",
        });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      if (!holding || holding.qty < qty) {
        return res.status(400).json({ message: "Insufficient holdings to sell" });
      }

      holding.qty -= qty;
      holding.price = Number(price);

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.status(200).json({ message: "Order processed successfully" });
  } catch (err) {
    console.error("❌ Order Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;