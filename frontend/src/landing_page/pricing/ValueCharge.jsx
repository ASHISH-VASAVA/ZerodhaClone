import React from "react";

function ValueCharge() {
  return (
    <div className="container">
      <div className="row mt-2 px-5">
        <h4 className="pb-3">Charges for optional value added services</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td> Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite connect</td>
              <td>Monthly</td>
              <td>₹ Connect: 2000 | Historical: 2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ValueCharge;
