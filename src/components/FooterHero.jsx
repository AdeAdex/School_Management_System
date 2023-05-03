import React from "react";
import FooterReachBtn from "./FooterReachBtn";

const FooterHero = () => {
  return (
    <>
      <div className="d-flex" style={{ backgroundColor: "#404547", height: "100px", width: '100%', color: 'white' }}>
        <div className="w-50 d-flex justify-content-center h-100"><span className="d-flex my-auto">© Copyright 2023 by Adex - Made With  In Nigeria</span> </div>
        <div className="w-50">
                <FooterReachBtn btn_classes="bt yellow"
                classes="fab fa-facebook "></FooterReachBtn>
                <FooterReachBtn btn_classes="bt yellow"
                classes="fab fa-twitter"></FooterReachBtn>
                <FooterReachBtn btn_classes="bt yellow"
                classes="fab fa-"></FooterReachBtn>
        </div>
      </div>
    </>
  );
};

export default FooterHero;
