import React from "react";
import { TypeAnimation } from "react-type-animation";

import { useRef } from "react";
import { useInView } from "framer-motion";

function HeroContainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="hero" ref={ref}>
      <div
        className="hero_container"
        id="home"
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <p className="hero_title">Sadi Mammadov</p>
        <p className="hero_text">
          I'm a{" "}
          <span>
            <TypeAnimation
              sequence={[
                "Programmer", // Types 'One'
                3000, // Waits 1s
                "Front end Developer", // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                "Project Developer",
                3000,
                "Gamer", // Types 'Three' without deleting 'Two'
                3000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                
                display: "inline-block",
                color: "#fff",
              }}
              className="typeAnimationSpan"
            />{" "}
          </span>
        </p>
      </div>
    </div>
  );
}

export default HeroContainer;
