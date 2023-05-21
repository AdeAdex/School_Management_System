import React from "react";

const SignupCarousel = () => {
  return (
    <>
     <div
          className="flex-column py-4 px-3 text-white"
          style={{
            backgroundColor: "#2520e3",
            borderRadius: "20px",
            marginTop: "200px",
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
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="8000">
              <div>
                This is a very nice school for any child who want the best
                education. I really recommend them 💯
              </div>
              <div className="d-flex gap-3 mt-4">
                <img
                  src="pic/avatar.png"
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                  className="d-block"
                />
                <div className="flex-column">
                  <div>Grace George</div>
                  <div>Fashionist</div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="8000">
              <div>
                The service render at Adex School is simply unbelievable. I'm
                really satisfied with the way my daughter is improving in her
                study
              </div>
              <div className="d-flex gap-3 mt-3">
                <img
                  src="pic/2.png"
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                  className="d-block"
                />
                <div className="flex-column">
                  <div>Timson K</div>
                  <div>Freelancer</div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="8000">
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolore, minima quia eligendi repellat eius in molestias
                distinctio, expedita labore amet
              </div>
              <div className="d-flex gap-3 mt-3">
                <img
                  src="pic/1.jpg"
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                  className="d-block"
                />
                <div className="flex-column">
                  <div>Adeolu Adex</div>
                  <div>Developer</div>
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
