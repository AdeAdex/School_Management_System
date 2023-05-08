import React, { useEffect, useState } from "react";
import OthersBgImage from "./src/components/OthersBgImage";
import ActivitiesHeader from "./src/components/ActivitiesHeader";
import BgImageInner1 from "./src/components/BgImageInner1";
import FooterHeader from "./src/components/FooterHeader";
import Footer from "./src/components/Footer";
import Small_hr from "./src/components/Small_hr";
import Skills from "./src/components/Skills";
import Parallax from "./src/components/Parallax";

const AboutTeachersPage = ({seconds}) => {
  const [countdown, setCountdown] = useState(5);
  

  // useEffect(() => {
  //   const timer =
  //     countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [countdown]);
  
  const countDown =()=>{
    if (countdown > 0) {
      setCountdown(countdown - 1);
    } 
  }
  useEffect(() => {
    
    setTimeout(()=>countDown(), 1000)
  }, [countdown]);
  
  return (
    <>
      <div
        className="teachers-container mx-aut"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="bg image5 news-image2 d-flex flex-column">
          <OthersBgImage
            classes="activities activities-white-color"
            name="juliet margaret"
            content="know juliet our math teacher"
            hrStyle={{ backgroundColor: "white" }}
          ></OthersBgImage>
        </div>
        <div className=" d-flex w-75 mx-auto gap-4 py-5">
        <div>{countdown}</div>
          <div className="" style={{ width: "33%" }}>
            <img
              src="pic/teacher10.jpg"
              alt=""
              style={{ height: "400px", width: "100%", borderRadius: "5px" }}
            />
          </div>
          <div className="" style={{ width: "33%" }}>
            <FooterHeader
              headerClasses="text-uppercase text-color"
              headerName="about me"
            ></FooterHeader>
            <Small_hr
              hr_class="my-3 skyblue"
              hr_style={{
                height: "3px",
                width: "35px",
              }}
            ></Small_hr>
            <div className="text-color">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis nam, cumque delectus voluptas nisi illo voluptate
                necessitatibus, eos sunt corporis nemo accusamus minus
                assumenda, voluptates fugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium mollitia ex, harum nam reiciendis ab dolorem expedita
                molestias pariatur hic veniam eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                alias illo perferendis tenetur consequuntur aspernatur quisquam?
                Natus deleniti consequatur doloribus non harum omnis possimus
                eos. Distinctio consequatur non velit blanditiis?
              </p>
            </div>
          </div>
          <div className="" style={{ width: "33%" }}>
            <FooterHeader
              headerClasses="text-uppercase text-color"
              headerName="my skills"
            ></FooterHeader>
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
        <Parallax styles={{width: '100%', height: '30%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundImage: 'url("pic/teacher23.jpg")'}}></Parallax>
        <div className="bg image1 d-flex">
          <BgImageInner1></BgImageInner1>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AboutTeachersPage;
