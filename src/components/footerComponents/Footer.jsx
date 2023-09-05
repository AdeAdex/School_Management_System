import React from "react";
import FooterHeader from "./FooterHeader";
import OurTagBtn from "./OurTagBtn";
import FooterGallary from "./FooterGallary";
import FooterReachBtn from "./FooterReachBtn";
import Contact_Us_Form from "./Contact_Us_Form";
import FooterHero from "./FooterHero";
import Small_hr from "../generalComponents/Small_hr";
import MulticolorLine from "../generalComponents/MulticolorLine";

const Footer = () => {
  const primarySchool = (para) => {
    if (para == "call") {
      window.open("tel:+2347033959586");
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "warning",
        title: "Currently Unavailable, Please Try Again Later",
      });
    }
  };

  return (
    <>
      <div
        className=" w-100"
        style={{ backgroundColor: "#495052", paddingBottom: "50px" }}
      >
        <MulticolorLine />
        <div
          className="top-footer mx-auto d-flex gap-4 w-75"
          style={{ paddingTop: "50px" }}
        >
          <div className="each-footer text-white" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="our primary school"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <div>
              Welcome to Our Primary School, where learning is an exciting
              adventure every day! 🌟 Our school is a place filled with
              laughter, curiosity, and endless opportunities to grow and
              explore. 📚🌈
            </div>
            <div className="d-flex mt-3 gap-3">
              <FooterReachBtn
                btn_classes="bt orange"
                classes="fas fa-envelope text-white"
                icon="msg"
                onClick={() => primarySchool("msg")}
              ></FooterReachBtn>
              <FooterReachBtn
                btn_classes="bt yellow"
                classes="fas fa-home "
                onClick={() => primarySchool("home")}
              ></FooterReachBtn>
              <FooterReachBtn
                btn_classes="bt pink"
                classes="fas fa-phone"
                onClick={() => primarySchool("call")}
              ></FooterReachBtn>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="our tag"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3 flex-wrap w-100">
                <OurTagBtn btn_txt="teacher"></OurTagBtn>
                <OurTagBtn btn_txt="courses"></OurTagBtn>
                <OurTagBtn btn_txt="events"></OurTagBtn>
                <OurTagBtn btn_txt="nursery"></OurTagBtn>
                <OurTagBtn btn_txt="primary"></OurTagBtn>
                <OurTagBtn btn_txt="secondary"></OurTagBtn>
              </div>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="school gallery"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3">
                <FooterGallary
                  img="pic/gallary1.jpeg"
                  cover="Image 1"
                ></FooterGallary>
                <FooterGallary
                  img="pic/gallary2.jpg"
                  cover="Image 2"
                ></FooterGallary>
                <FooterGallary
                  img="pic/gallary3.jpg"
                  cover="Image 3"
                ></FooterGallary>
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
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="contact us"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
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
