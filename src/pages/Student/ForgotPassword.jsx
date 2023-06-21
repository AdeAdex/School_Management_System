import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../Student/ForgotPassword.css";
import EmailVerification from "../../components/StudentForgotPasswordComponents/EmailVerification";
import OTPVerification from "../../components/StudentForgotPasswordComponents/OTPVerification";
import ChangePasswordForm from "../../components/StudentForgotPasswordComponents/ChangePasswordForm";

const ForgotPassword = () => {
  let location = useLocation();
  let myOTP = location.state.myOTP;
  const [myMessage, setMyMessage] = useState("");
  const [openEmail, setOpenEmail] = useState(false)

  const [confirm, setConfirm] = useState(false);
  const [yes, setYes] = useState(true)
  const [toReset, setToReset] = useState(true);
  useEffect(() => {
    setConfirm(true);
    setYes(false)
    setToReset(false);
  });

 

  return (
    <>
    {confirm ? <EmailVerification myOTP={location.state.myOTP} /> : null}
    {confirm && yes ? <OTPVerification/> : null}
    {confirm && toReset ? <ChangePasswordForm/> : null}
    </>
  );
};

export default ForgotPassword;
