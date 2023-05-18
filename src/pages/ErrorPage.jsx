import React from "react";
import PagesNavbar from "../components/PagesNavbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <PagesNavbar />
      <section
        className="shadow signup-container d-flex flex-lg-row flex-md-column flex-sm-column  mx-auto py-3 gap-3"
        style={{
          width: "75%",
          height: "",
          marginTop: "200px",
          backgroundColor: "#FFDBE1",
          marginBottom: '60px'
        }}
      >
        <div
          className="h-100 py-4 px-5 d-flex flex-column position-relative text-white signup-header"
          style={{
            width: "50%",
            // backgroundColor: "#3c37ff",
            borderRadius: "10px",
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
          className="bg-light signup-form"
          style={{ padding: "0px", width: "50%" }}
        >
          <img src="pic/error-img.png" style={{objectFit: "cover", width: '100%'}} alt="" />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ErrorPage;
