import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/largestBroker.svg"
            alt="Award Image"
            className="mt-5"
          />
        </div>
        <div className="col-6 mt-5">
          <h2>Largest stock broker in India</h2>
          <p>
            2+ million Zerodha clients to contribute over 15% of all retail
            order volumes in India daily by trading and investing in :
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks in IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="Press Logo"
              className="mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
