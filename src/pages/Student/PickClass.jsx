import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PickClass = () => {
  const [responseArray, setResponseArray] = useState([]);
  let globalState = useSelector((state) => state.portalReducer.studentInfo);

  useEffect(() => {
  }, [globalState]);

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
      <div className={`${globalState.paidForAdmission ? 'mt-4' : ''}`}>
        {globalState.paidForAdmission == 'true' ? (
          <small style={{fontFamily: 'serif'}}>You've been granted admission to study in our school for a perfect education from JSS1 to SSS3 for 6 years, providing you with a dynamic education that will change your life and prepare you for the future.</small>
        ) : (
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
                htmlFor="validationServer05"
                className="form-label fw-bold text-secondary"
              >
                Options
              </label>
              <select
                className="form-select"
                id="validationServer05"
                name="studentNewOptions"
                aria-describedby="validationServer05Feedback"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled>Choose...</option>
                <option value="All">All</option>
                <option value="Science">Science Option</option>
                <option value="Commercial">Commercial Option</option>
                <option value="Art">Art Option</option>
              </select>
              <div id="validationServer05Feedback" className="invalid-feedback">
                Please select a valid option.
              </div>
            </div>
            <button type="submit" className="btn btn-sm btn-primary" disabled>
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default PickClass;
