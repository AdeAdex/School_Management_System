import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const ChangePasswordForms = () => {
  const [myMessage, setMyMessage] = useState("");

  const changePass = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      let newValues = { ...values, myEmail };
      console.log(newValues);
      // let endpoint = "http://localhost:2000/student_account/change_password";
      // axios.post(endpoint, newValues).then((response) => {
      //   setMyMessage(response.data.message);
      // });
    },

    validationSchema: yup.object({
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
  });

  return (
    <>
      <form
        action=""
        // className="changepass-form"
        className="email-verification-from mx-auto d-flex border shadow"
        method="post"
        onSubmit={changePass.handleSubmit}
      >
        <div className="pt-4">
          <img
            src="pic/ade.png"
            alt=""
            style={{ width: "50px" }}
            className="mx-auto d-flex mb-4"
          />
          <h3 className="text-center">Reset Password?</h3>
          <hr />
        </div>
        <div className="d-flex flex-column pt-2 px-5">
          <div className="col-lg-12 position-relative d-flex gap- flex-column mb-3 mt-3">
            <input
              type="password"
              name="password"
              className={
                changePass.touched.password && changePass.errors.password
                  ? "input form-control is-invalid"
                  : "input form-control is-valid"
              }
              onChange={changePass.handleChange}
              onBlur={changePass.handleBlur}
            />
            {changePass.touched.password && changePass.errors.password ? (
              <small className="error text-danger">
                {changePass.errors.password}
              </small>
            ) : null}
          </div>
          <div className="col-lg-12 position-relative d-flex gap- flex-column mb-3 mt-3">
            <input
              type="password"
              name="confirmPassword"
              className={
                changePass.touched.confirmPassword &&
                changePass.errors.confirmPassword
                  ? "input form-control is-invalid"
                  : "input form-control is-valid"
              }
              onChange={changePass.handleChange}
              onBlur={changePass.handleBlur}
            />
            {changePass.touched.confirmPassword &&
            changePass.errors.confirmPassword ? (
              <small className="error text-danger">
                {changePass.errors.confirmPassword}
              </small>
            ) : null}
          </div>
        <button type="submit" className="btn btn-primary my-4" disabled={!changePass.isValid || !changePass.dirty}>Change Password</button>
        </div>

      </form>
    </>
  );
};

export default ChangePasswordForms;
