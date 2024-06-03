import React from "react";

function ComponentPortfolioPromotion({ url, linkRedirect, linkShare }) {
  return (
    <div className="portfolio_flex_item">
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <div className="buttons container_flex">
          <a href={linkShare} className="portfolio_buttons" target="_blank">
            <i className="bx bx-plus"></i>
          </a>
          <a href={linkRedirect} className="portfolio_buttons" target="_blank">
            <i className="bx bxs-share"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComponentPortfolioPromotion;
