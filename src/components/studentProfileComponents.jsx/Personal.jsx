import React from "react";
import { useSelector } from "react-redux";

const Personal = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div className="w-100 d-flex gap-4">
        <div className="w-50" style={{borderBottom: '1px solid red'}}>{globalState.firstName}</div>
        <div className="w-50" style={{borderBottom: '1px solid red'}}>{globalState.lastName}</div>
      </div>
    </>
  );
};

export default Personal;
