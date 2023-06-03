import React from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import PickClass from "./PickClass";
import Payment from "./Payment";

const Admission = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <>
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
