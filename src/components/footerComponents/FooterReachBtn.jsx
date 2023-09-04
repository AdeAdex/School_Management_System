import React from "react";

const FooterReachBtn = ({btn_classes, classes, icon, btn_style, onClick}) => {
  return (
    <>
      <button onClick={onClick} className={btn_classes} id="bt" style={btn_style}>
        <span className={icon} id=""></span>
        <i className={classes}></i>
      </button>
    </>
  );
};

export default FooterReachBtn;
