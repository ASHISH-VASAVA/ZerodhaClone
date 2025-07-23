const express = require("express");
const router = express.Router();
const { OrdersModel } = require("../models/OrdersModel");

// ✅ POST: Create new order
router.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode, userId } = req.body;

  try {
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
      userId, // ✅ store userId from frontend
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (err) {
    console.error("❌ Error placing order:", err);
    res.status(500).json({ error: "Failed to place order" });
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
