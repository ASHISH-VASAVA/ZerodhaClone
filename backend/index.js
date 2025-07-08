const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const userDataRoutes = require("./routes/userData"); // ✅ NEW ROUTE

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ✅ Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: [
    "https://zerodhaclonefrontend-t4pc.onrender.com",
    "https://zerodhaclonedashboard.onrender.com"
  ],
  credentials: true
}));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userDataRoutes); // ✅ NEW USER DATA ROUTE

// ✅ Static Holdings Insert
app.get('/addHoldings', async (req, res) => {
  const tempHoldings = [ /* holdings array here */ ];
  for (let item of tempHoldings) {
    let newHolding = new HoldingsModel({
      ...item,
      userId: "static-user-id" // for testing, replace later
    });
    await newHolding.save();
  }
  res.send("Holdings added");
});

// ✅ Static Positions Insert
app.get('/addPositions', async (req, res) => {
  const tempPositions = [ /* positions array here */ ];
  for (let item of tempPositions) {
    let newPosition = new PositionsModel({
      ...item,
      userId: "static-user-id" // for testing, replace later
    });
    await newPosition.save();
  }
  res.send("Positions added");
});

// ✅ Test Orders Insert
app.post('/newOrder', async (req, res) => {
  try {
    const { name, qty, price, mode, userId } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode, userId });
    await newOrder.save();

    if (mode === "BUY") {
      const existing = await HoldingsModel.findOne({ name, userId });
      if (existing) {
        const totalQty = existing.qty + Number(qty);
        const totalCost = existing.avg * existing.qty + price * qty;
        const newAvg = totalCost / totalQty;

        existing.qty = totalQty;
        existing.avg = newAvg;
        existing.price = price;
        await existing.save();
      } else {
        const newHolding = new HoldingsModel({
          name, qty, avg: price, price, net: "+0%", day: "+0%", userId
        });
        await newHolding.save();
      }
    }

    res.send("Order placed & holdings updated");
  } catch (err) {
    console.error("Order Error:", err);
    res.status(500).send("Order Failed");
  }
});

// ✅ Mongo + Start
app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri).then(() => {
    console.log("DB connected!");
  }).catch(err => {
    console.error("DB connection failed", err);
  });
});
