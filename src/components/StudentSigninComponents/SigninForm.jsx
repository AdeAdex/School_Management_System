import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
      const endpoint = "http://localhost:2000/student_account/student_signin";
      axios.post(endpoint, values)
      .then((res) => {
        if (res.data.status) {
          localStorage.studentSignInToken = res.data.studentSignInToken;
          // console.log(res.data.status);
          navigate("/student_dashboard");
        } else {
          navigate("/student_signin");
        }
      });
    },
  });
  return (
    <>
      <div className="signin-form shadow bg-light">
        <h1 className="fs-bolder">
          welcome <br />
          back!
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          action=""
          method="post"
        >
          <div className="form-control signin-form-control">
            <input
              type="text"
              required="required"
              name="email"
              onChange={formik.handleChange}
              placeholder="Student ID"
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>S</span>
              <span style={{ transitionDelay: "50ms" }}>t</span>
              <span style={{ transitionDelay: "100ms" }}>u</span>
              <span style={{ transitionDelay: "150ms" }}>d</span>
              <span style={{ transitionDelay: "200ms" }}>e</span>
              <span style={{ transitionDelay: "250ms" }}>n</span>
              <span style={{ transitionDelay: "300ms" }}>t</span>
              <span></span>
              <span style={{ transitionDelay: "350ms" }}>I</span>
              <span style={{ transitionDelay: "400ms" }}>D</span>
            </label>
          </div>
          <div className="form-control signin-form-control">
            <input
              type="password"
              required="required"
              name="password"
              onChange={formik.handleChange}
              placeholder="Password"
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>P</span>
              <span style={{ transitionDelay: "50ms" }}>a</span>
              <span style={{ transitionDelay: "100ms" }}>s</span>
              <span style={{ transitionDelay: "150ms" }}>s</span>
              <span style={{ transitionDelay: "200ms" }}>w</span>
              <span style={{ transitionDelay: "250ms" }}>o</span>
              <span style={{ transitionDelay: "300ms" }}>r</span>
              <span style={{ transitionDelay: "350ms" }}>d</span>
            </label>
          </div>

          <div className="d-flex justify-content-between my-5">
            <span>
              <input type="checkbox" id="checkBox" /> Remember Me
            </span>
            <a href="" id="forgotPass">
              Forgot password
            </a>
          </div>
          <button type="submit" className="button mt-5">
            <div className="btn-text">Login</div>
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
