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
        const responseData = response.data.response[0].staffArray
        setResponseArray(responseData);
      });
  }, []);

  const handleResponseChange = (event) => {
    const { name, value } = event.target;
    setResponseArray((prevResponses) => ({
      ...prevResponses,
      [name]: value
    }));
    console.log(name, value);
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

{responseArray.map((response, index) => (
        <div key={index}>
          <h3>Response {index}</h3>
          <select
            name="address"
            value={response.address}
            onChange={(event) => handleResponseChange(index, event)}
          >
            <option value="">Select an address</option>
            <option value="A">Address A</option>
            <option value="B">Address B</option>
            <option value="C">Address C</option>
          </select>

          <select
            name="country"
            value={response.country}
            onChange={(event) => handleResponseChange(index, event)}
          >
            <option value="">Select a country</option>
            <option value="Nig">Nigeria</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
          </select>

        </div>
      ))}


      {/* <h1>Response Form</h1>
      <select name="array1" value={responseArray.array1} onChange={handleResponseChange}>
      <option value="">Select an option for Array 1</option>
        {responseArray.array1.map((option, index) => (
          console.log(option, index)
          
        ))}
      </select>

      <select name="array2" value={responseArray.array2} onChange={handleResponseChange}>
        <option value="">Select an option for Array 2</option>
        <option value="Option A">Option A</option>
        <option value="Option B">Option B</option>
        <option value="Option C">Option C</option>
      </select>

      <select name="array3" value={responseArray.array3} onChange={handleResponseChange}>
        <option value="">Select an option for Array 3</option>
        <option value="Value X">Value X</option>
        <option value="Value Y">Value Y</option>
        <option value="Value Z">Value Z</option>
      </select> */}
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
