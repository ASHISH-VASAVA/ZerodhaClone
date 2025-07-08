import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import DashboardNavbar from "./DashboardNavbar"; // ✅ USE THIS
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href =
          "https://zerodhaclonefrontend-t4pc.onrender.com/login";
        return;
      }

      try {
        const res = await axios.get(
          `https://zerodhaclone-backend-8vq9.onrender.com/api/user/data/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setHoldings(res.data.holdings);
        setPositions(res.data.positions);
        setOrders(res.data.orders);
      } catch (err) {
        console.error("Error fetching portfolio:", err.message);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <>
      <DashboardNavbar /> {/* ✅ DASHBOARD NAVBAR WITH LOGOUT */}
      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Summary
                  holdings={holdings}
                  positions={positions}
                  orders={orders}
                />
              }
            />
            <Route path="/orders" element={<Orders orders={orders} />} />
            <Route path="/holdings" element={<Holdings holdings={holdings} />} />
            <Route
              path="/positions"
              element={<Positions positions={positions} />}
            />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
