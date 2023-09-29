import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { format } from "date-fns";
import { Select } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";
import { Accordion } from "@mantine/core";
// import classes from './Demo.module.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCode, setSelectedCode] = useState("");
  const [dialCode, setDialCode] = useState([]);
  const [startTyping, setStartTyping] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const [isAllTermsRead, setIsAllTermsRead] = useState(false);

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/dial_code";
    axios
      .get(endpoint)
      .then((response) => {
        setDialCode(response.data);
        const defaultCode =
          response.data.length > 0 ? response.data[0].code : "";
        setSelectedCode(defaultCode);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setStartTyping(true);
    }, 1000);
  }, [startTyping]);

  const handleSelectChange = (event) => {
    setSelectedCode(event.target.value);
    // console.log(selectedCode);
  };

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
          phoneNumber: selectedCode + values.phoneNumber,
        };

        console.log(newValues);
        const endpoint =
          "https://school-portal-backend-adex2210.vercel.app/student_account/student";

        const response = await axios.post(endpoint, newValues);

        if (response.data.status) {
          setIsLoading(false);
          navigate("/student_login");
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
        .required("First name is required to create account"),
      lastName: yup
        .string()
        .required("Last name is required to create account"),
      email: yup
        .string()
        .lowercase()
        .required("Email is required to create account")
        .email("Please enter a valid email address"),
      phoneNumber: yup
        .string()
        .required("Phone number is required to create account")
        .min(6, "Phone number must be at least 6 characters long")
        .matches(
          /^[0-9][0-9\s]{5,13}[0-9]$/,
          "Phone number must start with a digit (0-9) and contain 6 to 14 digits with optional spaces"
        ),
      password: yup
        .string()
        .required("Password is required to create account")
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
      checkbox: yup.boolean().oneOf([true]),
    }),
  });

  const options = dialCode.map((item) => ({
    value: item.code,
    label: `(${item.code})`,
  }));

  const sortedDialCode = [...dialCode].sort((a, b) =>
    a.country.localeCompare(b.country)
  );

  const initialEmoji = isAllTermsRead ? "✅" : "❗";

  const terms = [
    {
      emoji: initialEmoji,
      value: "Terms & Condition",
      description:
        "By creating an account, you agree to the following terms and conditions:\n\n1. Make sure to provide a correct email address as you will receive important emails related to your account.\n2. You will provide accurate and truthful information during registration.\n3. You are responsible for maintaining the confidentiality of your account password.\n4. You will not share your account credentials with others.\n5. You will notify us immediately of any unauthorized access to your account.\n6. You will abide by all applicable laws and regulations while using our services.\n7. We reserve the right to terminate or suspend your account if you violate these terms.\n\nNote: Your password is securely encrypted to protect your privacy.",
    },
  ];
  
  

  const handleAccordionChange = (value) => {
    setIsAllTermsRead(value.length === terms.length);
  };


  const items = terms.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === "Bananas"}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>
        {item.description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  ));


  return (
    <>
      <div
        className="create-account"
        style={{
          padding: "60px 100px 0px",
          width: "100%",
          position: "relative",
        }}
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
          className="row g-3 mt-4 mb-4"
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

          <div className="col-lg-12 position-relative  flex-column mb-3">
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
          <div className="col-md-6 position-relative  flex-column mb-3 telephone-container">
            <span
              className="tel-span"
              style={{
                position: "absolute",
                height: "",
                width: "58px",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <select
                name=""
                className="dial-code"
                style={{
                  backgroundColor: "unset",
                  width: "55px",
                  border: "none",
                  outline: "none",
                }}
                onChange={handleSelectChange}
                value={selectedCode}
              >
                {sortedDialCode.map((allCode, index) => (
                  <option key={index} value={allCode.code}>
                    {selectedCode === allCode.code
                      ? allCode.code
                      : `${allCode.country} - ${allCode.code}`}
                  </option>
                ))}
              </select>
            </span>

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
            <label htmlFor="validationServer01" className="user-label tel">
              Phone Number
            </label>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <small className="error text-danger">
                {formik.errors.phoneNumber}
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
                I have read and Agree to terms and conditions
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

        <div style={{ height: "200px", overflow: "auto" }}>
          <Accordion defaultValue={[]} onChange={handleAccordionChange}>
        {items}
      </Accordion>
      {isAllTermsRead && (
        <div>
          <p>All terms and conditions have been read.</p>
        </div>
      )}
        </div>
      </div>
    </>
  );
};

export default CreateAccount;


 {/* {startTyping && (
          <small className="" style={{ marginTop: "100px" }}>
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "195px",
                display: "block",
              }}
              sequence={[
                "By creating an account, you agree to the following terms and conditions:\n\n1. You will provide accurate and truthful information during registration.\n2. You are responsible for maintaining the confidentiality of your account password.\n3. You will not share your account credentials with others.\n4. You will notify us immediately of any unauthorized access to your account.\n5. You will abide by all applicable laws and regulations while using our services.\n6. We reserve the right to terminate or suspend your account if you violate these terms.\nYour password is securely encrypted to protect your privacy.",
                1000,
                "",
              ]}
              repeat={Infinity}
            />
          </small>
        )} */}