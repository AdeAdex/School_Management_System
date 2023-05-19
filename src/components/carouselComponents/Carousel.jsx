import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel" style={{marginTop
        : '50px'}}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            style={{ backgroundColor: "#cddc39" }}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            style={{ backgroundColor: "#cddc39" }}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            style={{ backgroundColor: "#cddc39" }}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: "600px" }}>
          <div className="carousel-item active h-100" data-bs-interval="10000">
            <img
              src="pic/caro11.png"
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item h-100" data-bs-interval="10000">
            <img
              src="pic/caro4.png"
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src="pic/caro3.jpg"
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
