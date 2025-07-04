import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function OpenAccount() {
  return (
    <div className="container">
      <div className="row text-center">
        <h2 className="mt-5">Open a Zerodha account</h2>
        <p className="mt-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button
            variant="contained"
            className="mt-3"
            onClick={() =>
              (window.location.href = "https://zerodha-frontend.onrender.com/signup")
            }
          >
            Sign up for free
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default OpenAccount;
