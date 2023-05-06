import React from "react";
import Previous_Next_Btn from "./components/Previous_Next_Btn";
import Footer from "./components/Footer";
import OthersBgImage from "./components/OthersBgImage";
import TeachersType from "./components/TeachersType";
import ActivitiesHeader from "./components/ActivitiesHeader";
import BgImageInner3 from "./components/BgImageInner3";
import BlueHouseTeachersCard from "./components/BlueHouseTeachersCard";
import OrangeHouseTeachersCard from "./components/OrangeHouseTeachersCard";

const TeachersPage = () => {
  return (
    <>
      <div className="teachers-container mx-aut" style={{ width: "100%", height: "100vh" }}>
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
          <div className="d-flex gap-4 w-100 flex-wrap position-relative">
            <OrangeHouseTeachersCard
              img="pic/teacher10.jpg"
              bodyClassName="orange-body-main col-md-7 orange d-flex"
              teacherName="juliet margaret"
            ></OrangeHouseTeachersCard>
            <OrangeHouseTeachersCard
              img="pic/teacher9.jpg"
              bodyClassName="orange-body-main col-md-7 skyblue d-flex"
              teacherName="lucy faith"
            ></OrangeHouseTeachersCard>
            <OrangeHouseTeachersCard
              img="pic/teacher5.png"
              bodyClassName="orange-body-main col-md-7 yellow d-flex"
              teacherName="john smith"
            ></OrangeHouseTeachersCard>
            <OrangeHouseTeachersCard
              img="pic/teacher8.jpg"
              bodyClassName="orange-body-main col-md-7 purple d-flex"
              teacherName="oluwaseun adewale"
            ></OrangeHouseTeachersCard>
          </div>
        </div>
        <div className="bg image3 d-flex">
          <BgImageInner3 bg3_styles={{ height: "60%" }}></BgImageInner3>
        </div>
        <div className="center-div mt-4">
          <ActivitiesHeader
            classes="activities activities-color"
            name="blue house"
            content="FULL TIME · AGE: 0-3 YEARS OLD"
            hrStyle={{ backgroundColor: "orange" }}
          ></ActivitiesHeader>
          <div class="card-group gap-4">
            <BlueHouseTeachersCard
              teacherName="promise joy"
              img="pic/teacher1.jpg"
              cardstyle={{ width: "18rem" }}
              classes="our-events"
              h5Classes="card-title skyblue py-3 text-center text-uppercase px-3"
              h5Style={{ marginBottom: "0px" }}
              title="A DAY IN THE PARK"
              styles={{ backgroundColor: "#F9F9F9" }}
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non try to eat everyday."
              iconStyle={{ backgroundColor: "#74cee4" }}
            ></BlueHouseTeachersCard>
            <BlueHouseTeachersCard
              teacherName="wale ayefele"
              img="pic/teacher12.png"
              cardstyle={{ width: "18rem" }}
              classes="our-events"
              h5Classes="card-title yellow py-3 text-center text-uppercase px-3"
              h5Style={{ marginBottom: "0px" }}
              title="A DAY IN THE PARK"
              styles={{ backgroundColor: "#F9F9F9" }}
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non try to eat everyday."
              iconStyle={{}}
            ></BlueHouseTeachersCard>
            <BlueHouseTeachersCard
              teacherName="george ramsey"
              img="pic/teacher11.jpg"
              cardstyle={{ width: "18rem" }}
              classes="our-events"
              h5Classes="card-title pink py-3 text-center text-uppercase px-3"
              h5Style={{ marginBottom: "0px" }}
              title="A DAY IN THE PARK"
              styles={{ backgroundColor: "#F9F9F9" }}
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non try to eat everyday."
              iconStyle={{}}
            ></BlueHouseTeachersCard>
            <BlueHouseTeachersCard
              teacherName="evelyn rose"
              img="pic/teacher7.jpg"
              cardstyle={{ width: "18rem" }}
              classes="our-events"
              h5Classes="card-title red py-3 text-center text-uppercase px-3"
              h5Style={{ marginBottom: "0px" }}
              title="A DAY IN THE PARK"
              styles={{ backgroundColor: "#F9F9F9" }}
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non try to eat everyday."
              iconStyle={{}}
            ></BlueHouseTeachersCard>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default TeachersPage;
