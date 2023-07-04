import React from "react";
import { useSelector } from "react-redux";
import EachInfo from "./EachInfo";

const Contact = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo label="phone number 1" value={globalState.phoneNumber} />
        <EachInfo label="phone number 2" value={globalState.phoneNumber} />
        <EachInfo label="email" value={globalState.email} />
        <EachInfo label="address" value={globalState.address} />
      </div>
    </>
  );
};

export default Contact;
