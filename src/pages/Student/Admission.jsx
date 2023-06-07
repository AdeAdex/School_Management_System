import React, { useEffect } from "react";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import PickClass from "./PickClass";
import Payment from "./Payment";
import { useDispatch, useSelector } from "react-redux";
import PersonalInformation from "./PersonalInformation";
import Education from "./Education";
import Referees from "./Referees";
import axios from "axios";
import { newStudent } from "../../redux/portalSlice";

const Admission = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  useEffect(() => {
    let studentLoginToken = localStorage.studentLoginToken;
    let endpoint = "http://localhost:2000/student_account/student__admission_dashboard";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${studentLoginToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res.data.status) {
          dispatch(newStudent(res.data.response));
        }
      });
  }, []);

  const pay = true;
  return (
    <>
      {/* <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        {condition ? (
          <NavLink exact to="/special" activeClassName="active">
            Special
          </NavLink>
        ) : (
          <NavLink exact to="/regular" activeClassName="active">
            Regular
          </NavLink>
        )}
      </nav> */}
      <div>
        <div className="font-bold ml-4 my-auto text-lg fw-bold fs-4 shadow p-2 mb-3">
          {globalState.firstName} {globalState.lastName}
        </div>
        <div style={{ padding: "20px 100px 0px", width: "100%" }}>
          <div
            className="d-flex gap-4"
            style={{ width: "100%", overflowX: "auto" }}
          >
            <NavLink style={navLinkStyles} to="pick_class" className="">
              Pick Class
            </NavLink>
            {/* {pay ? (
              <NavLink exact to="/student/admission" style={navLinkStyles}>
                Yhea
              </NavLink>
            ) : (
              <NavLink
                exact
                to="/student/admission/pick_class"
                style={navLinkStyles}
              >
                Pick Class
              </NavLink>
            )} */}
            <NavLink style={navLinkStyles} to="payment">
              Payment
            </NavLink>
            <NavLink style={navLinkStyles} to="personal_information">
              Personal Information
            </NavLink>
            <NavLink style={navLinkStyles} to="education">
              Education
            </NavLink>
            <NavLink style={navLinkStyles} to="referees">
              Referees
            </NavLink>
          </div>
          <hr />
          <div>
            <Routes>
              <Route path="pick_class" element={<PickClass />} />
              <Route path="payment" element={<Payment />} />
              <Route
                path="personal_information"
                element={<PersonalInformation />}
              />
              <Route path="education" element={<Education />} />
              <Route path="referees" element={<Referees />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
