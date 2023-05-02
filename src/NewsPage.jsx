import React from "react";
import BgImageInner3 from "./components/BgImageInner3";
import OurNews from "./components/OurNews";
import Previous_Next_Btn from "./components/Previous_Next_Btn";

const NewsPage = () => {
  return (
    <>
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
        <div className="bg image3 news-image2 d-flex">
          <BgImageInner3></BgImageInner3>
        </div>
        <div className="center-div">
          <OurNews></OurNews>
          <Previous_Next_Btn></Previous_Next_Btn>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
