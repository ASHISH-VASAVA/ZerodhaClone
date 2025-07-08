import React from "react";

function DashboardNavbar() {
  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.clear();
    window.location.href = "https://zerodhaclonefrontend-t4pc.onrender.com/login";
  };

  return (
    <nav className="navbar navbar-light bg-light justify-content-between px-4 py-2 shadow-sm">
      <h5 className="mb-0">Welcome, {username} 👋</h5>
      <button className="btn btn-danger btn-sm" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default DashboardNavbar;
