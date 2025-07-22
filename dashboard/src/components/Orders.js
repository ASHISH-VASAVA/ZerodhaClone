import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = "demo"; // Replace with actual logged-in user ID

const deleteOrder = async (orderId) => {
  try {
    const res = await axios.delete(`https://your-backend-url/api/orders/${orderId}`);
    console.log('Deleted:', res.data);
    // update UI after deletion
  } catch (err) {
    console.error('Delete failed', err);
  }
};

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
          <p>You haven't placed any orders today</p>
          <button className="btn" onClick={() => (window.location.href = "/")}>
            Get started
          </button>
        </div>
      ) : (
        <div className="order-list">
          <h2>Your Orders</h2>
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <p><strong>Stock:</strong> {order.stockName}</p>
              <p><strong>Mode:</strong> {order.mode}</p>
              <p><strong>Quantity:</strong> {order.qty}</p>
              <p><strong>Price:</strong> ₹{order.price}</p>
              <p><strong>Total:</strong> ₹{(order.qty * order.price).toFixed(2)}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>

              <button
                onClick={() => handleDeleteOrder(order._id)}
                className="delete-btn"
              >
                Delete Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
