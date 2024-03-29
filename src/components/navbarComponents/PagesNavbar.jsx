import React, { useState } from "react";
import StickyNav from "./StickyNav";
import MulticolorLine from "../generalComponents/MulticolorLine";
import Nav from "./Nav";
import FixedNav from "./FixedNav";
import LanguageModal from "../generalComponents/LanguageModal";
import StickyNav2 from "./StickyNav2";
import ScrollProgress from "../generalComponents/ScrollProgress";

const PagesNavbar = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 100 ||
  //     document.documentElement.scrollTop > 100
  //   ) {
  //     stickyNav.classList.add("scroll-animation");
  //   } else if (
  //     document.body.scrollTop < 100 ||
  //     document.documentElement.scrollTop < 100
  //   ) {
  //     stickyNav.classList.remove("scroll-animation");
  //   } else {
  //   }
  // }


  function scrollFunction() {
    const stickyNav = document.getElementById("stickyNav");
  
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      stickyNav.classList.add("scroll-animation");
    } else if (
      document.body.scrollTop < 100 ||
      document.documentElement.scrollTop < 100
    ) {
      stickyNav.classList.remove("scroll-animation");
    } else {
      // You can add additional logic here if needed
    }
  }
  

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const callUs = () => {
    window.open("tel:+2347033959586");
  }
  
  return (
    <>
      <FixedNav />
    {/* <ScrollProgress/> */}
      <section
        className="animation"
        id="stickyNav"
        style={{
          width: "75%",
          height: "auto",
          position: "fixed",
          zIndex: "5",
          left: "12.5%",
        }}
      >
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
              <StickyNav
                name="our event"
                icon="fas fa-user"
                to_where="/ourevent"
                styles={{ width: "auto" }}
              ></StickyNav>
              <StickyNav
                name="news"
                icon="fas fa-edit"
                to_where="/ournews"
                styles={{ width: "auto" }}
              ></StickyNav>
              <StickyNav2
              sticky2Name="+2347033959586"
                sticky2Icon="fas fa-phone"
                myFunc={callUs}
                styles={{ width: "auto" }}
              />
            </div>
            <div className="d-flex gap-5 w-50 justify-content-end">
              {/* <StickyNav
                name="languages"
                icon="fas fa-language"
                to_where=""
                styles={{ width: "auto" }}
              ></StickyNav>
              <StickyNav
                name="register"
                icon="fas fa-circle-plus"
                to_where="/student_signup"
                styles={{ width: "auto" }}
              ></StickyNav>
              <StickyNav
                name="login"
                icon="fas fa-right-to-bracket"
                to_where="/student_signin"
                styles={{ width: "auto" }}
              ></StickyNav> */}
              <StickyNav2
                sticky2Name="language"
                sticky2Icon="fas fa-language"
                myFunc={openModal}
              />
              <StickyNav
                name="register"
                icon="fas fa-circle-plus"
                to_where="/account_type"
                styles={{ width: "auto" }}
              ></StickyNav>
              <StickyNav
                name="login"
                icon="fas fa-right-to-bracket"
                to_where="/login_account_type"
                styles={{ width: "auto" }}
              ></StickyNav>
              
            </div>
          </div>
        </div>
        <MulticolorLine />
        <Nav />
        <LanguageModal isOpen={modalOpen} onClose={closeModal} />
      </section>
    </>
  );
};

export default PagesNavbar;
