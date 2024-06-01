import React from "react";

function SectionTitleComponent({ header, text }) {
  return (
    <div className="section_title">
      <p className="section_header">{header}</p>
      <p>{text}</p>
    </div>
  );
}

export default SectionTitleComponent;
