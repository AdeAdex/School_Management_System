import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
      axios
      .post(endpoint, newValues)
      .then((response) => {
        // console.log(response.data.response[0]);
        console.log(response.data.message);
      });
    },
  });
  return (
    <>
      <form action="" method="post" onSubmit={formik.handleSubmit}>
        <input type="email" name="email" id="" onChange={formik.handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ForgotPassword;
