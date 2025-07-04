import React from "react";
import "./Fotter.css";

function Fotter() {
  return (
    <footer>
      <div className="container mt-5 border-top">
        <div className="row mt-5">
          <div className="col fot-logo">
            <img src="media/images/logo.svg" />
            <p className="mt-3 text-muted">
              &copy; 2010 - 2025, Zerodha Clone Broking Ltd.
              <br /> All rights reserved.
            </p>
            <i class="fa-brands fa-x-twitter fa-2x"></i>
            <i class="fa-brands fa-instagram fa-2x"></i>
            <i class="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-linkedin-in fa-2x"></i>
            <i class="fa-brands fa-youtube fa-2x"></i>
            <i class="fa-brands fa-telegram fa-2x"></i>
            <i class="fa-brands fa-whatsapp fa-2x"></i>
          </div>0
          <div className="col">
            <h6>Company</h6>
            <a href="#">About</a>
            <br />
            <a href="#">Product</a>
            <br />
            <a href="#">Pricing</a>
            <br />
            <a href="#">Referral programme</a>
            <br />
            <a href="#">Careers</a>
            <br />
            <a href="#">OneStock.tech</a>
            <br />
            <a href="#">Open Source</a>
            <br />
            <a href="#">Press & media</a>
            <br />
            <a href="#">OneStock Cares (CSR)</a>
          </div>

          <div className="col">
            <h6>Support</h6>
            <a href="#">Contact us</a>
            <br />
            <a href="#">Support portal</a>
            <br />
            <a href="#">Z-Connect blog</a>
            <br />
            <a href="#">List of charges</a>
            <br />
            <a href="#">Downloads & resources</a>
            <br />
            <a href="#">Videos</a>
            <br />
            <a href="#">Market overview</a>
            <br />
            <a href="#">How to file a complaint?</a>
            <br />
            <a href="#">Status of your complaints</a>
            <br />
          </div>

          <div className="col">
            <h6>Account</h6>
            <a href="#">Open an account</a>
            <br />
            <a href="#">Fund transfer</a>
          </div>
        </div>
        <div
          className="disclamier mt-5 text-muted"
          style={{ fontSize: "14px" }}
        >
          <p>
            OneStock Broking Ltd.: Member of NSE, BSE​ ​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through OneStock Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@onestock.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: Stock brokers can accept securities as margins
            from clients only by way of pledge in the depository system w.e.f
            September 01, 2020. Update your e-mail and phone number with your
            stock broker / depository participant and receive OTP directly from
            depository on your e-mail and/or mobile number to create pledge.
            Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;
