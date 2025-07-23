const express = require("express");
const router = express.Router();
const { OrdersModel } = require("../models/OrdersModel");

// ✅ POST: Create new order
router.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode, userId } = req.body;

    if (!name || !qty || !price || !mode || !userId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newOrder = new OrdersModel({ name, qty, price, mode, userId });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", newOrder });
  } catch (error) {
    console.error("❌ Error placing order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// ✅ GET: Fetch orders by userId
router.get("/orders", async (req, res) => {
  const userId = req.query.userId;

  try {
    const orders = await OrdersModel.find({ userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

module.exports = router;
