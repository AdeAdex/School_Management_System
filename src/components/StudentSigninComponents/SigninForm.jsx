import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";


const SigninForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("")
  const [myMessage, setMyMessage] = useState("");




  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      setEnteredEmail(values.email);
      const endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/student_signin";
      axios.post(endpoint, values)
      .then((res) => {
        if (res.data.status) {
          localStorage.studentSignInToken = res.data.studentSignInToken;
          navigate("/student_dashboard");
        } else {
          setMyMessage(res.data.message)
          navigate("/student_signin");
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
            title: res.data.message,
          });
        }
      });
    },
  });


  const navigateToOTP = () => {
    navigate('/forgot_password', {state: {email: enteredEmail }});
  }


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
              type={showPassword ? "text" : "password"}
              required="required"
              name="password"
              onChange={formik.handleChange}
              placeholder="Password"
            />
            <div className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
              </div>
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
            
            <div onClick={()=> navigateToOTP()} className="text-primary" style={{cursor: 'pointer'}}>Forgot Password?</div>
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
