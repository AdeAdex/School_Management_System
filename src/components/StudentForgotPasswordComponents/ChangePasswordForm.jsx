import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";


const ChangePasswordForm = ({ isOpen, onClose, myOTP }) => {
  const [myMessage, setMyMessage] = useState("");

  const changePass = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      let newValues = { ...values, myEmail };
      console.log(newValues);
      let endpoint = "http://localhost:2000/student_account/change_password";
      axios.post(endpoint, newValues)
      .then((response) => {
        setMyMessage(response.data.message);
      });
    },
  });
  return (
    <>
    <Modal show={isOpen} onHide={onClose} >
    <Modal.Header className="bg-white text-dark">
          <Modal.Title className="text-uppercase text-center mx-auto">
            {myMessage}
          </Modal.Title>
        </Modal.Header>
    <Modal.Body className="text-uppercase">
    <form action="" method="post" onSubmit={changePass.handleSubmit}>
        <input
          type="text"
          name="password"
          id=""
          onChange={changePass.handleChange}
        />
        <input
          type="text"
          name="confirmPassword"
          id=""
          onChange={changePass.handleChange}
        />
        <button type="submit">Change Password</button>
      </form>
    </Modal.Body>
    </Modal>
    </>
  );
};

export default ChangePasswordForm;
