import React from "react";
import Small_hr from "./Small_hr";

const OrangeHouseTeachersCard = ({
  img,
  teacherName,
  aboutTeacher,
  bodyStyle,
  bodyClassName,
}) => {
  return (
    <>
      <div className="ornage-card-main card mb-2 col-6" style={{ width: "48.95%" }}>
        <div className="row g-0">
          <div className="col-md-5">
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
            <h5
                className="card-title text-uppercase mb-4"
                style={{ backgroundColor: "inherit" }}
              >
                {teacherName}
              </h5>
              <Small_hr></Small_hr>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et rerum distinctio cumque quas.
              </p>
              <button
                className="btn card-text  text-white d-flex gap-2 shadow py-2 px-2 border-0"
                style={{ cursor: "pointer", backgroundColor: "inherit" }}
              >
                <i className="fas fa-graduation-cap fs-5 my-auto"></i>
                <h5 className="text-capitalize my-auto">know me</h5>{" "}
                <span>:)</span>
              </button>
            </div>
            <div className="orange-footer d-flex flex-column justify-content-evenly col-lg-2 col-sm-12">
              <i class="fas fa-paperclip shadow about-icon-mains" title="CURRICULUM"><span>adeoluwa</span></i>
              <i class="far fa-floppy-disk shadow about-icon-mains" title="DOCUMENT"></i>
              <i class="fas fa-microphone shadow about-icon-mains" title="COURSES"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrangeHouseTeachersCard;