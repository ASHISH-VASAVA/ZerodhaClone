import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      "https://zerodhaclone-backend-8vq9.onrender.com/api/auth/login",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { token, userId, name } = res.data;

    // ✅ Save to localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("username", name);

    toast.success("Login successful!");

    // ✅ Redirect after delay
    setTimeout(() => {
      window.location.href = "https://zerodhaclonedashboard.onrender.com";
    }, 2000);
  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="container">
      <div className="row">
        {/* Left image */}
        <div className="col-md-6 mb-4 p-5 text-center">
          <img
            className="img-fluid mt-5"
            src="media/images/signup.png"
            style={{ width: "90%" }}
            alt="Login Visual"
          />
        </div>

        {/* Right form */}
        <div className="col-md-6 px-5 p-5">
          <div
            className="login-box"
            style={{
              maxWidth: "450px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "30px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
              backgroundColor: "#fff",
            }}
          >
            <h1 className="mb-3">Login</h1>
            <p className="text-muted mb-4">Access your Zerodha account</p>

            <form onSubmit={handleLogin}>
              <input
                className="form-control mb-3"
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
              <input
                className="form-control mb-4"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="btn btn-primary fs-5 mb-3"
                style={{ width: "50%", padding: "10px" }}
              >
                Login
              </button>
            </form>

            <p className="mt-2">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "#0d6efd",
                  fontWeight: "bold",
                }}
              >
                Signup
              </Link>
            </p>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
