import React from "react";
import "../homepageComponents/EventsPageComponents.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


const EventsPageComponents = () => {
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
        let endpoint = "http://localhost:2000/staff_account/create_events"
        axios.post(endpoint, values)
        .then((response) => {

        })
        .catch((err) => {

        })
    },
  });

  return (
    <div className="event-form-container">
      <h2>Create an Event</h2>
      <form onSubmit={formik.handleSubmit} className="event-form">
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventsPageComponents;
