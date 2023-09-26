import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

const PickClass = () => {
  const [responseArray, setResponseArray] = useState([]);

  useEffect(() => {}, []);

  // const handleResponseChange = (event) => {
  //   const { name, value } = event.target;
  //   setResponseArray((prevResponses) => ({
  //     ...prevResponses,
  //     [name]: value,
  //   }));
  // };

  // console.log(responseArray);
  let formik = useFormik({
    initialValues: {
      class: "",
    },

    onSubmit: (values) => {
      console.log(values);
      // const endpoint = "https://school-portal-backend-adex2210.vercel.app/staff_account/details";
      // axios.get(endpoint, values).then((response) => {
      //   console.log(response);
      // });
    },
  });

  return (
    <>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="col-md-12 mb-3">
            <label
              htmlFor="validationServer04"
              className="form-label fw-bold text-secondary"
            >
              Class
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="class"
              aria-describedby="validationServer04Feedback"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option disabled>Choose...</option>
              <option value="JSS 1">JSS 1</option>
              <option value="JSS 2">JSS 2</option>
              <option value="JSS 3">JSS 3</option>
              <option value="SSS 1">SSS 1</option>
              <option value="SSS 2">SSS 2</option>
              <option value="SSS 3">SSS 3</option>
            </select>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please select a valid class.
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <label
              htmlFor="validationServer04"
              className="form-label fw-bold text-secondary"
            >
              Options
            </label>
            <select
              className="form-select"
              id="validationServer04"
              name="studentNewOptions"
              aria-describedby="validationServer04Feedback"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option disabled>Choose...</option>
              <option value="Science">All</option>
              <option value="Science">Science Option</option>
              <option value="Commercial">Commercial Option</option>
              <option value="Art">Art Option</option>
            </select>
          </div>
          <button type="submit" className="btn btn-sm btn-primary" disabled>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PickClass;
