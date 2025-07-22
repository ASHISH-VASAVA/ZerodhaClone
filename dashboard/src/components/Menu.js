import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  // Close dropdown when location (route) changes
  useEffect(() => {
    setIsProfileDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.href = "https://zerodhaclonefrontend-t4pc.onrender.com";
  };

  const isActive = (path) => location.pathname === path;

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

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

        <div className="profile" ref={dropdownRef}>
          <div className="avatar" onClick={toggleProfileDropdown}>ZU</div>
          <div className="profile-info" onClick={toggleProfileDropdown}>
            <p className="username">{username || "USERID"}</p>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <p className="logout-btn" onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
