import React from "react";
import SectionTitleComponent from "./SectionTitleComponent";
import ProgressComponent from "./ProgressComponent";

import { useRef } from "react";
import { useInView } from "framer-motion";

function SectionSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section id="skills" className="section_skills section_padding" ref={ref}>
      <div className="container">
        <SectionTitleComponent
          header={"Skills"}
          text={
            " Skilled in HTML, CSS, and JavaScript with a strong command of React for building dynamic user interfaces. Experienced in responsive design, version control with Git, and optimizing web performance. Adept at problem-solving, collaboration, and continuously learning new technologies to enhance user experience.."
          }
        />

        <div className="flex_container">
          <div
            className="skills_left"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <ProgressComponent skillName={"HTML"} skillPercent={100} />
            <ProgressComponent skillName={"CSS"} skillPercent={100} />
            <ProgressComponent skillName={"JAVASCRIPT"} skillPercent={100} />
          </div>
          <div
            className="skills_right"
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <ProgressComponent skillName={"REACT JS"} skillPercent={80} />
            <ProgressComponent skillName={"REACT NATIVE"} skillPercent={70} />
            <ProgressComponent skillName={"NODE JS"} skillPercent={60} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
