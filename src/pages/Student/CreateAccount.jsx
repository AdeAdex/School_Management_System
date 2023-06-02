import React from 'react'

const CreateAccount = () => {
  return (
    <>
         {/* <div className="d-flex gap-4" style={{width: '100%', overflowX: 'auto'}}>
      <Link to="pick_class">Pick Class</Link>
        <Link to="payment">Payment</Link>
        <Link to="personal_information">Personal Information</Link>
        <Link to="education">Education</Link>
        <Link to="referees">Referees</Link>
        <Link to="credential_uploads">Credential Uploads</Link>
        
      </div>
      <hr /> */}
      {/* <Router>
          <Routes>
            <Route path="pick_class" element={<></>}/>
          </Routes>
        </Router> */}
        <h2 className="fw-bold fs-2" style={{ textTransform: "capitalize" }}>
          student sign up
        </h2>
        <h6 className="d-flex gap-5 mt-3">
          <span className="mt-auto"> Have an account already </span>
          <a href="/student_signin" className="fs-4 my-auto">
            Login
          </a>
        </h6>
        <form
          className="row g-3 mt-4"
          action="/student_account/student_signup"
          method="post"
        >
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className="input form-control "
              id=""
              name="firstName"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="validationServer01" className="user-label">
              First Name
            </label>
            <div className="invalid-feedback">
              Please provide your firstName!
            </div>
          </div>
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className="input form-control "
              id=""
              name="lastName"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="validationServer01" className="user-label">
              Last Name
            </label>
            <div className="invalid-feedback">
              Please provide your lastName!
            </div>
          </div>
          
          {/* <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className="input form-control "
              id=""
              name="city"
              required
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="validationServer01" className="user-label">
              City
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div> */}
          {/* <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="number"
              autoComplete="on"
              className="input form-control "
              id=""
              name="age"
              required
              onChange={(e) => setAge(e.target.value)}
            />
            <label htmlFor="validationServer01" className="user-label">
              Age
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a your age.
            </div>
          </div> */}
          {/* <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="text"
              autoComplete="on"
              className="input form-control "
              id=""
              name="gender"
              required
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="validationServer01" className="user-label">
              Gender
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a your gender.
            </div>
          </div> */}
          <div className="col-lg-12 position-relative d-flex flex-column mb-3">
            <input
              type="email"
              autoComplete="on"
              className="input form-control "
              id=""
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="validationServer01" className="user-label">
              Email Address
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid email address.
            </div>
          </div>
          {/* <div className="col-md-12 mb-3">
            <label htmlFor="validationServer04" className="form-label">
              State
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="state"
              aria-describedby="validationServer04Feedback"
              required
              onChange={(e) => setState(e.target.value)}
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
          </div> */}
          <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="tel"
              autoComplete="on"
              className="input form-control "
              id=""
              name="phoneNumber"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor="validationServer01" className="user-label">
              Phone Number
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-lg-6 position-relative d-flex flex-column mb-3">
            <input
              type="text"
              autoomplete="on"
              className="input form-control "
              id=""
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
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
                className="form-check-input is-invalid"
                type="checkbox"
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required
                name="check"
                onChange={(e) => setCheck(e.target.checked)}
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
              onClick={createAccount}
            >
              Create Account
            </button>
          </div>
        </form>
    </>
  )
}

export default CreateAccount