import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../store/AuthContext";
import { GeneralContext } from "../store/GeneralContext";
import "./BuyActionWindow.css"; // Reuse same CSS for consistent style

const SellActionWindow = ({ uid }) => {
  const { user } = useContext(AuthContext);
  const { closeSellWindow } = useContext(GeneralContext);

  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const sellHandler = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-clone-backend-cbao.onrender.com/api/transactions/sell",
        {
          uid,
          userId: user._id,
          quantity: Number(quantity),
          price: Number(price),
        }
      );

      setMessage("Stock sold successfully!");
      setTimeout(() => {
        setMessage("");
        closeSellWindow();
      }, 2000);
    } catch (error) {
      setMessage("Failed to sell stock.");
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Sell Stock</h2>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="buy-button" onClick={sellHandler}>
          Sell
        </button>
        <button className="cancel-button" onClick={closeSellWindow}>
          Cancel
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default SellActionWindow;
