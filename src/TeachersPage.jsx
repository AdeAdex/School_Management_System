import React from "react";
import Previous_Next_Btn from "./components/Previous_Next_Btn";
import Footer from "./components/Footer";
import OthersBgImage from "./components/OthersBgImage";

const TeachersPage = () => {
  return (
    <>
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
        <div className="bg image2 news-image2 d-flex flex-column">
          <OthersBgImage></OthersBgImage>
        </div>
        <div className="center-div">
          <Previous_Next_Btn></Previous_Next_Btn>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default TeachersPage;
