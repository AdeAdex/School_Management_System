import React, { useEffect, useState } from "react";
import "../pages/AboutUsPage.css";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import Footer from "../components/footerComponents/Footer";
import { useTranslation } from "react-i18next";
import AboutUsCarousel from "../components/aboutUsComponent/AboutUsCarousel";

const AboutUsPage = () => {
  const { t } = useTranslation();
  const [userLocation, setUserLocation] = useState(null);
  const [schoolLocation, setSchoolLocation] = useState(null);

  const getMyLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(position);
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  };

  const fetchSchoolLocation = () => {
    const schoolLatitude = 8.142165;
    const schoolLongitude = 4.245186;
    setSchoolLocation({ lat: schoolLatitude, lng: schoolLongitude });
  };

  useEffect(() => {
    getMyLocation();
    fetchSchoolLocation();
  }, []);
 

  const handleLocateUsClick = (e) => {
    e.preventDefault();
    if (schoolLocation) {
      const googleMapsLink = `https://maps.google.com/?q=${schoolLocation.lat},${schoolLocation.lng}`;
      window.open(googleMapsLink, '_blank'); // Opens the link in a new tab
    }
  };

  return (
    <>
      <PagesNavbar />
      <div className="about-us-main-container">
        <div
          className="d-flex flex-column justify-content-center align-items-center about-us-container"
          style={{
            minHeight: "100vh",
            paddingTop: "200px",
          }}
        >
          <a href="#" onClick={handleLocateUsClick}>
            Locate Us
          </a>
          <header className="about-us-header">
            <AboutUsCarousel />
            <div className="header-content">
              <h1>About Our School</h1>
              <p>
                Welcome to our secondary school, where we strive to provide
                quality education and foster a nurturing environment for
                students.
              </p>
            </div>
          </header>

          <section className="our-story">
            <h2>Our History</h2>
            <p>
              Our school has a rich history of academic excellence dating back
              several decades. We have consistently provided top-tier education
              to countless students.
            </p>
            <p>
              Our commitment to educational innovation and holistic development
              sets us apart. We believe in nurturing not only the minds but also
              the character of our students.
            </p>
            <p>
              In an ever-changing world, we adapt and evolve to ensure that our
              students receive the best education possible.
            </p>
          </section>

          <section className="additional-image about-us-image1">
            <img src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_12_uzsauy.jpg" alt="First Image" />
            <div className="image-content">
              <h2>Our Campus</h2>
              <p>
                Explore our beautiful campus, where students learn and grow.
              </p>
            </div>
          </section>

          <section className="additional-image about-us-image2">
            <img src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_17_tkrwco.jpg" alt="Second Image" />
            <div className="image-content">
              <h2>Our Facilities</h2>
              <p>
                Discover our state-of-the-art facilities that support student
                success.
              </p>
            </div>
          </section>

          <section className="our-mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower our students with knowledge, critical
              thinking skills, and values that will prepare them for a
              successful future.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
