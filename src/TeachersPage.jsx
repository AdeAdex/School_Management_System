import React from "react";
import Previous_Next_Btn from "./components/Previous_Next_Btn";
import Footer from "./components/Footer";
import OthersBgImage from "./components/OthersBgImage";
import TeachersType from "./components/TeachersType";
import ActivitiesHeader from "./components/ActivitiesHeader";
import TeachersHousesCard from "./components/TeachersHousesCard";

const TeachersPage = () => {
  return (
    <>
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
        <div className="bg image2 news-image2 d-flex flex-column">
          <OthersBgImage></OthersBgImage>
        </div>
        <div className="center-div mt-4">
          <div className="teachers_type d-flex w-100 gap-4">
            <TeachersType
              container_style={{
                height: "160px",
                width: "33.3%",
                backgroundColor: "#74cee4",
                borderRadius: "5px",
              }}
              icon="fas fa-1 shadow"
              userFeedbackName="PEDAGOGICAL STUDY"
              feedbackContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum dolor tempora fuga aliquam tenetur."
            ></TeachersType>
            <TeachersType
              container_style={{
                height: "160px",
                width: "33.3%",
                backgroundColor: "#6fc191",
                borderRadius: "5px",
              }}
              icon="fas fa-2 shadow"
              userFeedbackName="ASSISTANCE TO DISABLED"
              feedbackContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum dolor tempora fuga aliquam tenetur."
            ></TeachersType>
            <TeachersType
              container_style={{
                height: "160px",
                width: "33.3%",
                backgroundColor: "#edbf47",
                borderRadius: "5px",
              }}
              icon="fas fa-3 shadow"
              userFeedbackName="MONTESSORI TEACHING"
              feedbackContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum dolor tempora fuga aliquam tenetur."
            ></TeachersType>
          </div>

          <Previous_Next_Btn></Previous_Next_Btn>
          <ActivitiesHeader
          classes="activities activities-color"
          name="orange house"
          content="FULL TIME · AGE: 3-6 YEARS OLD"
          hrStyle={{ backgroundColor: "orange" }}
        ></ActivitiesHeader>
        <div className="d-flex gap-4 w-100 flex-wrap">
        <TeachersHousesCard img="pic/1.jpg"></TeachersHousesCard>
        <TeachersHousesCard img="pic/5.png"></TeachersHousesCard>
        <TeachersHousesCard img="pic/5.png"></TeachersHousesCard>
        <TeachersHousesCard img="pic/5.png"></TeachersHousesCard>
        </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default TeachersPage;
