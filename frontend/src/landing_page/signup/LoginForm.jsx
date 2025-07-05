import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, Box, Paper } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css";

const Login = () => {
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const { email, password } = formdata;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted", formdata); // debug log
    try {
      const data = await axios.post(
        "https://zerodha-clone-backend-cbao.onrender.com/auth/login",
        { ...formdata },
        { withCredentials: true }
      );
      const { success, message } = data.data; 
     if (success) {
         handleSuccess("Login successful! Redirecting to dashboard...");
           setTimeout(() => {
               window.location.href = "/dashboard";
             }, 1500);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.response?.data?.message || err.message || "Login failed");
    }
    setFormdata({ email: "", password: "" });
  };

  return (
    <Box className="form-container">
      <Paper className="form-card">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            label="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            label="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Login
          </Button>
          <span style={{ marginTop: "1rem", display: "block" }}>
            Don't have an account? <Link to={"/signup"}>SignUp</Link>
          </span>
        </form>
      </Paper>
      <ToastContainer />
    </Box>
  );
};

export default Login;