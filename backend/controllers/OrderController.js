const Orders = require("../models/OrdersModel");

module.exports.allOrders = async (req, res) => {
  try {
    let allOrders = await Orders.find({});
    res.json(allOrders);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.newOrders = async (req, res) => {
  try {
    let newOrders = new Orders({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrders.save();
    res.send("Order saved successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Orders.findByIdAndDelete(id);
    res.send("Order deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.checkOrder = async (req, res) => {
  const { name, qty } = req.body;
  try {
    const orders = await Orders.findOne({ name: name });
    if (orders && orders.qty >= qty) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};