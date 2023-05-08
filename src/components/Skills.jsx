import React from "react";

const Skills = ({skill_style, skill_classes, skills, skill_percent}) => {
  return (
    <>
      <div className="skill w-100">
        <div className="skill-level w-100">
          <div
            className={skill_classes}
            style={skill_style}
          >
            <div className="skill-name my-auto">{skills}</div>
            <div className="skill-percent-numbe my-auto">{skill_percent}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
