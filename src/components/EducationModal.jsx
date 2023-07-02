import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EducationModal = ({ isOpen, onClose }) => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  // const [val, setVal] = useState([])

  let formik = useFormik({
    initialValues: {
      exam: "",
      subject: "",
      grade: "",
      year: "",
      examNo: "",
      candidateNo: "",
      receivedEmail: "",
      identificationNo: "",
    },

    onSubmit: (values) => {
      const newValues = {
        ...values,
        receivedEmail: globalState.email,
        id: crypto.randomUUID(),
      };
      let endpoint = "http://localhost:2000/student_account/student_education";
      axios.post(endpoint, newValues).then((response) => {
        // console.log(response);
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
        // setVal(response.data.response.previousEducation)
      });
    },
  });


  // const [grade, setGrade] = useState('');

  // const handleChange = (event) => {
  //   setGrade(event.target.value);
  // };

  const [selectedYear, setSelectedYear] = useState("");

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1950;
    const years = [];

    // for (let year = startYear; year <= currentYear; year++) {
    //   years.push(year);
    // }

    for (let year = currentYear; year >= startYear; year--) {
      years.push(year);
    }

    return years.map((year) => (
      <MenuItem key={year} value={year}>
        {year}
      </MenuItem>
    ));
  };

  return (
    <>
      <Modal show={isOpen} onHide={onClose} animation={true}>
        <Modal.Header className="bg-white text-dark">
          <Modal.Title className="text-uppercase text-center mx-auto">
            o level result
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-uppercase">
          <div className="education-login-box">
            <form
              className="education-form"
              action=""
              method="post"
              onSubmit={formik.handleSubmit}
            >
              <div className="education-input-box">
              <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    exam
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={formik.handleChange}
                    label="exam"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='WAEC'>WAEC</MenuItem>
                    <MenuItem value='NECO'>NECO</MenuItem>
                    <MenuItem value='NABTEB'>NABTEB</MenuItem>
                    <MenuItem value='GCE'>GCE</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="subject"
                  onChange={formik.handleChange}
                />
                <span>subject</span>
                <i></i>
              </div>
              <div className="education-input-box">
                <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Grade
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    // value={10}
                    onChange={formik.handleChange}
                    label="Grade"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='A1'>A1</MenuItem>
                    <MenuItem value='B2'>B2</MenuItem>
                    <MenuItem value='B3'>B3</MenuItem>
                    <MenuItem value='C4'>C4</MenuItem>
                    <MenuItem value='C5'>C5</MenuItem>
                    <MenuItem value='C6'>C6</MenuItem>
                    <MenuItem value='D7'>D7</MenuItem>
                    <MenuItem value='E8'>E8</MenuItem>
                    <MenuItem value='F9'>F9</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="education-input-box">
                <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedYear}
                    onChange={handleChange}
                    label="Year"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {generateYearOptions()}
                  </Select>
                </FormControl>
              </div>
              <div className="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="examNo"
                  onChange={formik.handleChange}
                />
                <span>exam no</span>
                <i></i>
              </div>
              <div className="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="candidateNo"
                  onChange={formik.handleChange}
                />
                <span>candidate number</span>
                <i></i>
              </div>
              <div className="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="identificationNo"
                  onChange={formik.handleChange}
                />
                <span>Identification number</span>
                <i></i>
              </div>
              <button
                className="submit-btn bg-primary"
                type="submit"
                onClick={onClose}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default EducationModal;
