import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center m-5 py-5">
        <h1>OneStock Products</h1>
        <p style={{ fontSize: "20px", paddingTop: "5px" }}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our <a href="#">investment offerings →</a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
