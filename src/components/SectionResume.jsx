import React from "react";
import SectionTitleComponent from "./SectionTitleComponent";
import ResumeTimelineComponent from "./ResumeTimelineComponent";

import { useRef } from "react";
import { useInView } from "framer-motion";

function SectionResume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section id="resume" className="section_resume section_padding" ref={ref}>
      <div className="container">
        <SectionTitleComponent
          header={"Resume"}
          text={
            " Innovative Front-End Developer | Expert in HTML, CSS, JavaScript, and React | Skilled in Responsive Design and UX/UI Optimization | Proven Track Record of Delivering High-Quality Web Applications | Strong Problem-Solving Abilities and Collaborative Team Player | Passionate About Continuous Learning and Staying Current with Emerging Technologies"
          }
        />

        <div className="flex_container">
          <div
            className="resume_left"
            style={{
              transform: isInView ? "none" : "translateY(400px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <p className="resume_title"> Summary</p>

            <ResumeTimelineComponent
              resumeHeader={"Sadi Mammadov"}
              resumeText={
                "Driven by perseverance and passion, my journey to becoming a Front-End Developer is a testament to relentless effort and unwavering determination. With each challenge conquered and every hurdle overcome, I've honed my skills in HTML, CSS, JavaScript, and React. I'm committed to continuous growth and delivering exceptional work."
              }
            />
            <p className="resume_title"> Education</p>

            <ResumeTimelineComponent
              resumeHeader={"School 54"}
              resumeYears={"2004-2015"}
              resumeText={
                "Navigating through the corridors of academia, my school life was a vibrant tapestry of learning, friendships, and discovery. From early morning classes to after-school activities, every moment was a stepping stone towards personal and intellectual growth. Cherished memories, lifelong friendships, and invaluable lessons define my journey through school."
              }
            />

            <ResumeTimelineComponent
              resumeHeader={"Azerbaijan Technical University"}
              resumeYears={"2015-2019"}
              resumeText={
                "Embarking on the journey of higher education in Electronics Communication and Radiotechnics, university life was an exhilarating blend of academic rigor, hands-on learning, and unforgettable experiences. From challenging coursework to cutting-edge research projects, every day offered new opportunities for growth and exploration, shaping my passion and expertise in the field."
              }
            />
          </div>
          <div
            className="resume_right"
            style={{
              transform: isInView ? "none" : "translateY(400px)",
              opacity: isInView ? 1 : 0,
              transition: "all 2.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <p className="resume_title"> Work experience</p>
            <ResumeTimelineComponent
              resumeHeader={"Front end developer"}
              resumeText={
                "As a Front-End Developer for a Hospital Information System, I navigated the intersection of technology and healthcare, crafting intuitive interfaces to streamline patient care and administrative tasks. Collaborating closely with medical professionals, I designed and implemented solutions that prioritized user experience, efficiency, and data security in a critical healthcare environment."
              }
              resumeYears={"2021-2022"}
            />
            <ResumeTimelineComponent
              resumeHeader={"Wholesale Specialist"}
              resumeText={
                "Wholesaling electronic accessories for mobile devices, I gained experience in customer relations for wholesale transactions and handling departmental work. This included interacting with clients to fulfill their wholesale needs and managing departmental tasks efficiently. "
              }
              resumeYears={"2022-2023"}
            />

            <ResumeTimelineComponent
              resumeHeader={"Seller"}
              resumeText={
                "Worked at mobile accessories store and lerned marketing of mobile accessories... "
              }
              resumeYears={"2023-2024"}
            />

            <ResumeTimelineComponent
              resumeHeader={"FreeLancer"}
              resumeText={
                "Im freelancer anymore. only works at remote jobs... "
              }
              resumeYears={"2024-now"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionResume;
