import React, { useEffect } from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import PickClass from "./PickClass";
import Payment from "./Payment";
import { useSelector } from "react-redux";


const Admission = () => {
  const globalState = useSelector((state)=>state.portalReducer.staffInfo)
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  // useEffect(() => {
  //   dispatch(newName(response.data.response));
   
  // }, [])
  
  return (
    <>
      <div className="font-bold ml-4 my-auto text-lg text-danger">{globalState.firstName} {globalState.lastName}</div>
      <div
        className="d-flex gap-4"
        style={{ width: "100%", overflowX: "auto" }}
      >
        <NavLink style={navLinkStyles} to="pick_class" className="">Pick Class</NavLink>
        <NavLink style={navLinkStyles} to="payment">Payment</NavLink>
      </div>
      <hr />
      <div>
        <Routes>
          <Route path="pick_class" element={<PickClass />} />
          <Route path="payment" element={<Payment/>} />
        </Routes>
      </div>
    </>
  );
};

export default Admission;
