import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../Student/ForgotPassword.css";

const ForgotPassword = () => {
  let location = useLocation();
  let myOTP = location.state.myOTP;
  const [myEmail, setMyEmail] = useState("")
  const [typedNo, setTypedNo] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
  })

  let formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      const newValues = { ...values, myOTP };
      console.log(newValues);
      let endpoint = "http://localhost:2000/student_account/forgot_password";
      axios
      .post(endpoint, newValues)
      .then((response) => {
        // console.log(response.data.response[0]);
        if (response.data.status) {
          console.log(response.data.message);
          console.log(response.data.response[0]);
          setMyEmail(response.data.response[0])
          console.log(myEmail);
        } else {
          console.log(response.data.message);
        }
      });
    },
  });

  let otp = useFormik({
    initialValues: {
        otpValue1: "",
        otpValue2: "",
        otpValue3: "",
        otpValue4: "",
    },

    
    onSubmit: (values) => {
            setTypedNo({
               one: [values.otpValue1], two: [values.otpValue2], three: [values.otpValue3], four: [values.otpValue4],
            })
        console.log(values);
        console.log(typedNo)
        // if (typedNo == myOTP) {
        //         alert('yess')
        // } else {
        //         alert('nooo')
        // }
//       let endpoint = "http://localhost:2000/student_account/otp";
//       axios
//       .get(endpoint, {
//         headers: {
//           Authorization: `${values}`,
//         },
//       })
//       .then((response) => {

//       })
    },
  });
  return (
    <>
      <form action="" method="post" onSubmit={formik.handleSubmit}>
        <input type="email" name="email" id="" onChange={formik.handleChange} />
        <button type="submit">Submit</button>
      </form>
 

      <form className="otp-verification-form" action="" method="get" onSubmit={otp.handleSubmit}>
        <span className="otp-verification-close">X</span>

        <div className="otp-verification-info">
          <span className="otp-verification-title">OTP Verification</span>
          <p className="otp-verification-description">
            Please enter the code we just sent to. {myEmail}
          </p>
        </div>
        <div className="otp-verification-inputs">
          <input placeholder="" type="tel" maxLength="1" name="otpValue1" onChange={otp.handleChange} />
          <input placeholder="" type="tel" maxLength="1" name="otpValue2" onChange={otp.handleChange} />
          <input placeholder="" type="tel" maxLength="1" name="otpValue3" onChange={otp.handleChange} />
          <input placeholder="" type="tel" maxLength="1" name="otpValue4" onChange={otp.handleChange} />
        </div>
        <button className="otp-verification-validate" type="submit">Verify</button>
        <p className="otp-verification-resend">
          You don't receive the code ?
          <a className="otp-verification-resend-action">resend</a>
        </p>
      </form>
    </>
  );
};

export default ForgotPassword;
