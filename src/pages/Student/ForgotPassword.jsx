import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../Student/ForgotPassword.css";

const ForgotPassword = () => {
  let location = useLocation();
  let myOTP = location.state.myOTP;
  const [myEmail, setMyEmail] = useState("");
  const [OTPInput, setOTPInput] = useState([0, 0, 0, 0]);

  let formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      const newValues = { ...values, myOTP };
      console.log(newValues);
      let endpoint = "http://localhost:2000/student_account/forgot_password";
      axios.post(endpoint, newValues).then((response) => {
        // console.log(response.data.response[0]);
        if (response.data.status) {
          console.log(response.data.message);
          console.log(response.data.response[0]);
          setMyEmail(response.data.response[0]);
          console.log(myEmail);
        } else {
          console.log(response.data.message);
        }
      });
    },
  });

  function handleSubmit(e) {
    console.log(OTPInput);
    if (Number(OTPInput.join("")) === myOTP) {
      alert("yess");
    } else {
      alert("nooo");
    }
    e.preventDefault();
  }

  return (
    <>
      <form action="" method="post" onSubmit={formik.handleSubmit}>
        <input type="email" name="email" id="" onChange={formik.handleChange} />
        <button type="submit">Submit</button>
      </form>

      <form className="otp-verification-form" onSubmit={handleSubmit}>
        <span className="otp-verification-close">X</span>

        <div className="otp-verification-info">
          <span className="otp-verification-title">OTP Verification</span>
          <p className="otp-verification-description">
            Please enter the code we just sent to. {myEmail}
          </p>
        </div>
        <div className="otp-verification-inputs">
          <input
            placeholder=""
            type="tel"
            maxLength="1"
            name="otpValue1"
            onChange={(e) =>
              setOTPInput([
                e.target.value,
                OTPInput[1],
                OTPInput[2],
                OTPInput[3],
              ])
            }
          />
          <input
            placeholder=""
            type="tel"
            maxLength="1"
            name="otpValue2"
            onChange={(e) =>
              setOTPInput([
                OTPInput[0],
                e.target.value,
                OTPInput[2],
                OTPInput[3],
              ])
            }
          />
          <input
            placeholder=""
            type="tel"
            maxLength="1"
            name="otpValue3"
            onChange={(e) =>
              setOTPInput([
                OTPInput[0],
                OTPInput[1],
                e.target.value,
                OTPInput[3],
              ])
            }
          />
          <input
            placeholder=""
            type="tel"
            maxLength="1"
            name="otpValue4"
            onChange={(e) =>
              setOTPInput([
                OTPInput[0],
                OTPInput[1],
                OTPInput[2],
                e.target.value,
              ])
            }
          />
        </div>
        <button className="otp-verification-validate" type="submit">
          Verify
        </button>
        <p className="otp-verification-resend">
          You don't receive the code ?
          <a className="otp-verification-resend-action">resend</a>
        </p>
      </form>
    </>
  );
};

export default ForgotPassword;
