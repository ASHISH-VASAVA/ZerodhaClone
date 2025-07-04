require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

const authRoute = require("./routes/AuthRoute");
const ordersRoute = require("./routes/OrderRoute");
const holdingsRoute = require("./routes/HoldingRoute");
const positionsRoute = require("./routes/PositionRoute");

const app = express();
app.use(
  cors({
    origin: ["https://zerodha-frontend.onrender.com", "https://zerodha-dashboard.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/order", ordersRoute);
app.use("/holding", holdingsRoute);
app.use("/position", positionsRoute);

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});