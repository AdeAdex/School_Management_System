import React from "react";
import { useSelector } from "react-redux";
import EachInfo from "./EachInfo";

const Personal = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo label="Surname" value={globalState.lastName}/>
        <EachInfo label="First Name" value={globalState.firstName}/>
        <EachInfo label="middle name" value={globalState.lastName}/>
        <EachInfo label="age" value={globalState.age}/>
        <EachInfo label="nationality" value={globalState.country}/>
        <EachInfo label="state of origin" value={globalState.state}/>
        <EachInfo label="gender" value={globalState.gender}/>
        <EachInfo label="title" value={globalState.myTitle}/>
      </div>
    </>
  );
};

export default Personal;
