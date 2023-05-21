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
      axios.post(endpoint, values).then((res) => {
        if (res.data == "pass") {
          console.log(res.data);
          navigate("/student_dashboard");
        } else {
          navigate("/signin");
        }
      });
    },
  });
  return (
    <>
      <div
        className="shadow bg-light signup-form"
        style={{ padding: "50px 100px", width: "50%" }}
      >
        <h1 id="h1">
          welcome <span>back!</span>
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          action="/student_account/student_signin"
          method="post"
        >
          <div className="form-control">
            <input
              type="text"
              required="required"
              name="email"
              onChange={formik.handleChange}
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>E</span>
              <span style={{ transitionDelay: "50ms" }}>m</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>i</span>
              <span style={{ transitionDelay: "200ms" }}>l</span>
            </label>
          </div>
          <div className="form-control">
            <input
              type="password"
              required="required"
              name="password"
              onChange={formik.handleChange}
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

          <div className="check">
            <span>
              <input type="checkbox" id="checkBox" /> Remember Me
            </span>
            <a href="" id="forgotPass">
              Forgot password
            </a>
          </div>
          <button className="button">
            <div className="btn-text">Login</div>
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
