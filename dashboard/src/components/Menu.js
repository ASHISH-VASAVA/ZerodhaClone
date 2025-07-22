import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Menu.css"; // Import the CSS

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

 const handleLogout = () => {
  localStorage.removeItem("username");
  window.location.href = "https://zerodhaclonedashboard.onrender.com/"; // Redirect to home page after logout
};


  const isActive = (path) => location.pathname === path;

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className={isActive("/") ? "menu selected" : "menu"}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <p className={isActive("/orders") ? "menu selected" : "menu"}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }}>
              <p className={isActive("/holdings") ? "menu selected" : "menu"}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{ textDecoration: "none" }}>
              <p className={isActive("/positions") ? "menu selected" : "menu"}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" style={{ textDecoration: "none" }}>
              <p className={isActive("/funds") ? "menu selected" : "menu"}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" style={{ textDecoration: "none" }}>
              <p className={isActive("/apps") ? "menu selected" : "menu"}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile">
          {/* When you click either of these, dropdown opens */}
          <div className="avatar" onClick={handleProfileClick}>ZU</div>
          <div className="profile-info" onClick={handleProfileClick}>
            <p className="username">{username || "USERID"}</p>

            {isProfileDropdownOpen && (
              <div className="profile-dropdown" onClick={(e) => e.stopPropagation()}>
                <p onClick={handleLogout} className="logout-btn">Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
