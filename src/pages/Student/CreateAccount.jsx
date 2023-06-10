import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";


const CreateAccount = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   let endpoint = "http://localhost:2000/student_account/mail";
  //   axios.get(endpoint).then((res) => {
  //     console.log(res.data.message);
  //   });
  // }, []);

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      check: false,
    },

    onSubmit: (values) => {
      console.log(values);
      // const endpoint = "http://localhost:2000/student_account/student";
      // axios
      // .post(endpoint, values)
      // .then((response) => {
      //   if (response.data.status) {
      //     console.log(response.data.status);
      //     console.log(response.data.response);
      //     navigate("/student_login");
      //   } else {
      //     const Toast = Swal.mixin({
      //       toast: true,
      //       position: "top",
      //       showConfirmButton: false,
      //       timer: 3000,
      //       timerProgressBar: true,
      //       didOpen: (toast) => {
      //         toast.addEventListener("mouseenter", Swal.stopTimer);
      //         toast.addEventListener("mouseleave", Swal.resumeTimer);
      //       },
      //     });

      //     Toast.fire({
      //       icon: "error",
      //       title: response.data.message,
      //     });
      //   }
      // });
      // .catch((err) => {
      //   console.log(response.data.message);
      //   if (err.code === 11000) {
      //     // alert(err.message);r
      //   }
      // })
    },

    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("firstName is required to create account"),
      lastName: yup
        .string()
        .required("lastName is required to create account"),
      email: yup
        .string()
        .lowercase()
        .required("email is required to create account")
        .email("Please enter a valid email address"),
      phoneNumber: yup
        .string()
        .required("phoneNumber is required to create account"),
      password: yup
        .string()
        .required("password is required to create account")
        .min(4, "must be at least 4 characters long"),
      checkbox: yup
        .boolean()
        .oneOf([true]),
        // createdOn: 
        // date()
        // .default(() => new Date()),
    }),
  });

  return (
    <>
      <div
        className="create-account"
        style={{ padding: "60px 100px 0px", width: "100%" }}
      >
        <h2 className="fw-bold fs-2" style={{ textTransform: "capitalize" }}>
          student sign up
        </h2>
        <h6 className="d-flex gap-5 mt-3">
          <span className="mt-auto"> Have an account already </span>
          <Link to="/student_login" className="fs-4 my-auto">
            Login
          </Link>
        </h6>
        <form
          className="row g-3 mt-4"
          action=""
          method="post"
          onSubmit={formik.handleSubmit}
        >
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className={
                formik.touched.firstName && formik.errors.firstName
                  ? "input form-control is-invalid"
                  : "input form-control is-vali"
              }
              id=""
              name="firstName"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              First Name
            </label>
            <div className="invalid-feedback">
              Please provide your Firstname!
            </div>
            <div className="valid-feedback">Looks good</div>
          </div>
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className={
                formik.touched.lastName && formik.errors.lastName
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              id=""
              name="lastName"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Last Name
            </label>
            <div className="invalid-feedback">
              Please provide your Lastname!
            </div>
          </div>

          <div className="col-lg-12 position-relative  flex-column mb-3">
            <input
              type="email"
              autoComplete="on"
              className={
                formik.touched.email && formik.errors.email
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              id=""
              name="email"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Email Address
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid Email address.
            </div>
          </div>
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="tel"
              autoComplete="on"
              className={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              id=""
              name="phoneNumber"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Phone Number
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid Phone number.
            </div>
          </div>
          <div className="col-lg-6 position-relative  flex-column mb-3">
            <input
              type="password"
              autoomplete="on"
              className={
                formik.touched.password && formik.errors.password
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              id=""
              name="password"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Password
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid password.
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className={
                  formik.touched.check && formik.errors.check
                    ? "form-check-input is-invalid"
                    : "form-check-input"
                }
                type="checkbox"
                id="invalidCheck2"
                aria-describedby="invalidCheck3Feedback"
                required
                name="check"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="form-check-label" htmlFor="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary signup-btn" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
