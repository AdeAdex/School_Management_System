import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

const PickClass = () => {
  // const [state, setState] = useState("")
  const [responseArray, setResponseArray] = useState([]);

  useEffect(() => {
    const endpoint = "http://localhost:2000/staff_account/details";

    axios
      .get(endpoint, {
        headers: {
          Authorization: `${"staffArray"}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.response[0].staffArray);
        // setResponseArray(response.data.response[0].staffArray);
        const responseData = response.data.response[0].staffArray;
        setResponseArray(responseData);
      });
  }, []);

  // const handleResponseChange = (event) => {
  //   const { name, value } = event.target;
  //   setResponseArray((prevResponses) => ({
  //     ...prevResponses,
  //     [name]: value,
  //   }));
  //   console.log(name, value);
  // };

  // console.log(responseArray);
  let formik = useFormik({
    initialValues: {
      class: "",
    },

    onSubmit: (values) => {
      console.log(values);
      // const endpoint = "http://localhost:2000/staff_account/details";
      // axios.get(endpoint, values).then((response) => {
      //   console.log(response);
      // });
    },
  });

  return (
    <>
      <div>
        {/* <h1>Response Form</h1>
        <select
          name="address"
          onChange={(event) => handleResponseChange(index, event)}
        >
          <option value="">Select an option for Array 1</option>
          {responseArray.map((option, index) => (
            <option key={index} value={option.address}>
              {option.address}
            </option>
          ))}
        </select>

        <select
          name="country"
          onChange={(event) => handleResponseChange(index, event)}
        >
          <option value="">Select an option for Array 2</option>
          {responseArray.map((option, index) => (
            <option key={index} value={option.class}>
              {option.class}
            </option>
          ))}
        </select> */}

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
              {responseArray.map(
                (option, index) => (
                  responseArray.sort(),
                  (
                    <option key={index} value={option.class}>
                      {option.class}
                    </option>
                  )
                )
              )}
            </select>
          </div>
          <div className="col-md-12 mb-3">
            <label
              htmlFor="validationServer04"
              className="form-label fw-bold text-secondary"
            >
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default PickClass;
