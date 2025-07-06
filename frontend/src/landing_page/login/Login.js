import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"; // optional for custom CSS

function Login() {
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
        "https://zerodhaclonebackend-6wkg.onrender.com/api/auth/login",
        formdata,
        { withCredentials: true }
      );
      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "https://zerodhaclonedashboard.onrender.com"; // 👈 change this to your actual dashboard URL
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
              maxWidth: "450px", // 👈 controls width
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
              <a
                href="/signup"
                style={{
                  textDecoration: "none",
                  color: "#0d6efd",
                  fontWeight: "bold",
                }}
              >
                Signup
              </a>
            </p>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
