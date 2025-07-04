import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="row py-5 mb-5">
        <div className="col-7 pb-5">
          <h5>Support Portal</h5>
          <p className="fs-5 mt-5">
            Search for an answer or browse help topics to create a ticket
          </p>
          <input
            id="search-box"
            type="text"
            placeholder="Eg: how do I activate FAQ, why is my order getting rejected ..."
          ></input>
          <br /> <br />
          <div id="quick-links">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a> <br /> <br />
            <a href="#">Kite user manual</a>
          </div>
        </div>
        <div className="col">
          <a href="#" id="tickets">
            Track Tickets
          </a>
          <br />
          <h5 className="mt-5">Featured</h5>
          <div className="features pt-2">
            <a href="#">
              1. Change in expiry day of NSE derivative contracts
              <br /> from April 04, 2025
            </a>
            <br />
            <br />
            <a href="#">2. Offer for sale (OFS)- March 2025</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
