import React from "react";
import "../pages/AboutUsPage.css";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import Footer from "../components/footerComponents/Footer";

const AboutUsPage = () => {
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

          <section className="additional-image">
            <img src="/pic/teacher21.jpg" alt="First Image" />
            <div className="image-content">
              <h2>Our Campus</h2>
              <p>
                Explore our beautiful campus, where students learn and grow.
              </p>
            </div>
          </section>

          <section className="additional-image">
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

      <Footer />
    </>
  );
};

export default AboutUsPage;
