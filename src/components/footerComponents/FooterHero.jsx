import React from "react";
import FooterReachBtn from "./FooterReachBtn";

const FooterHero = () => {
  return (
    <>
      <div
        className="footer-hero d-flex justify-content-between py-3"
        style={{
          backgroundColor: "#404547",
          height: "100px",
          width: "100%",
          color: "white",
        }}
      >
        <div className="w-50 d-flex justify-content-center">
          <span className="d-flex my-auto">
            © Copyright 2023 by Adex - Made With ❤ In Nigeria
          </span>{" "}
        </div>
        <div className="w-50 d-flex gap-4 justify-content-center">
          <FooterReachBtn
            btn_classes="bt my-auto"
            classes="fab fa-facebook-f"
            btn_style={{ backgroundColor: "#5977B8" }}
          ></FooterReachBtn>
          <FooterReachBtn
            btn_classes="bt my-auto"
            classes="fab fa-twitter text-white"
            btn_style={{ backgroundColor: "#74CEE4" }}
          ></FooterReachBtn>
          <FooterReachBtn
            btn_classes="bt my-auto"
            classes="fab fa-linkedin-in text-white"
            btn_style={{ backgroundColor: "#5977B8" }}
          ></FooterReachBtn>
        </div>
      </div>
    </>
  );
};

export default FooterHero;
