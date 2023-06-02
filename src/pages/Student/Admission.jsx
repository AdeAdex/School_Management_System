import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <>
      <div
        className="d-flex gap-4"
        style={{ width: "100%", overflowX: "auto" }}
      >
        <Link to="pick_class">Pick Class</Link>
        <Link to="payment">Payment</Link>
        <Link to="personal_information">Personal Information</Link>
        <Link to="education">Education</Link>
        <Link to="referees">Referees</Link>
        <Link to="credential_uploads">Credential Uploads</Link>
      </div>
      <hr />
    </>
  );
};

export default Admission;
