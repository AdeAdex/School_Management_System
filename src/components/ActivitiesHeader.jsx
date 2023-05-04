import React from "react";

const ActivitiesHeader = ({ name, content, hrStyle, classes}) => {
  return (
    <>
      <div className={classes}>
        <h2 className="">{name}</h2>
        <p>{content}</p>
        <div style={hrStyle}></div>
      </div>
    </>
  );
};

export default ActivitiesHeader;
