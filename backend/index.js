const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://zerodhaclonefrontend-t4pc.onrender.com",
    "https://zerodhaclonedashboard.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

// ➕ Add dummy holdings
app.get('/addHoldings', async (req, res) => {
  let tempHoldings = [/* ... same array as before ... */];

  await HoldingsModel.deleteMany(); // clear old holdings

  for (let item of tempHoldings) {
    const newHolding = new HoldingsModel({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss || false
    });
    await newHolding.save();
  }

  res.send("Holdings seeded");
});

// ➕ Add dummy positions
app.get('/addPositions', async (req, res) => {
  let tempPositions = [/* ... same array as before ... */];

  await PositionsModel.deleteMany(); // clear old positions

  for (let item of tempPositions) {
    const newPosition = new PositionsModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss || false
    });
    await newPosition.save();
  }

  res.send("Positions seeded");
});

// 🔍 Fetch all holdings
app.get('/allHoldings', async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.json(holdings);
});

// 🔍 Fetch all positions
app.get('/allPositions', async (req, res) => {
  const positions = await PositionsModel.find({});
  res.json(positions);
});

// ✅ BUY / SELL endpoint
app.post('/newOrder', async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const quantity = Number(qty);
    const priceNum = Number(price);

    // Save to Orders
    const newOrder = new OrdersModel({ name, qty: quantity, price: priceNum, mode });
    await newOrder.save();

    const holding = await HoldingsModel.findOne({ name });

    // BUY logic
    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + quantity;
        const totalCost = holding.avg * holding.qty + priceNum * quantity;
        const newAvg = totalCost / totalQty;

        holding.qty = totalQty;
        holding.avg = newAvg;
        holding.price = priceNum;
        await holding.save();
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty: quantity,
          avg: priceNum,
          price: priceNum,
          net: "+0%",
          day: "+0%",
        });
        await newHolding.save();
      }
    }

    // SELL logic
    if (mode === "SELL") {
      if (!holding || holding.qty < quantity) {
        return res.status(400).json({ error: "Not enough stock to sell" });
      }

      holding.qty -= quantity;
      holding.price = priceNum;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.send("✅ Order processed and holdings updated");

  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).send("Server error");
  }
});

// Start server
app.listen(PORT, () => {
  mongoose.connect(uri)
    .then(() => console.log("✅ DB Connected"))
    .catch(err => console.error("❌ DB Error:", err));

  console.log(`🚀 Server running on port ${PORT}`);
});
