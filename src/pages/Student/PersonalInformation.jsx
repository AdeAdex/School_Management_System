import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./StudentSignUp.css";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PersonalInformation = () => {
  let navigate = useNavigate();
  const [allCountry, setAllCountry] = useState([]);
  const [statesForCountry, setStatesForCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let globalState = useSelector((state) => state.portalReducer.studentInfo);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;

    // Find the selected country's states from the fetched data
    const selectedCountryData = allCountry.find(
      (countryData) => countryData.country === selectedCountry
    );

    // If the selectedCountryData is found, set the states
    if (selectedCountryData) {
      setStatesForCountry(selectedCountryData.states);
    } else {
      // If the selectedCountryData is not found, clear the states
      setStatesForCountry([]);
    }
  };

  let formik = useFormik({
    initialValues: {
      firstName: globalState.firstName,
      lastName: globalState.lastName,
      email: globalState.email,
      phoneNumber: globalState.phoneNumber,
      middleName: globalState.middleName,
      address: globalState.address,
      myTitle: globalState.myTitle,
      city: globalState.city,
      age: globalState.age,
      gender: globalState.gender,
      state: globalState.state,
      country: globalState.country,
    },

    onSubmit: (values) => {
      setIsLoading(true);
      globalState = { ...globalState, ...values };
      const endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/student_update";
      axios.post(endpoint, globalState).then((response) => {
        setIsLoading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: response.data.message,
        });
        navigate("/student/admission/personal_information");
      });
    },
  });

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/countries";
    axios
      .get(endpoint)
      .then((response) => {
        setAllCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <>
      <form
        className="row  g-3 mt-4"
        action=""
        method="post"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-sm-12 col-md-6 position-relative  flex-column mb-3">
          <input
            type="text"
            autoComplete="on"
            className={
              formik.touched.firstName && formik.errors.firstName
                ? "input form-control is-invalid"
                : "input form-control is-vali"
            }
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
            className={
              formik.touched.lastName && formik.errors.lastName
                ? "input form-control is-invalid"
                : "input form-control"
            }
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
            className={
              formik.touched.middleName && formik.errors.middleName
                ? "input form-control is-invalid"
                : "input form-control"
            }
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
          <div className="invalid-feedback">
            Please provide your Middlename!
          </div>
        </div>
        <div className="col-lg-6 position-relative  flex-column mb-3">
          <input
            type="email"
            autoComplete="on"
            className={
              formik.touched.email && formik.errors.email
                ? "input form-control is-invalid"
                : "input form-control"
            }
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
        <div className="col-md-6 position-relative  flex-column mb-3">
          <input
            type="tel"
            autoComplete="on"
            className={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "input form-control is-invalid"
                : "input form-control"
            }
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
            autoComplete="on"
            className={
              formik.touched.myTitle && formik.errors.myTitle
                ? "input form-control is-invalid"
                : "input form-control"
            }
            id=""
            name="myTitle"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.myTitle}
          />
          <label htmlFor="validationServer01" className="user-label">
            Title
          </label>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please provide a valid Title.
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <FormControl sx={{ m: 0, width: "100%" }} size="small">
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              labelId="country-label"
              id="country-select"
              value={formik.values.country}
              label="Country"
              onChange={(e) => {
                handleCountryChange(e); // Call the custom event handler
                formik.handleChange(e); // Call formik's handleChange
              }}
              name="country"
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {allCountry
                .slice() // Create a copy to avoid modifying the original array
                .sort((a, b) => a.country.localeCompare(b.country)) // Sort alphabetically
                .map((eachCountry, index) => (
                  <MenuItem key={eachCountry.id} value={eachCountry.country}>
                    {eachCountry.country}
                  </MenuItem>
                ))}
            </Select>
            {formik.touched.country && Boolean(formik.errors.country) ? (
              <small className="error text-danger">
                {formik.errors.country}
              </small>
            ) : null}
          </FormControl>
        </div>
        <div className="col-md-6 mb-3">
          <FormControl sx={{ m: 0, width: "100%" }} size="small">
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="state-select"
              value={formik.values.state}
              label="State"
              onChange={formik.handleChange}
              name="state"
              onBlur={formik.handleBlur}
              error={formik.touched.state && Boolean(formik.errors.state)}
            >
              {statesForCountry.length === 0 && formik.values.state ? (
                <MenuItem value={formik.values.state}>
                  {formik.values.state}
                </MenuItem>
              ) : null}
              {statesForCountry
                .slice() // Create a copy to avoid modifying the original array
                .sort() // Sort the array alphabetically
                .map((selectedState) => (
                  <MenuItem key={selectedState} value={selectedState}>
                    {selectedState}
                  </MenuItem>
                ))}
            </Select>
            {formik.touched.state && Boolean(formik.errors.state) ? (
              <small className="error text-danger">{formik.errors.state}</small>
            ) : null}
          </FormControl>
        </div>
        <div className="col-md-6 position-relative d-flex flex-column mb-3">
          <input
            type="text"
            autoComplete="on"
            className={
              formik.touched.city && formik.errors.city
                ? "input form-control is-invalid"
                : "input form-control"
            }
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
        <div className="col-md-6 position-relative  flex-column mb-3">
          <input
            type="text"
            autoComplete="on"
            className={
              formik.touched.address && formik.errors.address
                ? "input form-control is-invalid"
                : "input form-control"
            }
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
            type="number"
            autoComplete="on"
            className={
              formik.touched.age && formik.errors.age
                ? "input form-control is-invalid"
                : "input form-control"
            }
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
        <div className="col-md-6 mb-3">
          <FormControl sx={{ m: 0, width: "100%" }} size="small">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              value={formik.values.gender}
              label="Gender"
              onChange={formik.handleChange}
              name="gender"
              onBlur={formik.handleBlur}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
            {formik.touched.gender && Boolean(formik.errors.gender) ? (
              <small className="error text-danger">
                {formik.errors.gender}
              </small>
            ) : null}
          </FormControl>
        </div>

        <div className="col-12">
          <button
            className={`btn btn-primary signup-btn ${
              isLoading ? "px-1" : "px-5"
            }`}
            type="submit"
          >
            {isLoading ? <div className="spinner"></div> : <div>Save</div>}
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInformation;
