import React, { useRef } from "react";

const CalculateTotalNumber = ({innerText, styles, text, classes, inputRef}) => {
  return (
    <>
      <div className={classes}>
        <div className="margin-y-auto" ref={inputRef} style={styles}>{text}</div>
        <div className="text-center text-uppercase fw-bold  py-1">
          {innerText}
        </div>
      </div>
    </>
  );
};

export default CalculateTotalNumber;
