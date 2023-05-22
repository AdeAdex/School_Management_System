import React from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import Footer from "../components/footerComponents/Footer";
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <>
      <PagesNavbar />
      <section
        className="error-section d-flex"
        style={{
          width: "100%",
          backgroundColor: "#e2e2e2",
          paddingTop: "200px",
        }}
      >
      <div className="error-container d-flex flex-lg-row flex-md-column flex-sm-column  mx-auto" style={{width: '75%'}}>
      <div
          className="d-flex flex-column position-relative error-header"
          style={{
            width: "50%",
            height: "100%",
          }}
        >
          <div className="fw-bold h-100 d-flex" style={{ color: "#384259" }}>
            <div className="my-auto">
              <div className="" style={{ fontSize: "60px" }}>
                Ooops....
              </div>
              <br />
              <span className="fs-3">Page not found</span>
              <div className="fs-5 mt-4">
                Uh oh, we cant seem to find the page you'r looking for.
              </div>
              <div className="fs-5">
                try going back to previous page or contact us for more
                information
              </div>
            </div>
          </div>
        </div>
        <div
          className="error-footer"
          style={{width: "50%" }}
        >
          <img src="pic/error-img2.png" style={{objectFit: "cover", width: '100%'}} alt="error image" />
        </div>
      </div>
        
      </section>
      <Footer/>
    </>
  );
};

export default ErrorPage;
