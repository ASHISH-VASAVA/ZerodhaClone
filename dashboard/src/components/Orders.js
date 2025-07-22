import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = "demo"; // Replace with real user ID when auth is ready

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `https://zerodha-backend-4r4d.onrender.com/orders?userId=${userId}`
      );
      const allOrders = response.data;

      // Filter orders from last 24 hours
      const now = new Date();
      const last24HoursOrders = allOrders.filter((order) => {
        const orderTime = new Date(order.timestamp);
        return now - orderTime <= 24 * 60 * 60 * 1000; // 24 hours in ms
      });

      setOrders(last24HoursOrders);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(
        `https://zerodha-backend-4r4d.onrender.com/orders/${orderId}`
      );
      // Remove from local state
      setOrders((prev) => prev.filter((order) => order._id !== orderId));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  useEffect(() => {
  const fetchOrders = async () => {
    const res = await axios.get("https://zerodha-backend-4r4d.onrender.com/getOrders");
    setOrders(res.data); // this should have name, price, qty
  };
  fetchOrders();
}, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders in the last 24 hours.</p>
          <button className="btn" onClick={() => window.location.href = "/"}>
            Start Trading
          </button>
        </div>
      ) : (
        <div className="order-list">
          <h2>Your Recent Orders</h2>
          {orders.map((order, idx) => (
            <div key={idx} className="order-card">
              <p><strong>Stock:</strong> {order.name}</p>
              <p><strong>Type:</strong> <span className={order.mode === "BUY" ? "buy" : "sell"}>{order.mode}</span></p>
              <p><strong>Quantity:</strong> {order.qty}</p>
              <p><strong>Price:</strong> ₹{order.price}</p>
              <p><strong>Total:</strong> ₹{(order.qty * order.price).toFixed(2)}</p>
              <p><strong>Placed At:</strong> {new Date(order.timestamp).toLocaleString()}</p>
              <button className="btn delete" onClick={() => handleDelete(order._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
