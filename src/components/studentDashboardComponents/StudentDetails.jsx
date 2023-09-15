import React from "react";

const StudentDetails = ({icons, param, about}) => {
  return (
    <div
      className="shadow position-relative pb-3 dashboard-home-container-student-details"
      style={{ width: "49%", backgroundColor: "", borderRadius: '5px' }}
    >
      <div className="d-flex justify-content-between px-3 py-3 my-auto">
        <small className="fs-5 my-auto">
          {icons}
        </small>
        <h4 className="pe-0 pe-lg-5 my-auto" style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{param}</h4>
      </div>
      <hr
        className=""
        style={{
          width: "95%",
          position: "absolute",
          top: "40px",
          left: "10px",
        }}
      />
      <small
        className="d-flex justify-content-end px-3"
        style={{ position: "relative", top: "" }}
      >
       {about}
      </small>
    </div>
  );
};

export default StudentDetails;
