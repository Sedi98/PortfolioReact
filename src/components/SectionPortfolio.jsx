import React from "react";
import SectionTitleComponent from "./SectionTitleComponent";
import ComponentPortfolioPromotion from "./ComponentPortfolioPromotion";

function SectionPortfolio() {
  return (
    <section id="portfolio" className="section_portfolio section_padding">
      <div className="container">
        <SectionTitleComponent
          header={"Portfolio"}
          text={
            "Celebrating my journey through various projects, each one a testament to my passion for innovation and problem-solving. From responsive websites to dynamic web applications, explore a diverse range of endeavors that showcase my skills in front-end development. Each project is a unique opportunity to push boundaries, learn, and create impactful solutions. Dive in, explore, and let's embark on a journey of discovery together!"
          }
        />

        <div className="flex_container flex_wrap">
          <ComponentPortfolioPromotion
            url={"../src/assets/img/tibis.webp"}
            linkRedirect={"https://tibis.az/"}
            linkShare={"https://tibis.az/"}
          />
          <ComponentPortfolioPromotion
            url={"../src/assets/img/bootstrap.webp"}
            linkRedirect={"https://sedi98.github.io/BootstrapConcept/"}
            linkShare={"https://sedi98.github.io/BootstrapConcept/"}
          />
          <ComponentPortfolioPromotion
            url={"../src/assets/img/clbarbers.webp"}
            linkRedirect={"https://sedi98.github.io/clbarbers/"}
            linkShare={"https://sedi98.github.io/clbarbers/"}
          />
          <ComponentPortfolioPromotion
            url={"../src/assets/img/open_enterprise.webp"}
            linkRedirect={"https://sedi98.github.io/OpenEnterprise/"}
            linkShare={"https://sedi98.github.io/OpenEnterprise/"}
          />
          <ComponentPortfolioPromotion
            url={"../src/assets/img/portfolio_old.webp"}
            linkRedirect={"https://sedi98.github.io/PortfolioProject/"}
            linkShare={"https://sedi98.github.io/PortfolioProject/"}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionPortfolio;
