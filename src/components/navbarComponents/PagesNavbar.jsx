import React from 'react'
import StickyNav from "./StickyNav";
import MulticolorLine from "../generalComponents/MulticolorLine";
import Nav from "./Nav";
import FixedNav from "./FixedNav";

const PagesNavbar = () => {

        window.onscroll = function () {
                scrollFunction();
              };
            
              function scrollFunction() {
                if (
                  document.body.scrollTop > 100 ||
                  document.documentElement.scrollTop > 100
                ) {
                  // stickyNav.style.setProperty("top", "25px", "important");
                  stickyNav.classList.add("scroll-animation");
                } else if (
                  document.body.scrollTop < 100 ||
                  document.documentElement.scrollTop < 100
                ) {
                  // stickyNav.style.setProperty("top", "50px", "important");
                  stickyNav.classList.remove("scroll-animation");
                } else {
                }
              }
  return (
    <>
        <FixedNav/>
      <section className="animation"  id="stickyNav" style={{ width: "75%", height: "auto", position: 'fixed',  zIndex: '5', left: '12.5%'}}>
      <div
        className="sticky-container d-flex px-4 text-capitalize text-white"
        style={{
          height: "30px",
          // marginTop: "50px",
          backgroundColor: "#495052",
        }}
      >
      <div className="d-flex w-100">
        <div className="d-flex gap-5 w-50 justify-content-start">
        <StickyNav name="our event" icon="fas fa-user" to_where="/ourevent" styles={{width: "auto"}}></StickyNav>
        <StickyNav name="news" icon="fas fa-edit" to_where="/ournews" styles={{width: "auto"}}></StickyNav>
        <StickyNav name="+2347033959586" icon="fas fa-phone" styles={{width: "auto"}}></StickyNav>
        </div>
        <div className="d-flex gap-5 w-50 justify-content-end">
        <StickyNav name="languages" icon="fas fa-language" to_where="/errorPage" styles={{width: "auto"}}></StickyNav>
        <StickyNav name="register" icon="fas fa-circle-plus"  to_where="/student_signup" styles={{width: "auto"}}></StickyNav>
        <StickyNav name="login" icon="fas fa-right-to-bracket" to_where="/SignIn" styles={{width: "auto"}}></StickyNav>
        </div>
      </div>
      </div>
        <MulticolorLine/>
        <Nav/>
      </section>
    </>
  )
}

export default PagesNavbar