import React, { useState, useEffect } from "react";
import "./Orders.css";
import axios from "axios";

function Orders() {
  const [allOrders, setallOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodhaclone-backend.onrender.com/order/allOrders")
      .then((res) => {
        setallOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://zerodhaclone-backend.onrender.com/order/deleteOrders/${id}`);
      setallOrders((prev) => prev.filter((order) => order._id !== id));
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  return (
    <>
      <h3 className="title">Orders({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
            <th>Action</th>
          </tr>
          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
                <td>
                  <button
                    onClick={() => handleDelete(stock._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Orders;