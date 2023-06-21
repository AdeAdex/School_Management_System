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
  const [modalOpen, setModalOpen] = useState(true);
 

//   const openModal = () => {
//         setModalOpen(true);
    
//       };
    
      const closeModal = () => {
        setModalOpen(false);
      };

 

  return (
    <>
    <EmailVerification myOTP={location.state.myOTP} isOpen={modalOpen} onClose={closeModal}  />
    </>
  );
};

export default ForgotPassword;
