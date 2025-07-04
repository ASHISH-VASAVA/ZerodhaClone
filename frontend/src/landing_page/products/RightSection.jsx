import React from "react";

function RightSection({ imageURL, productName, productDescription, link }) {
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-4 pt-5 mt-5">
          <h2>{productName}</h2>
          <p className="py-3">{productDescription}</p>
          <a href="#">
            {link}
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-7">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
