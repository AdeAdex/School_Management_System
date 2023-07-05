import React, { useRef } from "react";

const CalculateTotalNumber = ({id, innerText, styles, text, classes}) => {
  return (
    <>
      <div className={classes}>
        <div className="margin-y-auto" id={id} style={styles}>{text}</div>
        <div className="text-center text-uppercase fw-bold  py-1">
          {innerText}
        </div>
      </div>
    </>
  );
};

export default CalculateTotalNumber;
