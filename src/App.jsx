import React, { useState, useEffect } from "react";
import "./styles/style.css";
import Aside from "./components/Aside";
import HeroContainer from "./components/HeroContainer";
import SectionAbout from "./components/SectionAbout";
import SectionSkills from "./components/SectionSkills";
import SectionResume from "./components/SectionResume";
import SectionPortfolio from "./components/SectionPortfolio";
import SectionContact from "./components/SectionContact";

const App = () => {
  const [menuShow, setmenuShow] = useState("-500px");
  const [display, setdisplay] = useState("flex");
  const [displayabs, setdisplayabs] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [maxWidth, setMaxWidth] = useState("100%");
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down

  useEffect(() => {
    handleResize();

    if (width < 1024) {
      setmenuShow("-500px");
      setdisplay("block");
      setMaxWidth("100%");
      setdisplayabs("absolute");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const HandleClickMenu = () => {
    menuShow == "-500px" ? setmenuShow("0px") : setmenuShow("-500px");
  };

  const handleResize = () => {
    setWidth(window.innerWidth);

    menuShow == "-500px" ? setmenuShow("0px") : setmenuShow("-500px");
    console.log(width);
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="body" style={{ display: display }}>
      <header
        style={{ marginLeft: menuShow, position: displayabs, zIndex: 100 }}
      >
        <Aside />
      </header>

      <main className="main" style={maxWidth ? { width: "100%" } : {}}>
        <div className="menu_btn" onClick={() => HandleClickMenu()}>
          <i class="bx bx-menu"></i>
        </div>

        <div className="scrollTopButton" onClick={() => scrollToTop()}>
          <a class="bx bx-chevron-up" href="#home"></a>
        </div>

        <HeroContainer />

        <SectionAbout />

        <SectionSkills />

        <SectionResume />

        <SectionPortfolio />

        <SectionContact />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
