import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row">
        <h2 className="text-center pb-5">People</h2>
        <div className="col-6 px-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{
              borderRadius: "100%",
              width: "58%",
              marginLeft: "1.3rem",
            }}
          />
          <h4 className="pt-3">Nithin Kamath</h4>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6 pt-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
