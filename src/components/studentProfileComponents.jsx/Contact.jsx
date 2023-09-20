import React from "react";
import { useSelector } from "react-redux";
import EachInfo from "./EachInfo";

const Contact = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo label="Phone Number 1" value={globalState.phoneNumber} />
        <EachInfo label="Phone Number 2" value={globalState.phoneNumber} />
        <EachInfo label="Email" value={globalState.email} />
        <EachInfo label="Address" value={globalState.address} />
      </div>
    </>
  );
};

export default Contact;
