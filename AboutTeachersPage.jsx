import React from "react";
import OthersBgImage from "./src/components/OthersBgImage";
import ActivitiesHeader from "./src/components/ActivitiesHeader";

const AboutTeachersPage = () => {
  return (
    <>
      <div
        className="teachers-container mx-aut"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="bg image5 news-image2 d-flex flex-column">
          <OthersBgImage classes="activities activities-white-color"
            name="juliet margaret"
            content="know juliet our math teacher"
            hrStyle={{ backgroundColor: "white" }}></OthersBgImage>
        </div>
        <div className=" d-flex w-75 mx-auto gap-4">
                <div className="" style={{width: '33%'}}>
                        
                </div>
                <div className="" style={{width: '33%'}}>klk</div>
                <div className="" style={{width: '33%'}}>lkmk</div>
        </div>
      </div>
    </>
  );
};

export default AboutTeachersPage;
