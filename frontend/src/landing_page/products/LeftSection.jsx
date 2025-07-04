import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  link1,
  link2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-2"></div>
        <div className="col-4 pt-5">
          <h2>{productName}</h2>
          <p className="py-3">{productDescription}</p>
          <div className="row">
            <div className="col">
              <a href="#">
                {link1} <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg" className="pt-4" />
              </a>
            </div>
            <div className="col">
              <a href="#">
                {link2} <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" className="pt-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
