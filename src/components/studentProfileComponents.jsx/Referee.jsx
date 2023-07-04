import React from "react";
import EachInfo from "./EachInfo";
import { useSelector } from "react-redux";

const Referee = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo label="full name" value={globalState.refereeName} />
        <EachInfo label="phone number" value={globalState.refereePhoneNumber} />
        <EachInfo label="email" value={globalState.refereeAddress} />
      </div>
    </>
  );
};

export default Referee;
