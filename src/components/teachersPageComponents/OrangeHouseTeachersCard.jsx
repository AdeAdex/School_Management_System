import React from "react";
import Small_hr from "../generalComponents/Small_hr";

const OrangeHouseTeachersCard = ({
  img,
  teacherName,
  aboutTeacher,
  bodyStyle,
  bodyClassName,
  to_where,
  onClick,
  isSmallScreen,
}) => {

  return (
    <>
      <div className="card orange-card-main  mb-2" style={{ width: "48.3%" }}>
        <div className="orange-container row g-0">
          <div className="col-lg-5 col-md-12">
            <img
              src={img}
              className="img-fluid rounded-start w-100"
              alt="..."
              style={{
                height: "230px",
                objectFit: "cover",
                objectPosition: "100% 10%",
              }}
            />
          </div>
          <div className={bodyClassName} style={bodyStyle}>
            <div className="orange-body card-body col-lg-10 col-sm-12">
              <span
                onClick={onClick}
                className="card-title text-uppercase mb-4"
                style={{
                  backgroundColor: "inherit",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <h5>{teacherName}</h5>
              </span>
              <Small_hr
                hr_class="my-3"
                hr_style={{
                  height: "3px",
                  backgroundColor: "white",
                  width: "35px",
                }}
              />
              <div
                className="card-text mt-3 position-relative"
                style={{
                  maxHeight: "5.8em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  backgroundColor: "",
                }}
              >
                {isSmallScreen ? (
                  <span>{aboutTeacher.slice(0, 85) + " ..."}</span>
                ) : (
                  <span>{aboutTeacher.slice(0, 124) + " ..."}</span>
                )}
              </div>
              <button
                onClick={onClick}
                className="btn card-text mt-2 text-white d-flex gap-2 shadow py-2 px-2 border-0"
                style={{ cursor: "pointer", backgroundColor: "inherit" }}
              >
                <i className="fas fa-graduation-cap fs-5 my-auto"></i>
                <h5 className="text-capitalize my-auto">know me</h5>{" "}
                <span>:)</span>
              </button>
            </div>
            <div className="orange-footer d-flex flex-column justify-content-evenly col-lg-2 col-sm-12">
              <i
                className="fas fa-paperclip shadow about-icon-mains"
                title="CURRICULUM"
              ></i>
              <i
                className="far fa-floppy-disk shadow about-icon-mains"
                title="DOCUMENT"
              ></i>
              <i
                className="fas fa-microphone shadow about-icon-mains"
                title="COURSES"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrangeHouseTeachersCard;
