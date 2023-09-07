import React, { useEffect, useState } from "react";
import "../pages/AboutUsPage.css";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import Footer from "../components/footerComponents/Footer";
import { useTranslation } from "react-i18next";

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
}

  const fetchSchoolLocation = () => {
    const schoolLatitude = 6.5243793;
    const schoolLongitude = 3.3792057;
    setSchoolLocation({ lat: schoolLatitude, lng: schoolLongitude });
  };
 

  useEffect(() => {
    getMyLocation()
    fetchSchoolLocation();
  }, []);


  const handleLocateUsClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor link
    if (schoolLocation) {
      // Check if the location is available before generating the Google Maps link
      const googleMapsLink = `https://maps.google.com/?q=${schoolLocation.lat},${schoolLocation.lng}`;
      window.location.href = googleMapsLink; // Redirect to the Google Maps link
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
          {/* <div>
            {schoolLocation ? (
              <div>
                Latitude: {schoolLocation.lat}, Longitude: {schoolLocation.lng}
              </div>
            ) : (
              <div>loading</div>
            )}
          </div> */}
          {/* <a href={"https://maps.google.com/?q=" + schoolLocation}>Location Us
          </a> */}
          <a href="#" onClick={handleLocateUsClick}>
            Locate Us
          </a>
          <header className="about-us-header">
            <img src="/pic/teacher21.jpg" alt="School Header" />
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
            <img src="/pic/teacher21.jpg" alt="First Image" />
            <div className="image-content">
              <h2>Our Campus</h2>
              <p>
                Explore our beautiful campus, where students learn and grow.
              </p>
            </div>
          </section>

          <section className="additional-image about-us-image2">
            <img src="/pic/teacher21.jpg" alt="Second Image" />
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

      {/* <div className="about-us-main-container">
      <a href={'https://maps.google.com/?q=' + children}>My Location</a>
      <div>{children}</div>
        <div
          className="d-flex flex-column justify-content-center align-items-center about-us-container"
          style={{
            minHeight: "100vh",
            paddingTop: "200px",
          }}
        >
          <header className="about-us-header">
            <img src="/pic/teacher21.jpg" alt="School Header" />
            <div className="header-content">
              <h1>{t("aboutUs.aboutOurSchool")}</h1>
              <p>{t("aboutUs.welcomeMessage")}</p>
            </div>
          </header>

          <section className="our-story">
            <h2>{t("aboutUs.ourHistory")}</h2>
            <div dangerouslySetInnerHTML={{ __html: t("aboutUs.historyContent") }} />
          </section>
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default AboutUsPage;
