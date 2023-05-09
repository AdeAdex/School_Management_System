import React from "react";
import BgImageInner3 from "./components/BgImageInner3";
import OurNews from "./components/OurNews";
import Previous_Next_Btn from "./components/Previous_Next_Btn";
import Footer from "./components/Footer";
import Parallax from "./components/Parallax";

const NewsPage = () => {
  return (
    <>
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
      <Parallax
          classes="bg"
          styles={{
            height: "60%",
            backgroundImage:
              'url("pic/gallary8.jpg"), linear-gradient(rgba(72, 72, 178, 0.5), rgba(116, 116, 124, 0.8))',
            backgroundPosition: "100% 45%",
          }}
          inner_classes="activities activities-white-color"
          name="BLOG MASONRY"
          content="ARCHIVE WITH MASONRY STYLE"
          hrStyle={{ backgroundColor: "white" }}
        />
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
