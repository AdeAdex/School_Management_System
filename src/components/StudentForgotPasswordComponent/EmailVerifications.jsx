import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myEmailVerify } from "../../redux/portalSlice";
import { useDispatch } from "react-redux";


const EmailVerifications = ({ myOTP: myOTP }) => {
  const dispatch = useDispatch();
  const [myEmail, setMyEmail] = useState("");


  let formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      const newValues = { ...values, myOTP: myOTP };
      console.log(newValues);
      let endpoint = "http://localhost:2000/student_account/forgot_password";
      axios.post(endpoint, newValues).then((response) => {
        if (response.data.status) {
          console.log(response.data.message);
          console.log(response.data.response[0]);
          setMyEmail(response.data.response[0]);
          console.log(myEmail);
          if (response.data.status) {
            dispatch(myEmailVerify(true));
          }
        } else {
          console.log(response.data.message);
          const Toast = Swal.mixin({
                toast: true,
                position: "bottom",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });
              
        
              Toast.fire({
                icon: "warning",
                title: response.data.message,
                
              });
        }
      });
    },
  });

  return (
    <>
      <form
        action=""
        className="email-verification-from mx-auto d-flex border"
        method="post"
        onSubmit={formik.handleSubmit}
      >
        <div className="pt-5">
          <h3 className="text-center">Forgot Password?</h3>
          <hr />
        </div>
        <div className="d-flex flex-column pt-2 px-5">
          <small className="pb-4 text-center">
            To reset your password, kindly enter your email address below and you will receive an email
          </small>
          <div className="col-lg-12 position-relative  flex-column mb-3">
            <input
              type="email"
              autoComplete="on"
              className={
                formik.touched.email && formik.errors.email
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              name="email"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Email Address
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid Email address.
            </div>
          </div>
          <button type="submit" className="btn btn-success btn-sm my-4">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailVerifications;
