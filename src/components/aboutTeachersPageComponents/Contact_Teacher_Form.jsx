import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contact_Teacher_Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      values.message = values.message + " This message was sent from Teachers Page"
      console.log(values);
      setIsLoading(true);
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/staff_account/people_reaching_us";
      axios
        .post(endpoint, values)
        .then((response) => {
          setIsLoading(false);
          const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            html: `
            <div class="toast-content">
              <button id="close-toast-button" class="close-button">&times;</button>
            </div>
          `,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);

              const closeButton = document.getElementById("close-toast-button");
              closeButton.addEventListener("click", () => {
                Swal.close(); // Close the toast
              });

              document.body.addEventListener("click", () => {
                Swal.close(); // Close the toast
              });
            },
            customClass: {
              container: "custom-toast-width",
              popup: "custom-toast-position",
            },
          });

          Toast.fire({
            icon: "success",
            title: response.data.message,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      resetForm();
    },
  });

  return (
    <>
      <div className="contact-teachers-form shadow">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            required=""
            placeholder="NAME"
            className="text-capitalize"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error text-danger">{formik.errors.name}</div>
          ) : null}

          <input
            type="email"
            id="email"
            name="email"
            required=""
            placeholder="EMAIL"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error text-danger">{formik.errors.email}</div>
          ) : null}

          <textarea
            id="message"
            name="message"
            required=""
            placeholder="MESSAGE"
            className="text-capitalize textarea"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error text-danger">{formik.errors.message}</div>
          ) : null}

          <button className="footer-contact-btn" type="submit">
            {isLoading ? <div className="spinner"></div> : <div>Send </div>}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact_Teacher_Form;
