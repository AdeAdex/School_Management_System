import React, { useEffect, useState } from "react";
import Footer from "../components/footerComponents/Footer";
import TeachersType from "../components/teachersPageComponents/TeachersType";
import ActivitiesHeader from "../components/generalComponents/ActivitiesHeader";
import BlueHouseTeachersCard from "../components/teachersPageComponents/BlueHouseTeachersCard";
import OrangeHouseTeachersCard from "../components/teachersPageComponents/OrangeHouseTeachersCard";
import Parallax from "../components/generalComponents/Parallax";
import Parallax3 from "../components/generalComponents/Parallax3";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeachersPage = () => {
  const [teacherInfo, setTeacherInfo] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/create_staff_account";
    axios.get(endpoint).then((response) => {
      // console.log(response.data.response[0].aboutTeacher);
      setTeacherInfo(response.data.response[0].aboutTeacher);
      // console.log(teacherInfo);
    });
  }, [teacherInfo]);

  const toTeachersPage = (teacherData) => {
    // navigate(`/about_this_teacher?name=${teacherName}&info=${teacherInfo}&picture=${teacherPicture}`);
    navigate("/about_this_teacher", { state: teacherData });
  };

  const firstFourTeacher = teacherInfo.slice(0, 4);
  const lastFourTeacher = teacherInfo.slice(4);

  return (
    <>
      <PagesNavbar />
      <div
        className="teachers-container mx-aut"
        style={{ width: "100%", height: "100vh" }}
      >
        <Parallax
          classes="bg other_parallax"
          styles={{
            height: "60%",
            backgroundImage:
              'url("pic/teacher17.avif"), linear-gradient(rgba(72, 72, 178, 0.5), rgba(116, 116, 124, 0.8))',
            backgroundPosition: "100% 10%",
          }}
          inner_classes="activities activities-white-color"
          name="our teacher"
          content="know our best educator"
          hrStyle={{ backgroundColor: "white" }}
        />
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
              feedbackContent="Our pedagogical study program focuses on innovative teaching methods that empower students to reach their full potential."
            />
            <TeachersType
              container_style={{
                height: "160px",
                width: "33.3%",
                backgroundColor: "#6fc191",
                borderRadius: "5px",
              }}
              icon="fas fa-2 shadow"
              userFeedbackName="ASSISTANCE TO DISABLED"
              feedbackContent="We are committed to providing specialized assistance to disabled individuals, ensuring their inclusion in our educational community."
            />
            <TeachersType
              container_style={{
                height: "160px",
                width: "33.3%",
                backgroundColor: "#edbf47",
                borderRadius: "5px",
              }}
              icon="fas fa-3 shadow"
              userFeedbackName="MONTESSORI TEACHING"
              feedbackContent="Our Montessori teaching approach fosters independence, curiosity, and a love for learning in young children."
            />
          </div>

          <ActivitiesHeader
            classes="activities activities-color"
            name="orange house"
            content="FULL TIME"
            hrStyle={{ backgroundColor: "orange" }}
          />
          <div className="d-flex gap-lg-4 gap-md-4 w-100 flex-wrap position-relative">
            {firstFourTeacher.map((eachTeacher, index) => (
              <OrangeHouseTeachersCard
                key={index}
                img={eachTeacher.teacherPicture}
                bodyClassName={`${
                  index % 5 === 0
                    ? "orange"
                    : index % 5 === 1
                    ? "skyblue"
                    : index % 5 === 2
                    ? "yellow"
                    : index % 5 === 3
                    ? "purple"
                    : "pink"
                } orange-body-main col-lg-7 col-md-12 d-flex`}
                // bodyClassName="orange-body-main col-lg-7 col-md-12 orange d-flex"
                teacherName={eachTeacher.teacherName}
                aboutTeacher={eachTeacher.teacherInfo}
                onClick={() => {
                  toTeachersPage({
                    teacherName: eachTeacher.teacherName,
                    teacherInfo: eachTeacher.teacherInfo,
                    teacherPicture: eachTeacher.teacherPicture,
                    teacherVideo: eachTeacher.teacherVideo,
                    teacherSkills: eachTeacher.teacherSkills,
                  });
                }}
              />
            ))}
          </div>
        </div>
        <Parallax3
          classes="bg image3"
          styles={{ height: "40%", backgroundImage: "url(pic/bg-image-4.jpg)" }}
        />
        <div className="center-div mt-4">
          <ActivitiesHeader
            classes="activities activities-color"
            name="blue house"
            content="FULL TIME"
            hrStyle={{ backgroundColor: "orange" }}
          />
          <div className="card-group gap-4">
            {lastFourTeacher.map((eachTeacher, index) => (
              <BlueHouseTeachersCard
                key={index}
                img={eachTeacher.teacherPicture}
                bodyClassName={`${
                  index % 5 === 0
                    ? "maroon"
                    : index % 5 === 1
                    ? "green"
                    : index % 5 === 2
                    ? "brown"
                    : index % 5 === 3
                    ? "dark-slate-gray"
                    : "pink"
                } py-2 ps-4`}
                h5Classes="card-title skyblue py-3 text-center text-uppercase px-3"
                h5Style={{ marginBottom: "0px" }}
                title={eachTeacher.teacherName}
                styles={{ backgroundColor: "#F9F9F9" }}
                teacherName={eachTeacher.teacherName}
                content={eachTeacher.teacherInfo}
                iconStyle={`${
                  index % 5 === 0
                    ? "maroon"
                    : index % 5 === 1
                    ? "green"
                    : index % 5 === 2
                    ? "brown"
                    : index % 5 === 3
                    ? "dark-slate-gray"
                    : "pink"
                }`}
                // iconStyle={{ backgroundColor: "#74cee4" }}
                to_where="/about_this_teacher"
                onClick={() => {
                  toTeachersPage({
                    teacherName: eachTeacher.teacherName,
                    teacherInfo: eachTeacher.teacherInfo,
                    teacherPicture: eachTeacher.teacherPicture,
                    teacherVideo: eachTeacher.teacherVideo,
                    teacherSkills: eachTeacher.teacherSkills,
                  });
                }}
              />
            ))}
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default TeachersPage;
