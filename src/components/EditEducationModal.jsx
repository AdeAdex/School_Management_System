
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import Modal from "react-bootstrap/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaTimes } from "react-icons/fa";

const EditEducationModal = ({
  isOpen,
  onClose,
  myId,
  myEmail,
  myResponse,
  myResponse2,
  itemExam,
  itemSubject,
  itemExamNo,
  itemYear,
  itemGrade,
  itemCandidate,
}) => {
  let formik = useFormik({
    initialValues: {
      exam: itemExam || "",
      subject: itemSubject || "",
      grade: itemGrade || "",
      year: itemYear || "",
      examNo: itemExamNo || "",
      candidateNo: itemCandidate || "",
    },

    onSubmit: (values) => {
      let newValues = { ...values, myId: myId, myEmail: myEmail };
      console.log(newValues);
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/student_account/edit";
      axios.put(endpoint, newValues)
      .then((response) => {
        // console.log(response.data.response.previousEducation[index].exam);
      });
    },
  });

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

  return (
    <>
      <Modal show={isOpen} onHide={onClose} animation={true}>
        <Modal.Header className="bg-white text-dark">
          <Modal.Title className="text-uppercase text-center mx-auto">
            edit o level result
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
                    label="exam"
                    name="exam"
                    value={formik.values.exam || itemExam}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="NCEE">NCEE</MenuItem>
                    {/* <MenuItem value="WAEC">WAEC</MenuItem>
                    <MenuItem value="NECO">NECO</MenuItem>
                    <MenuItem value="NABTEB">NABTEB</MenuItem>
                    <MenuItem value="GCE">GCE</MenuItem> */}
                  </Select>
                </FormControl>
              </div>
              <div className="education-input-box">
                <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Subject
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Subject"
                    name="subject"
                    value={formik.values.subject || itemSubject}
                    onChange={formik.handleChange}
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
                <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Grade
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Grade"
                    name="grade"
                    value={formik.values.grade || itemGrade}
                    onChange={formik.handleChange}
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
                <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Year"
                    name="year"
                    value={formik.values.year || itemYear}
                    onChange={formik.handleChange}
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
                  value={formik.values.examNo || itemExamNo}
                />
                <span>Exam No</span>
                <i></i>
              </div>
              <div className="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="candidateNo"
                  onChange={formik.handleChange}
                  value={formik.values.candidateNo || itemCandidate}
                />
                <span>Candidate Number</span>
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
      </Modal>
    </>
  );
};

export default EditEducationModal;
