import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 import this

function OpenAccount() {
  const navigate = useNavigate(); // 👈 setup navigator

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={goToSignup} // 👈 call the function here
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
