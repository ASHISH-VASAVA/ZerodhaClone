import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row mt-5 p-5">
        <div className="col-6 p-5">
          <h3 className="mb-5 fs-2">Trust with Confidence</h3>
          <h4 className="fs-4">Customer-first always</h4>
          <p className="mb-4">
            That's why we have 1.3+ crore customers trust Zerodha with ₹3.5+
            lakh crore worth of equity investments.
          </p>
          <h4 className="fs-4">No spam or gimmicks</h4>
          <p className="mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>
          <h4 className="fs-4">The Zerodha universe</h4>
          <p className="mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="fs-4">Do better with money</h4>
          <p className="mb-4">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem Image"
            style={{ width: "125%" }}
          />
          <div className="text-center">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
