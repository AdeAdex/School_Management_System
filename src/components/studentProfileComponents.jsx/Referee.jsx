import React from "react";
import EachInfo from "./EachInfo";
import { useSelector } from "react-redux";

const Referee = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo label="Full Name" value={globalState.refereeName} />
        <EachInfo label="Phone Number" value={globalState.refereePhoneNumber} />
        <EachInfo label="Email" value={globalState.refereeEmail} />
      </div>
    </>
  );
};

export default Referee;
