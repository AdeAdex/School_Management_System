import React from "react";
import OthersBgImage from "./src/components/OthersBgImage";
import ActivitiesHeader from "./src/components/ActivitiesHeader";
import BgImageInner1 from "./src/components/BgImageInner1";
import FooterHeader from "./src/components/FooterHeader";
import Footer from "./src/components/Footer";
import Small_hr from "./src/components/Small_hr";

const AboutTeachersPage = () => {
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
          <div className="" style={{ width: "33%" }}>
            <img
              src="pic/teacher10.jpg"
              alt=""
              style={{ height: "400px", width: "100%", borderRadius: "5px" }}
            />
          </div>
          <div className="" style={{ width: "33%" }}>
            <FooterHeader headerName="about me"></FooterHeader>
            <Small_hr
              hr_style={{
                height: "3px",
                backgroundColor: "red",
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
            <FooterHeader headerName="my skills"></FooterHeader>
            <Small_hr
              hr_style={{
                height: "3px",
                backgroundColor: "red",
                width: "35px",
              }}
            ></Small_hr>
          </div>
        </div>
        <div className="bg image1 d-flex">
          <BgImageInner1></BgImageInner1>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AboutTeachersPage;
