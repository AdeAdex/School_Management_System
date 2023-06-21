import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";


const OTPVerification = ({ isOpen, onClose}) => {
  const [OTPInput, setOTPInput] = useState([0, 0, 0, 0]);
  const [myEmail, setMyEmail] = useState("");


  function handleSubmit(e) {
    console.log(OTPInput);
    if (Number(OTPInput.join("")) === myOTP) {
    } else {
    }
    e.preventDefault();
  }
  return (
    <>
    <Modal show={isOpen} onHide={onClose} >
    <Modal.Body className="text-uppercase">
    <form className="otp-verification-form" onSubmit={handleSubmit}>
        <span className="otp-verification-close">X</span>

        <div className="otp-verification-info">
          <span className="otp-verification-title">OTP Verification</span>
          <p className="otp-verification-description">
            Please enter the code we just sent to. {/* {myEmail} */}
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
    </Modal.Body>
    </Modal>
     
    </>
  );
};

export default OTPVerification;
