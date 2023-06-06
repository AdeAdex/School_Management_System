import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const StudentEditDetails = () => {
  const globalState = useSelector((state)=>state.portalReducer.studentInfo)

  let formik = useFormik({
    initialValues: {
      address: "",
      country: "",
      lga: "",
      hubby: "",
      receivedEmail: ""
    },

    onSubmit: (values) => {
      // console.log(globalState);
      const newValues = {...values,receivedEmail:globalState.email};
      console.log(newValues);
      let endpoint = "http://localhost:2000/student_account/edit_details";
      axios.post(endpoint, newValues)
      .then((response) => {
        console.log(response);
      });
    },
  });

  return (
    <>
    <div className="edit-container">
        <div className="edit-card">
          <h3 className="edit-login">Edit Your Details</h3>
          <form onSubmit={formik.handleSubmit} action="/staff_account/edit_details" method="post">
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
  )
}

export default StudentEditDetails