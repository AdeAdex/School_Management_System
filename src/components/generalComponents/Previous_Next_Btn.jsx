import React from "react";
import "./Previous_Next_Btn.css";

const Previous_Next_Btn = () => {
  return (
    <>
      <div className="d-flex justify-content-center gap-3 mt-5">
        <button className="pre-nxt-btn d-flex gap-3"><i className="fas fa-angle-left my-auto"></i> prev</button>
        <button className="pre-nxt-btn d-flex gap-3">next <i className="fas fa-angle-right my-auto"></i></button>
      </div>
    </>
  );
};

export default Previous_Next_Btn;
