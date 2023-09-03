import React, { useState } from "react";
import "../homepageComponents/EventsPageComponents.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const EventsPageComponents = () => {
  const [myImage, setMyImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageFileChange = (e) => {
    let myImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myImage);
    reader.onload = () => {
      setMyImage(reader.result);
    };
  };

  const validationSchema = Yup.object({
    days: Yup.string().required("Days is required"),
    title: Yup.string().required("Title is required"),
    country: Yup.string().required("Country is required"),
    timeFrom: Yup.string().required("Time From is required"),
    timeTo: Yup.string().required("Time To is required"),
    content: Yup.string().required("Content is required"),
  });

  const formik = useFormik({
    initialValues: {
      days: "",
      title: "",
      country: "",
      timeFrom: "",
      timeTo: "",
      content: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      let newValues = { ...values, myImage };
      let endpoint = "http://localhost:2000/staff_account/create_events";
      axios
        .post(endpoint, newValues)
        .then((response) => {
          setIsLoading(false);
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
            title: response.data.message,
          });
        })
        .catch((err) => {});
    },
  });

  return (
    <div className="event-form-container">
      <h2>Create an Event</h2>
      <form onSubmit={formik.handleSubmit} className="event-form">
        <div className="mb-3">
          <label htmlFor="profilePicture" className="form-label">
            Event Picture
          </label>
          <input
            type="file"
            className="form-control"
            id="profilePicture"
            name="profilePicture"
            accept="images/*"
            onChange={handleImageFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="days">Date</label>
          <input
            type="date"
            name="days"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.days}
          />
          {formik.errors.days && formik.touched.days && (
            <div className="error">{formik.errors.days}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title && (
            <div className="error">{formik.errors.title}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          {formik.errors.country && formik.touched.country && (
            <div className="error">{formik.errors.country}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="timeFrom">Time From</label>
          <input
            type="time"
            name="timeFrom"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.timeFrom}
          />
          {formik.errors.timeFrom && formik.touched.timeFrom && (
            <div className="error">{formik.errors.timeFrom}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="timeTo">Time To</label>
          <input
            type="time"
            name="timeTo"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.timeTo}
          />
          {formik.errors.timeTo && formik.touched.timeTo && (
            <div className="error">{formik.errors.timeTo}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.content}
          ></textarea>
          {formik.errors.content && formik.touched.content && (
            <div className="error">{formik.errors.content}</div>
          )}
        </div>
        <button type="submit" className="btn-submit">
          {isLoading ? <div className="spinner"></div> : <div>Submit</div>}
        </button>
      </form>
    </div>
  );
};

export default EventsPageComponents;
