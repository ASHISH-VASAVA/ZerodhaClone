import React from "react";
import { Route, Routes } from "react-router-dom";
import Summary from "./Summary.jsx";
import Orders from "./Orders.jsx";
import Holdings from "./Holdings.jsx";
import Positions from "./Positions.jsx";
import Funds from "./Funds.jsx";
import Apps from "./Apps.jsx";

import "./Dashboard.css";
import WatchList from "./WatchList.jsx";
import { GeneralContextProvider } from "./GeneralContext.jsx";

function DashBoard() {
  return (
    <>
      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default DashBoard;