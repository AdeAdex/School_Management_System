import React from "react";
import "../Student/Login.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      // console.log(values);
      const endpoint = "http://localhost:2000/student_account/student_login";
      axios.post(endpoint, values)
      .then((response) => {
        // console.log(response.data.result);
        if (response.data.result) {
          localStorage.studentLoginToken = response.data.studentLoginToken;
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          navigate("/student/admission/pick_class");
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "Incorrect email or password",
          });
        }
      });
    },
  });
  return (
    <>
      <div className="container">
        <div className="hero">
          <form action="" className="form" onSubmit={formik.handleSubmit}>
            <div className="logo">Adex</div>
            <input
              type="email"
              name="email"
              id="email"
              required=""
              className="login-input"
              placeholder="Phone, email address or username"
              onChange={formik.handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              required=""
              className="login-input"
              placeholder="Password"
              onChange={formik.handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary btn-sm text-white px-4 py-2"
            >
              Login
            </button>
            <p className="forgotten">
              Forgotten your login details ?{" "}
              <a href="#">Get help with signing in.</a>
            </p>
            <div className="or">or</div>
            <div className="input btn">Login with facebook </div>
            <p className="signup">
              Don't have an account ? <a href="#">SignUp</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
