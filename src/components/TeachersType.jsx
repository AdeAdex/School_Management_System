import React from "react";

const TeachersType = ({
  container_style,
  userFeedbackName,
  feedbackUsername,
  feedbackContent,
  icon
}) => {
  return (
    <>
      <div
        className="each-teachers-type container-fluid py-3 d-flex gap-4"
        style={container_style}
      >
        <i
          className={icon}
          style={{
            color: "white",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            padding: "10px 15px",
            fontSize: "8px",
          }}
        ></i>
        <div className="mt-2" style={{ fontSize: "18px" }}>
          <div className="mb-2">
            {userFeedbackName}{" "}
            <span style={{ color: "#1DA1F2" }}>{feedbackUsername}</span>
          </div>
          <div style={{fontSize: '14px'}}>{feedbackContent}</div>
        </div>
      </div>
    </>
  );
};

export default TeachersType;
