import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <p className="fs-5 my-5">
          Want to know more about our technology stack? Check out the
          <a href="#"> OneStock.tech </a>blog.
        </p>
        <h2 className="pt-5">The OneStock Universe</h2>
        <p className="pt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div
        className="row text-muted mt-5 text-center"
        style={{ fontSize: "12px" }}
      >
        <div className="col">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="pt-3">
            Our asset management venture <br />
            that is creating simple and transparent index
            <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "50%", paddingTop: "10px" }}
          />
          <p className="pt-4">
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br /> data points like open
            interest, FII/DII, and more.
          </p>
        </div>
        <div className="col">
          <img src="media/images/tijori.svg" style={{ width: "40%" }} />
          <p className="pt-2">
            Investment research platform <br /> that offers detailed insights on
            stocks,,
            <br /> sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div
        className="row text-muted mt-5 text-center"
        style={{ fontSize: "12px" }}
      >
        <div className="col">
          <img src="media/images/streakLogo.png" style={{ width: "40%" }} />
          <p className="pt-3">
            Systematic trading platform
            <br /> that allows you to create and backtest <br /> strategies
            without coding.
          </p>
        </div>
        <div className="col">
          <img src="media/images/smallcaseLogo.png" style={{ width: "50%" }} />
          <p className="pt-3">
            Thematic investing platform <br /> that helps you invest in
            diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} />
          <p className="pt-3">
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button 
              variant="contained" 
              className="m-5"  
              onClick={() =>
              (window.location.href = "https://zerodha-frontend.onrender.com/signup")
            }>
            Sign up for free
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Universe;
