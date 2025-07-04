import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 pt-4">
        <h1>Charges</h1>
        <p className="text-muted pt-2">List of all charges and taxes</p>
      </div>
      <div className="row mt-5 pt-5 text-center">
        <div className="col">
          <img src="media/images/pricing0.svg" style={{ width: "65%" }} />
          <h3 className="py-3">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="media/images/intradayTrades.svg" style={{ width: "65%" }} />
          <h3 className="py-3">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br />
            executed order on intraday trades across
            <br /> equity, currency, and commodity trades. Flat
            <br /> ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="media/images/pricing0.svg" style={{ width: "65%" }} />
          <h3 className="py-3">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are
            <br /> absolutely free — ₹ 0 commissions & DP <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
