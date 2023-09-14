import React from "react";

const BlueHouseTeachersCard = ({
  cardstyle,
  img,
  h5Classes,
  h5Style,
  content,
  btnstyle,
  teacherName,
  iconStyle,
  onClick,
  bodyClassName,
  bodyStyle,
  styles,
}) => {
  return (
    <>
      <div className="card text-white pb-3" style={cardstyle}>
        <h5
          onClick={onClick}
          className="card-title py-3 text-center text-uppercase px-3"
          style={{
            backgroundColor: "#495052",
            marginBottom: "0px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            cursor: "pointer",
          }}
        >
          {teacherName}
        </h5>
        <img
          src={img}
          className="card-img-to"
          alt="..."
          style={{ opacity: "1", filter: "blur", height: "250px" }}
        />
        <h5 className={bodyClassName} style={bodyStyle}>
          <button
            onClick={onClick}
            className="btn card-text text-white d-flex gap-2 shadow py-2 px-2 border-0"
            style={{ cursor: "pointer", backgroundColor: "inherit" }}
          >
            <i className="fas fa-graduation-cap fs-5 my-auto"></i>
            <h5 className="text-capitalize my-auto">know me</h5> <span>:)</span>
          </button>
        </h5>
        <div className="card-body" style={styles}>
          <div className="card-text text-color">
            <div
              className="card-text mt-1 position-relative px-3"
              style={{
                maxHeight: "5.8em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                backgroundColor: "",
              }}
            >
              {content}
            </div>
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <i
              className={`${iconStyle} fas fa-paperclip shadow about-icon-mains`}
              title="CURRICULUM"
            ></i>
            <i
              className={`${iconStyle} far fa-floppy-disk shadow about-icon-mains`}
              title="DOCUMENT"
            ></i>
            <i
              className={`${iconStyle} fas fa-microphone shadow about-icon-mains`}
              title="COURSES"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueHouseTeachersCard;
