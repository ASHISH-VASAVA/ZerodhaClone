import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css"; // Optional: for styling if needed

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = "ashish123"; // 🔁 Replace with dynamic user if available

  useEffect(() => {
    axios
      .get(`http://localhost:3002/orders?userId=${userId}`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-list">
          <h2>Your Orders</h2>
          <ul>
            {orders.map((order, index) => (
              <li key={index} className="order-item">
                <strong>{order.stockName}</strong> - {order.quantity} shares @ ₹{order.price} ({order.type.toUpperCase()})<br />
                <small>{new Date(order.timestamp).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Orders;
