import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = "demo"; // Replace with actual user ID dynamically

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://zerodha-backend-4r4d.onrender.com/orders?userId=${userId}`
        );
        setOrders(response.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading your orders from the last 24 hours...</p>;

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>No buy/sell orders in the last 24 hours.</p>
          <button className="btn" onClick={() => window.location.href = "/"}>
            Place New Order
          </button>
        </div>
      ) : (
        <div className="order-list">
          <h2>Your Orders (Last 24 Hours)</h2>
          {orders.map((order, idx) => (
            <div key={idx} className="order-card">
              <p><strong>Stock:</strong> {order.name}</p>
              <p><strong>Type:</strong> {order.mode}</p>
              <p><strong>Quantity:</strong> {order.qty}</p>
              <p><strong>Price:</strong> ₹{order.price}</p>
              <p><strong>Total:</strong> ₹{(order.qty * order.price).toFixed(2)}</p>
              <p><strong>Date:</strong> {new Date(order.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
