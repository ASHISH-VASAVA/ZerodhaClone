import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // Shared CSS

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [currentUserId, setCurrentUserId] = useState(null);
  const { closeSellWindow } = useContext(GeneralContext);

  // Load userId from localStorage
  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    setCurrentUserId(storedId);
  }, []);

  const handleSellClick = async () => {
    if (!currentUserId) {
      alert("❌ User ID missing. Please login again.");
      return;
    }

    try {
      const res = await axios.post("https://zerodha-backend-4r4d.onrender.com/newOrder", {
        name: uid, // stock name
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
        userId: currentUserId, // from localStorage
      });

      alert("✅ Sell order placed successfully!");
      window.location.reload(); // Refresh holdings
    } catch (error) {
      console.error("Sell error:", error);
      alert("❌ Sell order failed! Check console for details.");
    } finally {
      closeSellWindow();
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
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
              min="0"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Expected return ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
