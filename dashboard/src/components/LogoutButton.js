import React from "react";

function LogoutButton() {
  const handleLogout = () => {
    localStorage.clear(); // 🧹 Clear all data
    window.location.href = "https://zerodhaclonefrontend-t4pc.onrender.com/login"; // 🔁 Redirect to login
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
