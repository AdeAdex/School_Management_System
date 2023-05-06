import React from "react";
import Small_hr from "./Small_hr";

const TeachersHousesCard = ({
  img,
  teacherName,
  aboutTeacher,
  knowme_bg,
  bodyStyle,
  bodyClassName,
}) => {
  return (
    <>
      <div
        className="orange-teacher-card card mb-3 position-relative bg-info"
        style={{ width: "48%", height: "230px" }}
      >
        <div className="orange-card-main col-12 row g-0 h-100">
          <div className="orange-img col-5 h-100 ">
            <img
              src={img}
              className="img-fluid rounded-start w-100"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
                objectPosition: "70% 20%",
              }}
            />
          </div>
          <div className={bodyClassName} style={bodyStyle}>
            <div className="card-body col-10">
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
            <div className="d-flex flex-column justify-content-evenly col-2">
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

export default TeachersHousesCard;
