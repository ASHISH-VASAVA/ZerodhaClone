import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1>Invest in everything</h1>
        <p className="p-2">
          Online platform to invest in stocks, derivatives, mutual funds and
          more
        </p>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button
            variant="contained"
            className="mb-5"
            onClick={() =>
              (window.location.href = "https://zerodhaclone-mibe.onrender.com/signup")
            }                         
          >
            Signup Now
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Hero;
