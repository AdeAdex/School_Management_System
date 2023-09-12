import React from "react";
import FooterReachBtn from "./FooterReachBtn";
import { useNavigate } from "react-router-dom";

const FooterHero = () => {
  let navigate = useNavigate()
  const primarySchool = (para) => {
    if (para == "facebook") {
      window.open('https://web.facebook.com/adeolu.z.adex', '_blank');
    } else if (para == "twitter") {
      window.open('https://twitter.com/AdeAdex_', '_blank');
    } else if (para == "linkedin") {
      window.open('https://www.linkedin.com/in/adeolu-amole-629a80151/', '_blank');
    } else {

    }
  }
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
          <span className="d-flex my-auto px-4">
            © Copyright 2023 by Adex - Made With ❤ In Nigeria
          </span>{" "}
        </div>
        <div className="w-50 d-flex gap-4 justify-content-center">
          <FooterReachBtn
            btn_classes="bt my-auto"
            classes="fab fa-facebook-f"
            btn_style={{ backgroundColor: "#5977B8" }}
            onClick={() => primarySchool('facebook')}
          ></FooterReachBtn>
          <FooterReachBtn
            btn_classes="bt my-auto"
            classes="fab fa-twitter text-white"
            btn_style={{ backgroundColor: "#74CEE4" }}
            onClick={() => primarySchool('twitter')}
          ></FooterReachBtn>
          <FooterReachBtn
            btn_classes="bt my-auto"
            classes="fab fa-linkedin-in text-white"
            btn_style={{ backgroundColor: "#5977B8" }}
            onClick={() => primarySchool('linkedin')}
          ></FooterReachBtn>
        </div>
      </div>
    </>
  );
};

export default FooterHero;
