import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container text-center mt-5">
      <h1>404 Page Not Found</h1>
      <p>We couldn’t find the page you were looking for. </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        Zerodha's home page <i class="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
}

export default PageNotFound;
