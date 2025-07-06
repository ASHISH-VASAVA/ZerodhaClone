import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css"; // Assuming you have a CSS file for styling  
import { useNavigate } from "react-router-dom";    

function Signup() {
  
   const navigate = useNavigate(); // 👈 setup navigator
  
    const goToSignup = () => {
      navigate("/signup");
    };


  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://zerodhaclonebackend-6wkg.onrender.com/api/auth/signup",
        formdata,
        { withCredentials: true }
      );
      toast.success("Signup successful! Redirecting to login...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left image section */}
        <div className="col-md-6 mb-4 mb-md-0 mr-5 p-5  mt-5 text-center">
          <img
            src="media/images/signup.png"
            style={{ width: "95%" }}
            alt="Signup Visual"
          />
        </div>

        {/* Right signup form with border */}
        <div className="col-md-6 ml-5 px-5 p-5 ">
          <div
            className="signup-box"
            style={{
              border: "1px solid #ddd",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
              backgroundColor: "#fff",
            }}
          >
            <h1 className="signup-heading" style={{ fontWeight: "600" }}>
              Signup now
            </h1>
            <p className="signup-subtext text-muted mb-4">
              Create your Zerodha account to get started
            </p>

            <form onSubmit={handleSignup}>
              <input
                className="form-control signup-input mb-3"
                name="name"
                placeholder="Username"
                onChange={handleChange}
                required
              />
              <input
                className="form-control signup-input mb-3"
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
              <input
                className="form-control signup-input mb-4"
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
                Signup
              </button>
            </form>

            <p className="mt-2">
              Already have an account?{" "}
              <a
                href="/login"
                onClick={goToSignup}
                style={{
                  textDecoration: "none",
                  color: "#0d6efd",
                  fontWeight: "bold",
                }}
              >
                Login
              </a>
            </p>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
