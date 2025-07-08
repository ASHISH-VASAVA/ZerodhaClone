import React from "react";

function DashboardHeader() {
  const username = localStorage.getItem("username");

  return (
    <div className="dashboard-header">
      <h4>Welcome, {username} 👋</h4>
    </div>
  );
}

export default DashboardHeader;
