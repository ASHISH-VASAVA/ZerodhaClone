import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OrdersList.css";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("https://zerodha-backend-4r4d.onrender.com/orders"); // ✅ UPDATE with your backend URL
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://zerodha-backend-4r4d.onrender.com/orders/${id}`);
      setOrders((prev) => prev.filter((order) => order._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>

      <div className="orders-table">
        <div className="table-header">
          <span>Stock</span>
          <span>Mode</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
          <span>Action</span>
        </div>

        {orders.map((order) => (
          <div className="table-row" key={order._id}>
            <span>{order.name}</span>
            <span>{order.mode}</span>
            <span>{order.qty}</span>
            <span>₹{order.price}</span>
            <span>₹{(order.qty * order.price).toFixed(2)}</span>
            <span>
              <button className="delete-btn" onClick={() => handleDelete(order._id)}>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
