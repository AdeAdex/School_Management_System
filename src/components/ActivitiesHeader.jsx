import React from "react";

const ActivitiesHeader = ({ name, content, hrStyle }) => {
  return (
    <>
      <div className="activities">
        <h2 className="">{name}</h2>
        <p>{content}</p>
        <hr style={hrStyle}/>
      </div>
    </>
  );
};

export default ActivitiesHeader;
