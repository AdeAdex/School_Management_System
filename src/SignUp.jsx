import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <section className="d-flex w-100 px-5 py-3" style={{ height: "100vh" }}>
      <div
        className="h-100 py-4 px-5 position-relative text-white"
        style={{
          width: "30%",
          backgroundColor: "#3c37ff",
          borderRadius: "10px",
        }}
      >
        <img src="pic/adexlogo.png" className="mt-5 mb-lg-5" alt="" />
        <h2 className="mt-lg-5" style={{ textTransform: "capitalize" }}>
          start your <br />
          journey with us.
        </h2>
        <div>Discover the world best education</div>
        <div
          className="flex-column py-4 px-3 text-white"
          style={{
            backgroundColor: "#2520e3",
            borderRadius: "20px",
            marginTop: "50%",
          }}
        >
          <div className="d-flex gap-3 mt-3">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators" style={{ bottom: "-60px" }}>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div>
                    This is a very nice school for any child who want the best
                    education. I really recommend them 💯
                  </div>
                  <div className="d-flex gap-3 mt-4">
                    <img
                      src="pic/avatar.png"
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                      }}
                      className="d-block"
                    />
                    <div className="flex-column">
                      <div>Grace George</div>
                      <div>Fashionist</div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <div>
                    The service render at Adex School is simply unbelievable.
                    I'm really satisfied with the way my daughter is improving
                    in her study
                  </div>
                  <div className="d-flex gap-3 mt-3">
                    <img
                      src="pic/2.png"
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                      }}
                      className="d-block"
                    />
                    <div className="flex-column">
                      <div>Timson K</div>
                      <div>Freelancer</div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, minima quia eligendi repellat eius in molestias
                    distinctio, expedita labore amet
                  </div>
                  <div className="d-flex gap-3 mt-3">
                    <img
                      src="pic/1.jpg"
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                      }}
                      className="d-block"
                    />
                    <div className="flex-column">
                      <div>Adeolu Adex</div>
                      <div>Developer</div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev visually-hidden"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next visually-hidden"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-50 h-100" style={{ padding: "50px 100px" }}>
        <h2 className="fw-bold" style={{ textTransform: "capitalize" }}>
          sign up
        </h2>
        <h6 className="d-flex gap-5 mt-3">
          Have an account already <a href="/signin">Login</a>
        </h6>
        <form className="row g-3 mt-4" action="/signup" method="post">
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autocomplete="on"
              className="input form-control "
              id="validationServer01"
              value=""
              name="firstName"
              required
            />
            <label for="validationServer01" className="user-label">
              First Name
            </label>
            <div className="invalid-feedback">
              Please provide your firstName!
            </div>
          </div>
          <div className="col-md-6 position-relative  flex-column mb-3">
            <input
              type="text"
              autocomplete="on"
              className="input form-control "
              id="validationServer01"
              value=""
              name="lastName"
              required
            />
            <label for="validationServer01" className="user-label">
              Last Name
            </label>
            <div className="invalid-feedback">
              Please provide your lastName!
            </div>
          </div>
          <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="tel"
              autocomplete="on"
              className="input form-control "
              id="validationServer01"
              value=""
              name="phoneNumber"
              required
            />
            <label for="validationServer01" className="user-label">
              Phone Number
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="text"
              autocomplete="on"
              className="input form-control "
              id="validationServer01"
              value=""
              name="city"
              required
            />
            <label for="validationServer01" className="user-label">
              City
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="number"
              autocomplete="on"
              className="input form-control "
              id="validationServer01"
              value=""
              name="age"
              required
            />
            <label for="validationServer01" className="user-label">
              Age
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a your age.
            </div>
          </div>
          <div className="col-md-6 position-relative d-flex flex-column mb-3">
            <input
              type="text"
              autocomplete="on"
              className="input form-control "
              id="validationServer01"
              value=""
              name="gender"
              required
            />
            <label for="validationServer01" className="user-label">
              Gender
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a your gender.
            </div>
          </div>
          <div className="col-lg-12 position-relative d-flex flex-column mb-1">
            <input
              type="email"
              autocomplete="on"
              className="input form-control "
              id="validationServer01"
              value=""
              name="email"
              required
            />
            <label for="validationServer01" className="user-label">
              Email Address
            </label>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please provide a valid email address.
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <label for="validationServer04" className="form-label">
              State
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="state"
              aria-describedby="validationServer04Feedback"
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="Oyo State">Oyo State</option>
              <option value="Lagos State">Lagos State</option>
            </select>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div className="col-lg-12 position-relative d-flex flex-column mb-3">
            <input
              type="text"
              autocomplete="on"
              className="input form-control "
              id="validationServer01"
              value=""
              name="password"
              required
            />
            <label for="validationServer01" className="user-label">
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
                value=""
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required
              />
              <label className="form-check-label" for="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
