import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css"; // Optional: Keep your styles here

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = "demo"; // Replace with dynamic user ID when login is implemented

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

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <button className="btn" onClick={() => window.location.href = "/"}>
            Start Trading
          </button>
        </div>
      ) : (
        <div className="order-list">
          <h2>Your Orders</h2>
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
