import React from "react";
import "../styles/style.css";

const SocialLinks = () => {
  return (
    <ul className="social_links_container">
      <li>
        <a
          className="social_link fa fa-facebook"
          href="https://www.facebook.com/profile.php?id=100006065943855"
          target="_blank"
        ></a>
      </li>
      <li>
        <a
          className="social_link fa bx bxl-whatsapp"
          href="https://api.whatsapp.com/send?phone=994517970292&text=Salam"
          target="_blank"
        ></a>
      </li>

      <li>
        <a
          className="social_link fa fa-linkedin"
          href="https://www.linkedin.com/in/sedi-memmedov-62a5a6229/"
          target="_blank"
        ></a>
      </li>
      <li>
        <a
          className="social_link fa bx bxl-github"
          href="https://github.com/Sedi98"
          target="_blank"
        ></a>
      </li>
    </ul>
  );
};

export default SocialLinks;
