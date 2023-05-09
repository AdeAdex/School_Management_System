import React from "react";

const MyLessons = ({text, styles, btn_txt}) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <span>{text}</span>
        <button type="submit" className="btn btn-sm text-white px-2" style={styles}>{btn_txt}</button>
      </div>
    </>
  );
};

export default MyLessons;
