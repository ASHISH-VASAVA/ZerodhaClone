import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-5">
        <p className="fs-5 text-muted pb-4">
          To create a ticket, select a relevant topic
        </p>
        <div className="col">
          <p style={{ fontSize: "18px" }}>
            <a href="#" style={{ color: "black" }}>
              <i class="fa-solid fa-circle-plus"></i> Account Opening
            </a>
          </p>
          <section>
            <a href="#">Resident individual</a>
            <br />
            <a href="#">minor</a>
            <br />
            <a href="#">Non Resident Indian (NRI)</a>
            <br />
            <a href="#">Company, Partnership, HUF and LLP</a>
            <br />
            <a href="#">Glossary</a>
            <br />
          </section>
        </div>
        <div className="col">
          <p style={{ fontSize: "18px" }}>
            <a href="#" style={{ color: "black" }}>
              <i class="fa-regular fa-user"></i> Your Zerodha Account
            </a>
          </p>
          <section>
            <a href="#">Your Profile</a>
            <br />
            <a href="#">Account modification</a>
            <br />
            <a href="#">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
            <br />
            <a href="#">Nomination</a>
            <br />
            <a href="#">Transfer and conversion of securities</a>
            <br />
          </section>
        </div>
        <div className="col">
          <p style={{ fontSize: "18px" }}>
            <a href="#" style={{ color: "black" }}>
              <i class="fa-solid fa-chart-simple"></i> Kite
            </a>
          </p>
          <section>
            <a href="#">IPO</a>
            <br />
            <a href="#">Trading FAQ</a>
            <br />
            <a href="#">Margin Trading Facility (MTF) and Margins</a>
            <br />
            <a href="#">Charts and orders</a>
            <br />
            <a href="#">Alerts and Nuduge</a>
            <br />
            <a href="#">General</a>
            <br />
          </section>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <p style={{ fontSize: "18px" }}>
            <a href="#" style={{ color: "black" }}>
              <i class="fa-regular fa-credit-card"></i> Funds
            </a>
          </p>
          <section>
            <a href="#">Add money</a>
            <br />
            <a href="#">Withdraw money</a>
            <br />
            <a href="#">Add bank account</a>
            <br />
            <a href="#">eMandates</a>
            <br />
          </section>
        </div>
        <div className="col">
          <p style={{ fontSize: "18px" }}>
            <a href="#" style={{ color: "black" }}>
              <i class="fa-regular fa-circle-check"></i> Console
            </a>
          </p>
          <section>
            <a href="#">Portfolio</a>
            <br />
            <a href="#">Coperate actions</a>
            <br />
            <a href="#">Funds statements</a>
            <br />
            <a href="#">Reports</a>
            <br />
            <a href="#">Profile</a>
            <br />
            <a href="#">Segment</a>
            <br />
          </section>
        </div>
        <div className="col">
          <p style={{ fontSize: "18px" }}>
            <a href="#" style={{ color: "black" }}>
              <i class="fa-solid fa-coins"></i> Coin
            </a>
          </p>
          <section>
            <a href="#">Understanding mutual funds and Coin</a>
            <br />
            <a href="#">Coin app</a>
            <br />
            <a href="#">Coin web</a>
            <br />
            <a href="#">Transactions and repots</a>
            <br />
            <a href="#">National Pension Scheme (NPS)</a>
            <br />
          </section>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
