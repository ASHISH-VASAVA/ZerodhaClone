import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row mt-3 pb-5">
        <div className="col-4">
          <h3>Unbeatable pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 text-center">
          <div className="row">
            <div className="col border p-3">
              <h2 className="mb-3">₹0</h2>
              <p>
                Free equity delivery and <br></br> direct mutual funds
              </p>
            </div>
            <div className="col border p-3">
              <h2 className="mb-3">₹20</h2>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
