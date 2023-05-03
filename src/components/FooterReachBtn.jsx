import React from "react";

const FooterReachBtn = ({btn_classes, classes, icon}) => {
  return (
    <>
      <button className={btn_classes} id="bt">
        <span className={icon} id=""></span>
        <i className={classes}></i>
      </button>
    </>
  );
};

export default FooterReachBtn;
