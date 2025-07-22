import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = ({ user }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?._id) {
      axios
        .get("https://zerodha-clone-backend-cbao.onrender.com/orders", {
          params: { userId: user._id },
          withCredentials: true,
        })
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch orders", err);
        });
    }
  }, [user]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="text-2xl font-bold mb-4">Your Orders (Last 24 Hours)</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">No recent orders placed.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Stock</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Mode</th>
                <th className="border px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{order.name}</td>
                  <td className="border px-4 py-2">{order.qty}</td>
                  <td className="border px-4 py-2">₹{order.price}</td>
                  <td className="border px-4 py-2 capitalize">
                    {order.mode}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(order.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
