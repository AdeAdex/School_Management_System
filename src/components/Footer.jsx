import React from "react";
import FooterHeader from "./FooterHeader";
import OurTagBtn from "./OurTagBtn";
import FooterGallary from "./FooterGallary";
import FooterReachBtn from "./FooterReachBtn";
import Contact_Us_Form from "./Contact_Us_Form";
import FooterHero from "./FooterHero";
import Small_hr from "./Small_hr";

const Footer = () => {
  return (
    <>
      <div
        className=" w-100"
        style={{ backgroundColor: "#495052", padding: "50px 0px" }}
      >
        <div className="top-footer mx-auto d-flex gap-4 w-75">
          <div className="each-footer text-white" style={{ width: "25%" }}>
            <FooterHeader headerName="our primary school" headerStyle={{color: 'white'}}></FooterHeader>
            <Small_hr hr_class="my-3" hr_style={{height: "3px", backgroundColor: "white", width: "35px"}}></Small_hr>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae quam voluptatibus itaque aspernatur veniam officiis.
            </div>
            <div className="d-flex mt-3 gap-3">
              <FooterReachBtn
                btn_classes="bt orange"
                classes="fas fa-envelope text-white"
                icon="msg"
              ></FooterReachBtn>
              <FooterReachBtn
                btn_classes="bt yellow"
                classes="fas fa-home "
              ></FooterReachBtn>
              <FooterReachBtn
                btn_classes="bt pink"
                classes="fas fa-phone"
              ></FooterReachBtn>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader headerName="our tag" headerStyle={{color: 'white'}}></FooterHeader>
            <Small_hr hr_class="my-3" hr_style={{height: "3px", backgroundColor: "white", width: "35px"}}></Small_hr>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3 flex-wrap w-100">
                <OurTagBtn btn_txt="teacher"></OurTagBtn>
                <OurTagBtn btn_txt="baby"></OurTagBtn>
                <OurTagBtn btn_txt="kids"></OurTagBtn>
                <OurTagBtn btn_txt="nursery"></OurTagBtn>
                <OurTagBtn btn_txt="primary"></OurTagBtn>
                <OurTagBtn btn_txt="secondary"></OurTagBtn>
                <OurTagBtn btn_txt="teacher"></OurTagBtn>
                <OurTagBtn btn_txt="baby"></OurTagBtn>
                <OurTagBtn btn_txt="kids"></OurTagBtn>
              </div>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader headerName="school gallary" headerStyle={{color: 'white'}}></FooterHeader>
            <Small_hr hr_class="my-3" hr_style={{height: "3px", backgroundColor: "white", width: "35px"}}></Small_hr>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3">
                <FooterGallary img="pic/gallary1.jpeg" cover="Image 1"></FooterGallary>
                <FooterGallary img="pic/gallary2.jpg" cover="Image 2"></FooterGallary>
                <FooterGallary img="pic/gallary3.jpg" cover="Image 3"></FooterGallary>
              </div>
              <div className="d-flex gap-3">
                <FooterGallary img="pic/5.png" cover="Image 4"></FooterGallary>
                <FooterGallary
                  img="pic/avatar.png"
                  cover="Image 5"
                ></FooterGallary>
                <FooterGallary
                  img="pic/img.png"
                  cover="Image 6"
                ></FooterGallary>
              </div>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader headerName="contact us" headerStyle={{color: 'white'}}></FooterHeader>
            <Small_hr hr_class="my-3" hr_style={{height: "3px", backgroundColor: "white", width: "35px"}}></Small_hr>
            <Contact_Us_Form></Contact_Us_Form>
          </div>
        </div>

        <div className="mx-auto d-flex gap-4 w-100 mt-5">
                <FooterHero></FooterHero>
        </div>
      </div>
    </>
  );
};

export default Footer;
