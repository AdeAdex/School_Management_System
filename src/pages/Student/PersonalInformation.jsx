import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


const PersonalInformation = () => {
  useEffect(() => {
   
  }, [])
  
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  let formik = useFormik({
    initialValues: {
      firstName: globalState.firstName,
      lastName: globalState.lastName,
      middleName: globalState.middleName,
      address: globalState.address,
      city: globalState.city,
      age: globalState.age,
      gender: globalState.gender,
      email: globalState.email,
      state: globalState.state,
      country: globalState.country,
      phoneNumber: globalState.phoneNumber,
    },

    onSubmit: (values) => {
      const endpoint = "http://localhost:2000/student_account/student_update";
      axios.post(endpoint, values)
      .then((response) => {
        console.log(response);
      })
    }
  })

  
  return (
    <>
      <form
        className="row g-3 mt-4"
        action=""
        method="post"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-md-6 position-relative  flex-column mb-3">
          <input
            type="text"
            autoComplete="on"
            className={formik.touched.firstName && formik.errors.firstName ? "input form-control is-invalid" : "input form-control is-vali"}
            id=""
            name="firstName"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          <label htmlFor="validationServer01" className="user-label">
            First Name
          </label>
          <div className="invalid-feedback">Please provide your Firstname!</div>
          <div className="valid-feedback">Looks good</div>
        </div>
        <div className="col-md-6 position-relative  flex-column mb-3">
          <input
            type="text"
            autoComplete="on"
            className={formik.touched.lastName && formik.errors.lastName ? "input form-control is-invalid" : "input form-control"}
            id=""
            name="lastName"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          <label htmlFor="validationServer01" className="user-label">
            Last Name
          </label>
          <div className="invalid-feedback">Please provide your Lastname!</div>
        </div>
        <div className="col-md-6 position-relative  flex-column mb-3">
          <input
            type="text"
            autoComplete="on"
            className={formik.touched.lastName && formik.errors.lastName ? "input form-control is-invalid" : "input form-control"}
            id=""
            name="middleName"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.middleName}
          />
          <label htmlFor="validationServer01" className="user-label">
            Middle Name
          </label>
          <div className="invalid-feedback">Please provide your Middlename!</div>
        </div>
        <div className="col-md-6 position-relative  flex-column mb-3">
          <input
            type="text"
            autoComplete="on"
            className={formik.touched.lastName && formik.errors.lastName ? "input form-control is-invalid" : "input form-control"}
            id=""
            name="address"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          <label htmlFor="validationServer01" className="user-label">
            Address
          </label>
          <div className="invalid-feedback">Please provide your Address!</div>
        </div>

        <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className={formik.touched.firstName && formik.errors.firstName ? "input form-control is-invalid" : "input form-control"}
              id=""
              name="city"
              required
              onChange={formik.handleChange}
              value={formik.values.city}
            />
            <label htmlFor="validationServer01" className="user-label">
              City
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
        <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="number"
              autoComplete="on"
              className={formik.touched.firstName && formik.errors.firstName ? "input form-control is-invalid" : "input form-control"}
              id=""
              name="age"
              required
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            <label htmlFor="validationServer01" className="user-label">
              Age
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a your age.
            </div>
          </div>
        <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className={formik.touched.firstName && formik.errors.firstName ? "input form-control is-invalid" : "input form-control"}
              id=""
              name="gender"
              required
              onChange={formik.handleChange}
              value={formik.values.gender}
            />
            <label htmlFor="validationServer01" className="user-label">
              Gender
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a your gender.
            </div>
          </div>
        <div className="col-lg-6 position-relative  flex-column mb-3">
          <input
            type="email"
            autoComplete="on"
            className={formik.touched.email && formik.errors.email ? "input form-control is-invalid" : "input form-control"}
            id=""
            name="email"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <label htmlFor="validationServer01" className="user-label">
            Email Address
          </label>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please provide a valid Email address.
          </div>
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="validationServer04" className="form-label">
              State
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="state"
              aria-describedby="validationServer04Feedback"
              required
              onChange={formik.handleChange}
              value={formik.values.state}
            >
              <option disabled>
                Choose...
              </option>
              <option value="Oyo State">Oyo State</option>
              <option value="Lagos State">Lagos State</option>
            </select>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer04" className="form-label">
              Country
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="country"
              aria-describedby="validationServer04Feedback"
              required
              onChange={formik.handleChange}
              value={formik.values.country}
            >
              <option disabled>
                Choose...
              </option>
              <option value="Nigeria">Nigeria</option>
              <option value="Uk">United Kingdom</option>
              <option value="USA">United State of America</option>
              <option value="Canada">Canada</option>
            </select>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
        <div className="col-md-6 position-relative  flex-column mb-3">
          <input
            type="tel"
            autoComplete="on"
            className={formik.touched.phoneNumber && formik.errors.phoneNumber ? "input form-control is-invalid" : "input form-control"}
            id=""
            name="phoneNumber"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          <label htmlFor="validationServer01" className="user-label">
            Phone Number
          </label>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please provide a valid Phone number.
          </div>
        </div>
        <div className="col-lg-6 position-relative  flex-column mb-3">
          <input
            type="text"
            autoomplete="on"
            className={formik.touched.password && formik.errors.password ? "input form-control is-invalid" : "input form-control"}
            id=""
            name="password"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="validationServer01" className="user-label">
            Password
          </label>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please provide a valid password.
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className={formik.touched.check && formik.errors.check ? "form-check-input is-invalid" : "form-check-input"}
              type="checkbox"
              id="invalidCheck3"
              aria-describedby="invalidCheck3Feedback"
              required
              name="check"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="form-check-label" htmlFor="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div id="invalidCheck3Feedback" className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary signup-btn"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  )
}

export default PersonalInformation