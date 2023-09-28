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
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const EducationModal = ({ isOpen, onClose, myResponse, myResponse2 }) => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      exam: "",
      subject: "",
      grade: "",
      year: "",
      examNo: "",
      candidateNo: "",
      receivedEmail: "",
    },

    onSubmit: (values) => {
      const newValues = {
        ...values,
        receivedEmail: globalState.email,
        id: crypto.randomUUID(),
      };
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/student_account/student_education";
      axios.post(endpoint, newValues).then((response) => {
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
      });
      navigate("/student/admission/education");
    },
  });

  const [selectedYear, setSelectedYear] = useState("");

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1950;
    const years = [];

    for (let year = currentYear; year >= startYear; year--) {
      years.push(year);
    }

    return years.map((year) => (
      <MenuItem key={year} value={year}>
        {year}
      </MenuItem>
    ));
  };

  const [selectedExam, setSelectedExam] = useState("");

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  return (
    <>
      <Modal show={isOpen} onHide={onClose} animation={true}>
        <Modal.Header className="bg-white text-dark">
          <Modal.Title className="text-uppercase text-center mx-auto">
            {selectedExam === "NCEE" ? (
              <span>Common Entrance</span>
            ) : (
              <span> o level result</span>
            )}
          </Modal.Title>
          <button
            type="button"
            className="btn btn-link text-danger shadow"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </Modal.Header>
        <Modal.Body className="text-uppercase">
          <select
            name="exam"
            id="examSelect"
            value={selectedExam}
            onChange={handleExamChange}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              width: "100%",
            }}
          >
            <option value="">Select an exam</option>
            <option value="NCEE">
              Nigerian Common Entrance Examination (NCEE)
            </option>
            <option value="UTME">
              University Tertiary Matriculation Examination
            </option>
          </select>

          {selectedExam === "NCEE" ? (
            <div className="education-login-box">
              <form
                className="education-form"
                action=""
                method="post"
                onSubmit={formik.handleSubmit}
              >
                <div className="education-input-box">
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      exam
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      onChange={formik.handleChange}
                      label="exam"
                      name="exam"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="WAEC">NCEE</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="education-input-box">
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Subject
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      // value={selectedYear}
                      onChange={formik.handleChange}
                      label="Subject"
                      name="subject"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {myResponse2.map((sub, index) => (
                        <MenuItem key={index} value={sub.subject}>
                          {sub.subject}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="education-input-box">
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Grade
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      // value={10}
                      onChange={formik.handleChange}
                      label="Grade"
                      name="grade"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="A1">A1</MenuItem>
                      <MenuItem value="B2">B2</MenuItem>
                      <MenuItem value="B3">B3</MenuItem>
                      <MenuItem value="C4">C4</MenuItem>
                      <MenuItem value="C5">C5</MenuItem>
                      <MenuItem value="C6">C6</MenuItem>
                      <MenuItem value="D7">D7</MenuItem>
                      <MenuItem value="E8">E8</MenuItem>
                      <MenuItem value="F9">F9</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="education-input-box">
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Year
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      // value={selectedYear}
                      onChange={formik.handleChange}
                      label="Year"
                      name="year"
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
          ) : selectedExam === "UTME" ? (
            <div className="education-login-box">
              <form
                className="education-form"
                action=""
                method="post"
                onSubmit={formik.handleSubmit}
              >
                <div className="education-input-box">
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      exam
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      onChange={formik.handleChange}
                      label="exam"
                      name="exam"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="WAEC">WAEC</MenuItem>
                      <MenuItem value="NECO">NECO</MenuItem>
                      <MenuItem value="NABTEB">NABTEB</MenuItem>
                      <MenuItem value="GCE">GCE</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="education-input-box">
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Subject
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      // value={selectedYear}
                      onChange={formik.handleChange}
                      label="Subject"
                      name="subject"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {myResponse.map((sub, index) => (
                        <MenuItem key={index} value={sub.subject}>
                          {sub.subject}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="education-input-box">
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Grade
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      // value={10}
                      onChange={formik.handleChange}
                      label="Grade"
                      name="grade"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="A1">A1</MenuItem>
                      <MenuItem value="B2">B2</MenuItem>
                      <MenuItem value="B3">B3</MenuItem>
                      <MenuItem value="C4">C4</MenuItem>
                      <MenuItem value="C5">C5</MenuItem>
                      <MenuItem value="C6">C6</MenuItem>
                      <MenuItem value="D7">D7</MenuItem>
                      <MenuItem value="E8">E8</MenuItem>
                      <MenuItem value="F9">F9</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="education-input-box">
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Year
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      // value={selectedYear}
                      onChange={formik.handleChange}
                      label="Year"
                      name="year"
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
          ) : (
            <p>Please select an exam</p>
          )}
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default EducationModal;
