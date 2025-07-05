import Hero from "./Hero";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, Paper } from "@mui/material";
import "./SignupForm.css";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted", inputValue); // Debug log

    // Simple client-side validation
    if (!email || !password || !username) {
      handleError("All fields are required.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://zerodha-clone-backend-cbao.onrender.com/auth/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
              handleSuccess("Registration successful! Please login.");
                 setTimeout(() => {
                 window.location.href = "/login";
              }, 1500);

      } else {
        handleError(message || "Signup failed.");
      }
    } catch (error) {
      // Show backend or network errors to the user
      handleError(
        error.response?.data?.message ||
          error.message ||
          "Signup request failed."
      );
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <Hero />
      <div className="container">
        <div className="row m-5">
          <div className="col-8">
            <img
              src="/media/images/signup.png"
              alt="Signup"
              style={{ width: "600px" }}
            />
          </div>
          <div className="col-4">
            <Paper className="form-card">
              <h2 className="form-title">Signup</h2>
              <form onSubmit={handleSubmit}>
                <TextField
                  type="email"
                  label="Email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  type="text"
                  label="Username"
                  name="username"
                  value={username}
                  onChange={handleOnChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  type="password"
                  label="Password"
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
                  Signup
                </Button>
                <span style={{ marginTop: "1rem", display: "block" }}>
                  Already have an account? <Link to={"/login"}>Login</Link>
                </span>
              </form>
            </Paper>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;