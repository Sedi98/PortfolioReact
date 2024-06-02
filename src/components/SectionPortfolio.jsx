import React from "react";
import SectionTitleComponent from "./SectionTitleComponent";
import ComponentPortfolioPromotion from "./ComponentPortfolioPromotion";

// images
import tibis from '../assets/img/tibis.webp'
import bootstrap from '../assets/img/bootstrap.webp'
import open_enterprise from '../assets/img/open_enterprise.webp'
import clbarbers from '../assets/img/clbarbers.webp'
import portfolio_old from '../assets/img/portfolio_old.webp'

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
            url={tibis}
            linkRedirect={"https://tibis.az/"}
            linkShare={"https://tibis.az/"}
          />
          <ComponentPortfolioPromotion
            url={bootstrap}
            linkRedirect={"https://sedi98.github.io/BootstrapConcept/"}
            linkShare={"https://sedi98.github.io/BootstrapConcept/"}
          />
          <ComponentPortfolioPromotion
            url={clbarbers}
            linkRedirect={"https://sedi98.github.io/clbarbers/"}
            linkShare={"https://sedi98.github.io/clbarbers/"}
          />
          <ComponentPortfolioPromotion
            url={open_enterprise}
            linkRedirect={"https://sedi98.github.io/OpenEnterprise/"}
            linkShare={"https://sedi98.github.io/OpenEnterprise/"}
          />
          <ComponentPortfolioPromotion
            url={portfolio_old}
            linkRedirect={"https://sedi98.github.io/PortfolioProject/"}
            linkShare={"https://sedi98.github.io/PortfolioProject/"}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionPortfolio;
