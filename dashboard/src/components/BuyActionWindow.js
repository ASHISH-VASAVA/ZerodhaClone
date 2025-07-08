import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isBuyMode, setIsBuyMode] = useState(true); // ✅ Toggle for BUY/SELL

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyOrSellClick = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "https://zerodhaclone-backend-8vq9.onrender.com/api/user/order",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: isBuyMode ? "BUY" : "SELL",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(`${isBuyMode ? "Buy" : "Sell"} order successful!`);
      closeBuyWindow();
    } catch (err) {
      toast.error(err.response?.data?.message || "Transaction failed");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        {/* ✅ Toggle Buttons for Buy/Sell */}
        <div className="toggle-btns mb-3">
          <button
            className={`btn ${isBuyMode ? "btn-primary" : "btn-light"}`}
            onClick={() => setIsBuyMode(true)}
          >
            BUY
          </button>
          <button
            className={`btn ${!isBuyMode ? "btn-danger" : "btn-light"}`}
            onClick={() => setIsBuyMode(false)}
          >
            SELL
          </button>
        </div>

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyOrSellClick}>
            {isBuyMode ? "Buy" : "Sell"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
