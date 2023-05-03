import React from "react";
import BgImageInner3 from "./components/BgImageInner3";
import OurNews from "./components/OurNews";
import Previous_Next_Btn from "./components/Previous_Next_Btn";
import Footer from "./components/Footer";

const NewsPage = () => {
  return (
    <>
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
        <div className="bg image3 news-image2 d-flex flex-column">
          <BgImageInner3 bg3_styles={{height: '0px'}}></BgImageInner3>
        </div>
        <div className="center-div">
          <OurNews></OurNews>
          <Previous_Next_Btn></Previous_Next_Btn>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default NewsPage;
