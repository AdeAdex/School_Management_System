import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const StaffSigninForm = () => {
  const navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
//       console.log(values);
      const endpoint = "http://localhost:2000/staff_account/staff_signin";
      axios.post(endpoint, values)
      .then((res) => {
        if (res.data.message == "successfully signed in") {
          // console.log(res.data.response[0]);
          localStorage.setItem("myStoredEmail", JSON.stringify(res.data.response[0].email));
          navigate("/staff_dashboard");
        } else {
          navigate("/signin");
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
          action="/staff_account/staff_signin"
          method="post"
        >
          <div className="form-control signin-form-control">
            <input
              type="text"
              required="required"
              name="email"
              onChange={formik.handleChange}
              placeholder="Email"
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>E</span>
              <span style={{ transitionDelay: "50ms" }}>m</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>i</span>
              <span style={{ transitionDelay: "200ms" }}>l</span>
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

export default StaffSigninForm;
