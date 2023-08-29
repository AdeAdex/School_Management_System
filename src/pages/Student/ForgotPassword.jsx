import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../Student/ForgotPassword.css";
import { Stepper, Button, Group } from "@mantine/core";
import EmailVerifications from "../../components/StudentForgotPasswordComponent/EmailVerifications";
import OTPVerifications from "../../components/StudentForgotPasswordComponent/OTPVerifications";
import { useSelector } from "react-redux";
import { SnackbarProvider, useSnackbar } from 'notistack';
import ChangePasswordForms from "../../components/StudentForgotPasswordComponent/ChangePasswordForms";



const ForgotPassword = () => {
  return (
    <SnackbarProvider maxSnack={1} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} >
      <MyApp/>
    </SnackbarProvider>
  )
  
};

function MyApp() {
  let location = useLocation();
  // let sentOTP = location.state.myOTP;
  let sentEmail = location.state.email

  const myEmailResponse = useSelector(
    (state) => state.portalReducer.emailVerify
  );
  const myOTPResponse = useSelector(
    (state) => state.portalReducer.OTPVerify
  );
  const sentOTP = useSelector(
    (state) => state.portalReducer.otp
    );



  const {enqueueSnackbar} = useSnackbar();
  const [active, setActive] = useState(0);
  const nextStep = (variant) => {
    // console.log(myEmailResponse);
    if (myEmailResponse) {
      setActive((current) => (current < 3 ? current + 1 : current));
    } else {

      enqueueSnackbar("Enter your email address and submit before continue", { variant: 'error' });
    }
  };
  const prevStep = () =>setActive((current) => (current > 0 ? current - 1 : current));

  const nextStep2 = (variant) => {
    // console.log(myOTPResponse);
    if (myOTPResponse) {
      setActive((current) => (current < 3 ? current + 1 : current));
    } else {
      enqueueSnackbar("Enter the correct OTP sent to your email address and then verify before continue", { variant: 'error' });
    }
  }

  return (
    <>
      <Stepper active={active} onStepClick={active} breakpoint="sm" className="p-4">
        <Stepper.Step label="First step" description="Email Verification">
          <EmailVerifications myOTP={sentOTP} sentEmail={sentEmail}/>
          <Group position="center" mt="xl">
            <Button onClick={nextStep} style={{position: 'relative', top: '-75px', left: '120px'}}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="OTP Verification">
          <OTPVerifications myOTP={sentOTP} sentEmail={sentEmail} startCountdown={true} />
          <Group position="center" mt="xl" style={{position: 'relative', top: '-75px', left: ''}}>
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep2} >Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Change Password">
          <ChangePasswordForms myEmail={myEmailResponse}/>
          <Button variant="default" onClick={prevStep} className="step3-back-btn" style={{position: 'relative', top: '-62px', left: '39%'}}>
              Back
            </Button>
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
      
    </>
  );
}


export default ForgotPassword;
