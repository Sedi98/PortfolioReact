import React from "react";


import { useRef } from "react";
import { useInView } from "framer-motion";

function ResumeTimelineComponent({resumeHeader,resumeText,resumeYears}) {
  return (
    <div className="resume_item">
      <p className="resume_header">{resumeHeader}</p>

      {resumeYears&&(<p className="resume_years">{resumeYears}</p>)}
      

      <p>
        <em>
          {resumeText}
        </em>
      </p>
    </div>
  );
}

export default ResumeTimelineComponent;
