const express = require("express");
const router = express.Router();
const { OrdersModel } = require("../models/OrdersModel");

// DELETE an order
router.delete("/:id", async (req, res) => {
  try {
    const deletedOrder = await OrdersModel.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error("Delete failed:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
