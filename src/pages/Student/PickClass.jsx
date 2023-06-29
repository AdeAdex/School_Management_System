import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

const PickClass = () => {
  // const [state, setState] = useState("")
  const [responseArray, setResponseArray] = useState({
    array1: '',
    array2: '',
    array3: ''
  });

  // const response = {
  //   array1: ['Option 1', 'Option 2', 'Option 3'],
  //   array2: ['Choice 1', 'Choice 2', 'Choice 3'],
  //   array3: ['Item 1', 'Item 2', 'Item 3'],
  // }; // Replace with your response object

  // const handleSelectChange = (event) => {
  //   // Handle the select change here
  //   console.log(event.target.name, event.target.value);
  // };

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
        // setResponseArray(response.data.response[0].staffArray[0]);
      });
  }, []);

  const handleResponseChange = (event) => {
    const { name, value } = event.target;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [name]: value
    }));
  };

  // console.log(responseArray);
  let formik = useFormik({
    initialValues: {
      state: "",
    },

    onSubmit: (values) => {
      console.log(values);
      const endpoint = "http://localhost:2000/staff_account/details";
      axios.get(endpoint, values).then((response) => {
        console.log(response);
      });
    },
  });

  return (
    <>

<div>
      <h1>Response Form</h1>
      <select name="array1" value={responses.array1} onChange={handleResponseChange}>
        <option value="">Select an option for Array 1</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>

      <select name="array2" value={responses.array2} onChange={handleResponseChange}>
        <option value="">Select an option for Array 2</option>
        <option value="Option A">Option A</option>
        <option value="Option B">Option B</option>
        <option value="Option C">Option C</option>
      </select>

      <select name="array3" value={responses.array3} onChange={handleResponseChange}>
        <option value="">Select an option for Array 3</option>
        <option value="Value X">Value X</option>
        <option value="Value Y">Value Y</option>
        <option value="Value Z">Value Z</option>
      </select>
    </div>

{/* <div>
      <h1>Select Options</h1>
      <select name="array1" onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {responseArray.array1.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <select name="array2" onChange={handleSelectChange}>
        <option value="">Select a choice</option>
        {response.array2.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <select name="array3" onChange={handleSelectChange}>
        <option value="">Select an item</option>
        {response.array3.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div> */}





       {/* <div className="shadow p-4 mt-4">
        <form action="" method="post" onSubmit={formik.handleSubmit}>
          <div className="col-md-12 mb-3">
            <label
              htmlFor="validationServer04"
              className="form-label fw-bold text-secondary"
            >
              Course
            </label>
             <select>
              {responseArray.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select> 
             <select
              className="form-select "
              id="validationServer04"
              name="state"
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
              Please select a valid state.
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary d-flex justify-content-center w-25 mx-auto"
          >
            Continue
          </button>
        </form>

        <div className="col-md-12 mb-3">
          <label
            htmlFor="validationServer04"
            className="form-label fw-bold text-secondary"
          >
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
      </div>  */}
    </>
  );
};

export default PickClass;
