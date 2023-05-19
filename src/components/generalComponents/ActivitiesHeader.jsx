import React from "react";

const ActivitiesHeader = ({ name, content, hrStyle, classes}) => {
  return (
    <>
      <div className={classes}>
        <h2 className="fs-2">{name}</h2>
        <p className="fs-5">{content}</p>
        <div className="mt-3" style={hrStyle}></div>
      </div>
    </>
  );
};

export default ActivitiesHeader;
