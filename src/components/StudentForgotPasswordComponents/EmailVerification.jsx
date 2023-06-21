import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import OTPVerification from "./OTPVerification";



const EmailVerification = ({ isOpen, onClose, myOTP }) => {
  const [myEmail, setMyEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);



  let formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      const newValues = { ...values, myOTP: myOTP };
      console.log(newValues);
      let endpoint = "http://localhost:2000/student_account/forgot_password";
      axios.post(endpoint, newValues)
      .then((response) => {
        if (response.data.status) {
          console.log(response.data.message);
          console.log(response.data.response[0]);
          setMyEmail(response.data.response[0]);
          console.log(myEmail);
          if (response.data.status) {
                setModalOpen(true);
          }
        } else {
          console.log(response.data.message);
        }
      });
    },
  });
  return (
    <>
    <Modal show={isOpen} onHide={onClose} >
    <Modal.Body className="text-uppercase">
    <form action="" method="post" onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          id=""
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </Modal.Body>
    </Modal>
      <OTPVerification isOpen={modalOpen}/>
    </>
  );
};

export default EmailVerification;
