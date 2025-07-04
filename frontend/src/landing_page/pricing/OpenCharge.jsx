import React from "react";

function OpenCharge() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 ">
        <h4 className="pb-3">Charges for account opening</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Types of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Open account</td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OpenCharge;
