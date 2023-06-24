import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../Student/ForgotPassword.css";
import { Stepper, Button, Group } from "@mantine/core";
import EmailVerifications from "../../components/StudentForgotPasswordComponent/EmailVerifications";
import OTPVerifications from "../../components/StudentForgotPasswordComponent/OTPVerifications";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
  let location = useLocation();
  let sentOTP = location.state.myOTP;
  const myEmailResponse = useSelector(
    (state) => state.portalReducer.emailVerify
  );

  const [active, setActive] = useState(0);
  const nextStep = () => {
    if (myEmailResponse) {
      console.log("yess");
      document.getElementsByClassName("pop-btn-1").style.visibility = "visible";
      setActive((current) => (current < 3 ? current + 1 : current));
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "warning",
        title: "You haven't  done anything",
      });
    }
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Create an account">
          <EmailVerifications myOTP={sentOTP} />
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <OTPVerifications myOTP={sentOTP} />
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
    </>
  );
};

export default ForgotPassword;
