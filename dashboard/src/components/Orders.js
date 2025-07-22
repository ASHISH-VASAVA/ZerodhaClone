import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = "demo"; // Replace with dynamic user ID when login is implemented

  // Function to fetch and filter orders from the last 24 hours
  const fetchRecentOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://zerodha-backend-4r4d.onrender.com/orders?userId=${userId}`
      );

      const now = new Date();
      const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      
      const recentOrders = response.data.filter(order => {
        const orderDate = new Date(order.timestamp);
        return orderDate >= last24Hours && orderDate <= now;
      });

      setOrders(recentOrders);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentOrders();

    // Auto-refresh every 24 hours (86400000 ms)
    const interval = setInterval(() => {
      fetchRecentOrders();
    }, 86400000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>No orders placed in the last 24 hours.</p>
          <button className="btn" onClick={() => window.location.href = "/"}>
            Start Trading
          </button>
        </div>
      ) : (
        <div className="order-list">
          <h2>Your Recent Orders (Last 24 Hours)</h2>
          {orders.map((order, idx) => (
            <div key={idx} className="order-card">
              <p><strong>Stock:</strong> {order.name}</p>
              <p><strong>Order Type:</strong> <span className={order.mode === 'BUY' ? 'buy' : 'sell'}>{order.mode}</span></p>
              <p><strong>Quantity:</strong> {order.qty}</p>
              <p><strong>Price:</strong> ₹{order.price}</p>
              <p><strong>Total:</strong> ₹{(order.qty * order.price).toFixed(2)}</p>
              <p><strong>Date:</strong> {order.timestamp ? new Date(order.timestamp).toLocaleString() : "N/A"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
