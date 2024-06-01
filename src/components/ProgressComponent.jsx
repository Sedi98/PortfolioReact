import React from "react";

function ProgressComponent({skillName,skillPercent}) {
  return (
    <div className="skill_section">
      <span className="skill_name">
        {skillName} <i style={{ float: "right" }}>{skillPercent}%</i>
      </span>
      <div className="progress_container">
        <div className="progress_bar " style={{ width:`${skillPercent}%`}}></div>
      </div>
    </div>
  );
}

export default ProgressComponent;
