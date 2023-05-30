import React, { useEffect, useState } from "react";
import "../pages/StaffEditDetails.css";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { newName } from "../redux/portalSlice";

const StaffEditDetails = () => {
//   const globalState = useSelector((state)=>state.portalReducer.staffInfo)

//   useEffect(() => {
//         // console.log(globalState.firstName);
// //     let endpoint = "http://localhost:2000/staff_account/edit_details";
// //     axios.get(endpoint )
// //     .then((response) => {
// // //       dispatch(newName(response.data.response));
// // //       console.log(response.data.response);
// //     });
//   }, );

  let formik = useFormik({
    initialValues: {
      address: "",
      country: "",
      lga: "",
      hubby: "",
      email: "",
    },

    onSubmit: (values) => {
      console.log(values);
      let endpoint = "http://localhost:2000/staff_account/edit_details";
      axios.post(endpoint, values).then((response) => {
        console.log(response);
      });
    },
  });
  return (
    <>
      <div className="edit-container">
        <div className="edit-card">
          <h3 className="edit-login">Edit Your Details</h3>
          <form onSubmit={formik.handleSubmit} method="post">
            <div className="edit-inputBox">
              <input
                type="text"
                name="address"
                required="required"
                onChange={formik.handleChange}
              />
              <span className="edit-user">Address</span>
            </div>

            <div className="edit-inputBox">
              <input
                type="text"
                name="country"
                required="required"
                onChange={formik.handleChange}
              />
              <span className="edit-user">Country</span>
            </div>

            <div className="edit-inputBox">
              <input
                type="text"
                name="lga"
                required="required"
                onChange={formik.handleChange}
              />
              <span className="edit-user">LGA</span>
            </div>

            <div className="edit-inputBox">
              <input
                type="text"
                name="hubby"
                required="required"
                onChange={formik.handleChange}
              />
              <span>Hubby</span>
            </div>

            <button type="submit" className="edit-enter">
              Enter
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StaffEditDetails;
