import { useFormik } from "formik";
import React, { useRef, useState } from "react";


const OTPVerifications = ({myOTP: myOTP}) => {
  const [OTPInput, setOTPInput] = useState([0, 0, 0, 0]);

  function handleSubmit(e) {
    console.log(OTPInput);
    console.log(myOTP);
    if (Number(OTPInput.join("")) === myOTP) {
        console.log("yess");
    } else {
      console.log("nooo");
    }
    e.preventDefault();
  }

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleChangeInput1 = (e) => {
    setOTPInput([e.target.value, OTPInput[1], OTPInput[2], OTPInput[3]]);

    if (e.target.value != "") {
      input2Ref.current.focus();
    }
  };

  const handleChangeInput2 = (e) => {
    setOTPInput([OTPInput[0], e.target.value, OTPInput[2], OTPInput[3]]);

    if (e.target.value != "") {
      input3Ref.current.focus();
    }
  };

  const handleChangeInput3 = (e) => {
    setOTPInput([OTPInput[0], OTPInput[1], e.target.value, OTPInput[3]]);

    if (e.target.value != "") {
      input4Ref.current.focus();
    }
  };
  return (
    <>
      <form className="otp-verification-form" onSubmit={handleSubmit}>
        <span className="otp-verification-close">X</span>

        <div className="otp-verification-info">
          <span className="otp-verification-title">
            Two-Factor Verification
          </span>
          <p className="otp-verification-description">
            {" "}
            Please enter the code we just sent to. {/* {myEmail} */}{" "}
          </p>
        </div>
        <div className="otp-verification-input-fields">
          <input
            className="otp-verification-input"
            placeholder=""
            type="tel"
            maxLength="1"
            name="otpValue1"
            ref={input1Ref}
            onChange={handleChangeInput1}
          />
          <input
            className="otp-verification-input"
            placeholder=""
            type="tel"
            maxLength="1"
            name="otpValue2"
            ref={input2Ref}
            onChange={handleChangeInput2}
          />
          <input
            className="otp-verification-input"
            placeholder=""
            type="tel"
            maxLength="1"
            name="otpValue3"
            ref={input3Ref}
            onChange={handleChangeInput3}
          />
          <input
            className="otp-verification-input"
            placeholder=""
            type="tel"
            maxLength="1"
            name="otpValue4"
            ref={input4Ref}
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

        <div className="otp-verification-action-btns">
          <button className="otp-verification-verify" type="submit">
            Verify
          </button>
          <button className="otp-verification-clear" type="reset">
            Clear
          </button>
        </div>
        <p className="otp-verification-resend">
          You don't receive the code ?
          <a className="otp-verification-resend-action">resend</a>
        </p>
      </form>
    </>
  );
};

export default OTPVerifications;
