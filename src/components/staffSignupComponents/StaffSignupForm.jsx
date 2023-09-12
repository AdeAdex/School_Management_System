import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { format } from "date-fns";



const StaffSignupForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      check: false,
    },

    onSubmit: async (values) => {
      setIsLoading(true);

      try {
        const randomNumber = Math.floor(Math.random() * 100000000);
        const numbersPart = randomNumber.toString().padStart(8, "0");
        const alphabetPart = Array.from({ length: 2 }, () => {
          const randomIndex = Math.floor(Math.random() * 26);
          return String.fromCharCode(65 + randomIndex);
        }).join("");

        const currentDate = format(new Date(), "yyyy-MM-dd");
        const registrationNumber = numbersPart + alphabetPart;
        const newValues = {
          ...values,
          registrationNumber,
          createdDate: currentDate,
        };
        const endpoint =
          "https://school-portal-backend-adex2210.vercel.app/staff_account/staff_signup";

        const response = await axios.post(endpoint, newValues);

        if (response.data.status) {
          setIsLoading(false);
          navigate("/staff_signin");
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: response.data.message,
          });
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        const errorMessage =
          err.response?.data?.message || "An error occurred.";

        Toast.fire({
          icon: "error",
          title: errorMessage,
        });
      }
    },

    
    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("firstname is required to create account"),
      lastName: yup.string().required("lastname is required to create account"),
      email: yup
        .string()
        .lowercase()
        .required("email is required to create account")
        .email("Please enter a valid email address"),
      phoneNumber: yup
        .string()
        .required("phone number is required to create account"),
      password: yup
        .string()
        .required("password is required to create account")
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
      checkbox: yup.boolean().oneOf([true]),
    }),
  });

  return (
    <>
      <div
        className="shadow bg-light signup-form"
        style={{ padding: "50px 100px 0px", width: "70%" }}
      >
        <h2 className="fw-bold fs-2" style={{ textTransform: "capitalize" }}>
          staff sign up
        </h2>
        <h6 className="d-flex gap-5 mt-3">
          <span className="mt-auto"> Have an account already </span>
          <a href="/staff_signin" className="fs-4 my-auto">
            Login
          </a>
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
              name="firstName"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              First Name
            </label>
            {formik.touched.firstName && formik.errors.firstName ? (
              <small className="error text-danger">
                {formik.errors.firstName}
              </small>
            ) : null}
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
              name="lastName"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Last Name
            </label>
            {formik.touched.lastName && formik.errors.lastName ? (
              <small className="error text-danger">
                {formik.errors.lastName}
              </small>
            ) : null}
          </div>

          <div className="col-lg-6 position-relative  flex-column mb-3">
            <input
              type="email"
              autoComplete="on"
              className={
                formik.touched.email && formik.errors.email
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              name="email"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Email Address
            </label>
            {formik.touched.email && formik.errors.email ? (
              <small className="error text-danger">{formik.errors.email}</small>
            ) : null}
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
              name="phoneNumber"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Phone Number
            </label>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <small className="error text-danger">
                {formik.errors.phoneNumber}
              </small>
            ) : null}
          </div>
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className={
                formik.touched.city && formik.errors.city
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              name="city"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              City
            </label>
            {formik.touched.city && formik.errors.city ? (
              <small className="error text-danger">
                {formik.errors.city}
              </small>
            ) : null}
          </div>
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className={
                formik.touched.age && formik.errors.age
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              name="age"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Age
            </label>
            {formik.touched.age && formik.errors.age ? (
              <small className="error text-danger">
                {formik.errors.age}
              </small>
            ) : null}
          </div>
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className={
                formik.touched.gender && formik.errors.gender
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              name="gender"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Gender
            </label>
            {formik.touched.gender && formik.errors.gender ? (
              <small className="error text-danger">
                {formik.errors.gender}
              </small>
            ) : null}
          </div>
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className={
                formik.touched.country && formik.errors.country
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              name="country"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Country
            </label>
            {formik.touched.country && formik.errors.country ? (
              <small className="error text-danger">
                {formik.errors.country}
              </small>
            ) : null}
          </div>
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className={
                formik.touched.state && formik.errors.state
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              name="state"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              State
            </label>
            {formik.touched.state && formik.errors.state ? (
              <small className="error text-danger">
                {formik.errors.state}
              </small>
            ) : null}
          </div>
          <div className="col-lg-6 position-relative  flex-column mb-3">
            <input
              type="password"
              autoComplete="on"
              className={
                formik.touched.password && formik.errors.password
                  ? "input form-control is-invalid"
                  : "input form-control"
              }
              name="password"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="validationServer01" className="user-label">
              Password
            </label>
            {formik.touched.password && formik.errors.password ? (
              <small className="error text-danger">
                {formik.errors.password}
              </small>
            ) : null}
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
              {isLoading ? (
                <span className="d-flex">
                  <div className="spinner my-auto"></div>
                </span>
              ) : (
                <span> Create Account</span>
              )}
            </button>
          </div>
        </form>
       
      </div>
    </>
  );
};

export default StaffSignupForm;
