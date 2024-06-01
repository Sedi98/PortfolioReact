import React from "react";
import SectionTitleComponent from "./SectionTitleComponent";

import { useRef } from "react";
import { useInView } from "framer-motion";

function SectionAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section id="about" className="section_about section_padding" ref={ref}>
      <div className="container">
        <SectionTitleComponent
          header={"About"}
          text={
            " Creative and detail-oriented Front-End Developer with 3+ years of experience building responsive, user-friendly websites and web applications. Proficient in HTML, CSS, JavaScript, and React. Passionate about creating clean, efficient code and enhancing user experience through innovative solutions.. "
          }
        />

        <div className="flex_container">
          <div
            className="flex_left"
            style={{
              transform: isInView ? "none" : "translateX(-400px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img src="https://picsum.photos/id/237/1000" alt="" />
          </div>
          <div
            className="flex_right"
            style={{
              transform: isInView ? "none" : "translateX(400px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <div className="">
              <h3 className="content_header">
                Front end &amp; Mobile App developer.
              </h3>
              <p className="about_p">
                I also can build Android &amp; Ios mobile applications too. Here
                is some little info about me:
              </p>
              <div className="about_content">
                <div className="content">
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right icon"></i>{" "}
                      <strong>Birthday:</strong> <span>4 Jul 1998</span>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right icon"></i>{" "}
                      <strong>Website:</strong> <span>will be shared</span>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right icon"></i>{" "}
                      <strong>Phone:</strong> <span>+994 51 797 02 92</span>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right icon"></i>{" "}
                      <strong>City:</strong> <span>Baku,Azerbaijan</span>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right icon"></i>{" "}
                      <strong>Age:</strong> <span>26</span>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right icon"></i>{" "}
                      <strong>Degree:</strong> <span>Bachelors</span>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right icon"></i>{" "}
                      <strong>Email:</strong> <span>sedi9816@gmail.com</span>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right icon"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Front-end development involves creating the visual and
                interactive aspects of a website or application. It includes
                designing user interfaces with HTML, CSS, and JavaScript,
                ensuring responsiveness and accessibility, and enhancing user
                experience through seamless navigation and dynamic content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
