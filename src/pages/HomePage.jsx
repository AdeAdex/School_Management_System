import React, { useEffect, useRef, useState } from "react";
import Carousel from "../components/carouselComponents/Carousel";
import OurActivities from "../components/homepageComponents/OurActivities";
import OurEvents from "../components/eventPageComponents/OurEvents";
import NavigatoContainer from "../components/homepageComponents/NavigatoContainer";
import OurNews from "../components/newsPageComponents/OurNews";
import Footer from "../components/footerComponents/Footer";
import Parallax1 from "../components/generalComponents/Parallax1";
import Parallax2 from "../components/generalComponents/Parallax2";
import Parallax3 from "../components/generalComponents/Parallax3";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import ScrollProgress from "../components/generalComponents/ScrollProgress";

const HomePage = () => {
  const contactUsRef = useRef();
  const [showScrollButton, setShowScrollButton] = useState(false);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const scrollToContactUs = (param) => {
    if (param === "contact us") {
      if (contactUsRef.current) {
        contactUsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Carousel />
      <PagesNavbar />
      <ScrollProgress />
      <div className="mx-aut" style={{ width: "100%", height: "100vh" }}>
        <div className="center-div">
          <NavigatoContainer />
        </div>
        <Parallax1
          classes="bg"
          styles={{
            height: "30%",
            backgroundImage: 'url("pic/bg-image-1.jpg")',
          }}
          inner_content_2="contact us"
          onClick={() => scrollToContactUs("contact us")}
        />
        <div className="center-div">
          <section name="section1">
            <OurActivities />
          </section>
        </div>
        <Parallax2
          classes="bg image2"
          styles={{
            flexDirection: "column",
            height: "50%",
            backgroundImage:
              'linear-gradient(rgba(72, 72, 178, 0.5), rgba(116, 116, 124, 0.8)), url("pic/bg-image-2.jpg")',
          }}
        />
        <div className="center-div">
          <section name="section2">
            <OurEvents />
          </section>
        </div>
        <Parallax3
          classes="bg image3"
          styles={{ height: "40%", backgroundImage: "url(pic/bg-image-4.jpg)" }}
        />
        <div className="center-div">
          <section name="section3">
            <OurNews></OurNews>
          </section>
          <div className="d-flex justify-content-center mt-5">
            <button
              className="btn text-white text-uppercase d-flex gap-3 px-4 py-2 view-more-button type1"
              style={{ backgroundColor: "#74CEE4" }}
            >
              <i className="fas fa-border-all my-auto"></i> view more
            </button>
          </div>
        </div>
        {showScrollButton && (
          <button
            className="scroll-to-top-button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Top
            <div className="top-arrow">
              <span className="arrow-span"></span>
              <span className="arrow-span"></span>
              <span className="arrow-span"></span>
            </div>
          </button>
        )}

        <div ref={contactUsRef}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
