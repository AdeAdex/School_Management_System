import React from "react";

const FooterReachBtn = ({classes}) => {
  return (
    <>
      <button class="bt" id="bt">
        <span class="msg" id="msg"></span>
        <i className={classes}></i>
      </button>
    </>
  );
};

export default FooterReachBtn;
