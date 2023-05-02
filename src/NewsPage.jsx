import React from "react";
import BgImageInner3 from "./components/BgImageInner3";
import OurNews from "./components/OurNews";

const NewsPage = () => {
  return (
    <>
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
        <div className="bg image3 news-image2 d-flex">
          <BgImageInner3></BgImageInner3>
        </div>
        <div className="center-div">
          <OurNews></OurNews>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
