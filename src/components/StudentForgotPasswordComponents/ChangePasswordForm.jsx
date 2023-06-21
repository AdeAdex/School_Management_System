import axios from "axios";
import { useFormik } from "formik";
import React from "react";

const ChangePasswordForm = () => {
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
      <div>{myMessage}</div>
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
    </>
  );
};

export default ChangePasswordForm;
