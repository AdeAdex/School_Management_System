import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../Student/ForgotPassword.css";
import EmailVerification from "../../components/StudentForgotPasswordComponents/EmailVerification";
import OTPVerification from "../../components/StudentForgotPasswordComponents/OTPVerification";

const ForgotPassword = () => {
  let location = useLocation();
  let myOTP = location.state.myOTP;
  const [myEmail, setMyEmail] = useState("");
  const [OTPInput, setOTPInput] = useState([0, 0, 0, 0]);
  const [myMessage, setMyMessage] = useState("");
  const [openEmail, setOpenEmail] = useState(false)

  const [confirm, setConfirm] = useState(false);
  const [yes, setYes] = useState(true)
  useEffect(() => {
    setConfirm(true);
    setYes(false)
  });

 

  const changePass = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      let newValues = { ...values, myEmail };
      console.log(newValues);
      let endpoint = "http://localhost:2000/student_account/change_password";
      axios
      .post(endpoint, newValues)
      .then((response) => {
        setMyMessage(response.data.message);
      });
    },
  });

  return (
    <>
    {confirm ? <EmailVerification /> : null}
    {confirm && yes ? <OTPVerification/> : null}
      

        <div>{myMessage}</div>
      <form action="" method="post" onSubmit={changePass.handleSubmit}>
        <input
          type="text"
          name="password"
          id=""
          onChange={changePass.handleChange}
        />
        <input
          type="text"
          name="confirmPassword"
          id=""
          onChange={changePass.handleChange}
        />
        <button type="submit">Change Password</button>
      </form>
    </>
  );
};

export default ForgotPassword;
