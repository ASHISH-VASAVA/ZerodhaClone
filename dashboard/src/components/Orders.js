import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css"; // Optional, for styling

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = "demo"; // Replace with actual logged-in user id if dynamic

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(
        `https://zerodha-backend-4r4d.onrender.com/orders/${orderId}`
      );
      // Refetch or filter the order list
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
    } catch (error) {
      console.error("Failed to delete order:", error);
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
        <div className="orders-container">
          <h2>Your Orders</h2>

          <div className="orders-table">
            <div className="table-header">
              <span>Stock</span>
              <span>Mode</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
            </div>

            {orders.map((order, idx) => (
              <div className="table-row" key={idx}>
                <span>{order.name}</span>
                <span>{order.mode}</span>
                <span>{order.qty}</span>
                <span>₹{order.price}</span>
                <span>₹{(order.qty * order.price).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
