import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../Student/ForgotPassword.css";
import { Stepper, Button, Group } from "@mantine/core";
import EmailVerifications from "../../components/StudentForgotPasswordComponent/EmailVerifications";
import OTPVerifications from "../../components/StudentForgotPasswordComponent/OTPVerifications";
import { useSelector } from "react-redux";
// import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import { SnackbarProvider, useSnackbar } from 'notistack';



const ForgotPassword = () => {
  return (
    <SnackbarProvider maxSnack={3} className="bg-danger">
      <MyApp/>
    </SnackbarProvider>
  )
  
};

function MyApp() {
  let location = useLocation();
  let sentOTP = location.state.myOTP;
  const myEmailResponse = useSelector(
    (state) => state.portalReducer.emailVerify
  );
  const {enqueueSnackbar} = useSnackbar();



  const [active, setActive] = useState(0);
  const nextStep = (variant) => {
    if (myEmailResponse) {
      console.log("yess");
      setActive((current) => (current < 3 ? current + 1 : current));
    } else {
      enqueueSnackbar("Enter and submit your email address before continue", { variant });
    }
  };
  const prevStep = () =>setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm" className="p-4">
        <Stepper.Step label="First step" description="Email Verification">
          <EmailVerifications myOTP={sentOTP}/>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="OTP Verification">
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
}


export default ForgotPassword;
