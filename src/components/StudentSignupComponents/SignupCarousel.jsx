import React from "react";

const SignupCarousel = ({
  carousel_content,
  carousel_content2,
  carousel_content3,
  carousel_name1,
  carousel_name2,
  carousel_name3,
  carousel_role1,
  carousel_role2,
  carousel_role3,
}) => {
  return (
    <>
      <div
        className="flex-column py-4 px-3 text-white"
        style={{
          backgroundColor: "#2520e3",
          borderRadius: "20px",
          marginTop: "auto",
        }}
      >
        <div className="d-flex gap-3 mt-3">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators" style={{ bottom: "-60px" }}>
              <button
                type="button"
                data-bs-target="##carouselExampleControls"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="##carouselExampleControls"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="##carouselExampleControls"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="7000">
                <div>{carousel_content}</div>
                <div className="d-flex gap-3 mt-4">
                  <img
                    src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1696005927/Love_xfpgkb.jpg"
                    alt="Grace"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    className="d-block"
                  />
                  <div className="flex-column">
                    <div>{carousel_name1}</div>
                    <div>{carousel_role1}</div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <div>{carousel_content2}</div>
                <div className="d-flex gap-3 mt-3">
                  <img
                    src=""
                    alt="Felix"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    className="d-block"
                  />
                  <div className="flex-column">
                    <div>{carousel_name2}</div>
                    <div>{carousel_role2}</div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <div>{carousel_content3}</div>
                <div className="d-flex gap-3 mt-3">
                  <img
                    src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1696005821/facebook_1696005686916_7113563436657715941_wk9exl.jpg"
                    alt="Bunmi"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    className="d-block"
                  />
                  <div className="flex-column">
                    <div>{carousel_name3}</div>
                    <div>{carousel_role3}</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev visually-hidden"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next visually-hidden"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupCarousel;
