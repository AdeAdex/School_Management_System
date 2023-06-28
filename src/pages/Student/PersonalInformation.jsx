import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./StudentSignUp.css";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PersonalInformation = () => {
  let navigate = useNavigate();
  useEffect(() => {}, []);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  var globalState = useSelector((state) => state.portalReducer.studentInfo);
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
      globalState = { ...globalState, ...values };
      console.log(globalState);
      // console.log(values);
      const endpoint = "http://localhost:2000/student_account/student_update";
      axios.post(endpoint, globalState).then((response) => {
        console.log(response);
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
        <div className="col-md-6 position-relative d-flex flex-column mb-3">
          <input
            type="text"
            autoComplete="on"
            className={
              formik.touched.gender && formik.errors.gender
                ? "input form-control is-invalid"
                : "input form-control"
            }
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

        <div className="col-md-6 mb-3">
          {/* <label htmlFor="validationServer04" className="user-label">
            State
          </label>
          <select
            autoComplete="on"
            className="form-select "
            id="validationServer04"
            name="state"
            aria-describedby="validationServer04Feedback"
            required
            onChange={formik.handleChange}
            value={formik.values.state}
          >
            <option disabled>Choose...</option>
            <option value="Oyo State">Oyo State</option>
            <option value="Lagos State">Lagos State</option>
          </select>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please select a valid state.
          </div> */}

          <InputLabel id="demo-select-small-label">Age</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="validationServer04" className="user-label">
            Country
          </label>
          <select
            autoComplete="on"
            className="form-select "
            id="validationServer04"
            name="country"
            aria-describedby="validationServer04Feedback"
            required
            onChange={formik.handleChange}
            value={formik.values.country}
          >
            <option disabled>Choose...</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Uk">United Kingdom</option>
            <option value="USA">United State of America</option>
            <option value="Canada">Canada</option>
          </select>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary signup-btn px-5" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInformation;
