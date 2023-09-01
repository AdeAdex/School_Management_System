import React, { useEffect, useState } from "react";
import FooterHeader from "../components/footerComponents/FooterHeader";
import Footer from "../components/footerComponents/Footer";
import Small_hr from "../components/generalComponents/Small_hr";
import Skills from "../components/aboutTeachersPageComponents/Skills";
import Parallax from "../components/generalComponents/Parallax";
import EmptyParallax from "../components/aboutTeachersPageComponents/EmptyParallax";
import MyLessons from "../components/aboutTeachersPageComponents/MyLessons";
import Contact_Teacher_Form from "../components/aboutTeachersPageComponents/Contact_Teacher_Form";
import Parallax1 from "../components/generalComponents/Parallax1";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import { useLocation } from "react-router-dom";


const AboutTeachersPage = ({ seconds }) => {
  const [countdown, setCountdown] = useState(5);

  const location = useLocation();
  const { teacherName, teacherInfo, teacherPicture, teacherVideo } = location.state;
  // useEffect(() => {
  //   const timer =
  //     countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [countdown]);

  const countDown = () => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  };
  useEffect(() => {
    setTimeout(() => countDown(), 1000);
  }, [countdown]);

  return (
    <>
    <PagesNavbar/>
      <div
        className="teachers-container mx-aut"
        style={{ width: "100%", height: "100vh" }}
      >
        <Parallax
          classes="bg other_parallax other_parallax-about_teachers_page_positioning"
          styles={{
            height: "60%",
            backgroundImage:
              'url("pic/teacher24.jpg"), linear-gradient(rgba(72, 72, 178, 0.5), rgba(116, 116, 124, 0.8))',
            backgroundPosition: "60% 10%",
          }}
          inner_classes="activities activities-white-color"
          name={teacherName}
          content={"know " + teacherName + " our " + teacherName + " teacher"}
          hrStyle={{ backgroundColor: "white" }}
        />
        <div className="teacher_skill d-flex w-75 mx-auto gap-4 py-5">
          {/* <div>{countdown}</div> */}
          <div className="skill_content" style={{ width: "33%" }}>
            <img
              src={teacherPicture}
              alt=""
              style={{ height: "400px", width: "100%", borderRadius: "5px" }}
            />
          </div>
          <div className="skill_content" style={{ width: "33%" }}>
            <FooterHeader
              headerClasses="text-uppercase text-color"
              headerName="about me"
            />
            <Small_hr
              hr_class="my-3 skyblue"
              hr_style={{
                height: "3px",
                width: "35px",
              }}
            ></Small_hr>
            <div className="text-color" style={{maxHeight: '21em', backgroundColor: '', overflowY: 'scroll', overflowX: 'hidden'}}>
              {teacherInfo}
            </div>
          </div>
          <div className="skill_content" style={{ width: "33%" }}>
            <FooterHeader
              headerClasses="text-uppercase text-color"
              headerName="my skills"
            />
            <Small_hr
              hr_class="my-3 yellow"
              hr_style={{
                height: "3px",
                width: "35px",
              }}
            ></Small_hr>
            <div className="card p-3">
              <div className="body w-100 d-flex flex-column gap-3">
                <Skills
                  skill_classes="skill-percent yellow d-flex gap-4 text-white px-4"
                  skill_style={{ width: "95%" }}
                  skills="HTML"
                  skill_percent="95%"
                ></Skills>
                <Skills
                  skill_classes="skill-percent skyblue d-flex gap-4 text-white px-4"
                  skill_style={{ width: "85%" }}
                  skills="CSS"
                  skill_percent="85%"
                ></Skills>
                <Skills
                  skill_classes="skill-percent green d-flex gap-4 text-white px-4"
                  skill_style={{ width: "75%" }}
                  skills="JavaScript"
                  skill_percent="75%"
                ></Skills>
                <Skills
                  skill_classes="skill-percent orange d-flex gap-4 text-white px-4"
                  skill_style={{ width: "65%" }}
                  skills="React"
                  skill_percent="65%"
                ></Skills>
                <Skills
                  skill_classes="skill-percent pink d-flex gap-4 text-white px-4"
                  skill_style={{ width: "55%" }}
                  skills="Node"
                  skill_percent="55%"
                ></Skills>
              </div>
            </div>
          </div>
        </div>
        <EmptyParallax
          classes="bg"
          styles={{
            height: "30%",
            backgroundImage: 'url("pic/gallary6.jpg")',
          }}
          inner_content_2="contact us"
        />
        <div className="teacher_skill d-flex w-75 mx-auto gap-4 py-5">
          {/* <div>{countdown}</div> */}
          <div className="skill_content" style={{ width: "33%" }}>
            <FooterHeader
              headerClasses="text-uppercase text-color"
              headerName="my videos"
            />
            <Small_hr
              hr_class="my-3 skyblue"
              hr_style={{
                height: "3px",
                width: "35px",
              }}
            ></Small_hr>
            <video
              className="w-100 shadow p-3"
              style={{ height: "300px" }}
              controls
              poster="pic/pic.jpg"
            >
              <source src={teacherVideo} type="video/mp4" />
            </video>
          </div>
          <div className="skill_content" style={{ width: "33%" }}>
            <FooterHeader
              headerClasses="text-uppercase text-color"
              headerName="my lessons"
            />
            <Small_hr
              hr_class="my-3 skyblue"
              hr_style={{
                height: "3px",
                width: "35px",
              }}
            ></Small_hr>
            <div className="text-color shadow p-3">
              <MyLessons
                text="DRAWING LESSON IN ALL CLASSES"
                styles={{ backgroundColor: "skyblue" }}
                btn_txt="8:00"
              />
              <hr style={{marginTop: '11px'}}/>
              <MyLessons
                text="BASIC NICE ART VIDEOS"
                styles={{ backgroundColor: "purple" }}
                btn_txt="10:00"
              />
              <hr style={{marginTop: '11px'}}/>
              <MyLessons
                text="SOME WATER COLOR PRACTICE"
                styles={{ backgroundColor: "skyblue" }}
                btn_txt="12:00"
              />
              <hr style={{marginTop: '11px'}}/>
              <MyLessons
                text="WONDERFUL STENCIL TEST PAINTING"
                styles={{ backgroundColor: "purple" }}
                btn_txt="14:00"
              />
              <hr style={{marginTop: '11px'}}/>
              <MyLessons
                text="COLOR WITH FRUIT AND VEGETABLES"
                styles={{ backgroundColor: "skyblue" }}
                btn_txt="16:00"
              />
            </div>
          </div>
          <div className="skill_content" style={{ width: "33%" }}>
            <FooterHeader
              headerClasses="text-uppercase text-color"
              headerName="contact me"
            />
            <Small_hr
              hr_class="my-3 skyblue"
              hr_style={{
                height: "3px",
                width: "35px",
              }}
            ></Small_hr>
            <Contact_Teacher_Form/>
          </div>
        </div>
        <Parallax1
          classes="bg"
          styles={{
            height: "30%",
            backgroundImage: 'url("pic/gallary4.png")',
          }}
          inner_content_2="curriculum"
        />
        {/* <EmptyParallax
          classes="bg"
          styles={{
            height: "30%",
            backgroundImage: 'url("pic/gallary4.png")',
          }}
          inner_content_2="contact us"
        /> */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default AboutTeachersPage;
