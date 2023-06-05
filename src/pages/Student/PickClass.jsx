import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";

const PickClass = () => {
  // const [state, setState] = useState("")
  let formik = useFormik({
    initialValues: {
      state: "",
    },

    onSubmit: (values) => {
      console.log(values);
      // const endpoint = "http://localhost:2000/student_account/student"
      // axios.post(endpoint, values)
      // .then((response) => {
      //   console.log(response)
      // })
    },
  });

  return (
    <>
      <div className="shadow p-4 mt-4">
        <form action="" method="post" onSubmit={formik.handleSubmit}>
          <div className="col-md-12 mb-3">
            <label htmlFor="validationServer04" className="form-label">
              Course
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="state"
              aria-describedby="validationServer04Feedback"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // onChange={(e) => setState(e.target.value)}
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
              Please select a valid state.
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="validationServer04" className="form-label">
              Course
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="state"
              aria-describedby="validationServer04Feedback"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // onChange={(e) => setState(e.target.value)}
            >
              <option disabled>Choose...</option>
              <option value="JSS 1">Science</option>
              <option value="JSS 2">Commercial</option>
              <option value="JSS 3">Art</option>
            </select>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="validationServer04" className="form-label">
              Level
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="state"
              aria-describedby="validationServer04Feedback"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // onChange={(e) => setState(e.target.value)}
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
              Please select a valid state.
            </div>
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default PickClass;
