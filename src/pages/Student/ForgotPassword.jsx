import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import '../Student/ForgotPassword.css'

const ForgotPassword = () => {
  let location = useLocation();

  let formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      let myOTP = location.state.myOTP;
      const newValues = { ...values, myOTP };
      console.log(newValues);
      let endpoint = "http://localhost:2000/student_account/forgot_password";
      axios.post(endpoint, newValues).then((response) => {
        // console.log(response.data.response[0]);
        if (response.data.status) {
          console.log(response.data.message);
        } else {
          console.log(response.data.message);
        }
      });
    },
  });
  return (
    <>
      <form action="" method="post" onSubmit={formik.handleSubmit}>
        <input type="email" name="email" id="" onChange={formik.handleChange} />
        <button type="submit">Submit</button>
      </form>

      <form className="otp-verification-form">
        <span className="otp-verification-close">X</span>

        <div className="otp-verification-info">
          <span className="otp-verification-title">OTP Verification</span>
          <p className="otp-verification-description">Please enter the code we have sent you. </p>
        </div>
        <div className="otp-verification-inputs">
          <input placeholder="" type="tel" maxLength="1" />
          <input placeholder="" type="tel" maxLength="1" />
          <input placeholder="" type="tel" maxLength="1" />
          <input placeholder="" type="tel" maxLength="1" />
        </div>
        <a className="otp-verification-validate" href="#">
          Verify
        </a>
        <p className="otp-verification-resend">
          You don't receive the code ?<a className="otp-verification-resend-action">resend</a>
        </p>
      </form>
    </>
  );
};

export default ForgotPassword;
