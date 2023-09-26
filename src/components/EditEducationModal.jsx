// import axios from "axios";
// import { useFormik } from "formik";
// import React, { useEffect, useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import { useSelector } from "react-redux";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { FaTimes } from "react-icons/fa";

// const EditEducationModal = ({
//   isOpen,
//   onClose,
//   myId,
//   myEmail,
//   myResponse,
//   itemExam,
//   itemSubject,
//   itemExamNo,
//   itemYear,
//   itemGrade,
//   itemCandidate,
// }) => {
//   const globalState = useSelector((state) => state.portalReducer.studentInfo);
//   const [itemExam, setItemExam] = useState("");
//   const [itemSubject, setItemSubject] = useState("");
// const [itemGrade, setItemGrade] = useState("");
// const [itemYear, setItemYear] = useState("");
// const [itemExamNo, setItemExamNo] = useState("");
// const [itemCandidateNo, setItemCandidateNo] = useState("");
// const [itemIdentificationNo, setItemIdentificationNo] = useState("");

// const handleExamChange = (e) => {
//   setItemExam(e.target.value);
// };

// const handleSubjectChange = (e) => {
//   setItemSubject(e.target.value);
// };

// const handleGradeChange = (e) => {
//   setItemGrade(e.target.value);
// };

// const handleYearChange = (e) => {
//   setItemYear(e.target.value);
// };

// const handleExamNoChange = (e) => {
//   setItemExamNo(e.target.value);
// };

// const handleCandidateNoChange = (e) => {
//   setItemCandidateNo(e.target.value);
// };

// const handleIdentificationNoChange = (e) => {
//   setItemIdentificationNo(e.target.value);
// };


//   let formik = useFormik({
//     initialValues: {
//       exam: itemExam,
//       subject: itemSubject,
//       grade: itemGrade,
//       year: itemYear,
//       examNo: itemExamNo,
//       candidateNo: itemCandidate,
//       identificationNo: "",
//     },

//     onSubmit: (values) => {
//       let newValues = { ...values, myId: myId, myEmail: myEmail };
//       console.log(newValues);
//       let endpoint =
//         "https://school-portal-backend-adex2210.vercel.app/student_account/edit";
//       axios.put(endpoint, newValues).then((response) => {
//         // console.log(response.data.response.previousEducation[index].exam);
//       });
//     },
//   });

//   const generateYearOptions = () => {
//     const currentYear = new Date().getFullYear();
//     const startYear = 1950;
//     const years = [];

//     // for (let year = startYear; year <= currentYear; year++) {
//     //   years.push(year);
//     // }

//     for (let year = currentYear; year >= startYear; year--) {
//       years.push(year);
//     }

//     return years.map((year) => (
//       <MenuItem key={year} value={year}>
//         {year}
//       </MenuItem>
//     ));
//   };

//   return (
//     <>
//       <Modal show={isOpen} onHide={onClose} animation={true}>
//         <Modal.Header className="bg-white text-dark">
//           <Modal.Title className="text-uppercase text-center mx-auto">
//             edit o level result
//           </Modal.Title>
//           <button
//             type="button"
//             className="btn btn-link text-danger shadow"
//             onClick={onClose}
//           >
//             <FaTimes />
//           </button>
//         </Modal.Header>
//         <Modal.Body className="text-uppercase">
//           <div className="education-login-box">
//             <form
//               className="education-form"
//               action=""
//               method="post"
//               onSubmit={formik.handleSubmit}
//             >
//               <div className="education-input-box">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
//                   <InputLabel id="demo-simple-select-standard-label">
//                     exam
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-standard-label"
//                     id="demo-simple-select-standard"
//                     onChange={formik.handleChange}
//                     label="exam"
//                     name="exam"
//                     value={itemExam || formik.values.exam}
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value="WAEC">WAEC</MenuItem>
//                     <MenuItem value="NECO">NECO</MenuItem>
//                     <MenuItem value="NABTEB">NABTEB</MenuItem>
//                     <MenuItem value="GCE">GCE</MenuItem>
//                   </Select>
//                 </FormControl>
//               </div>
//               <div className="education-input-box">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
//                   <InputLabel id="demo-simple-select-standard-label">
//                     Subject
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-standard-label"
//                     id="demo-simple-select-standard"
//                     onChange={formik.handleChange}
//                     label="Subject"
//                     name="subject"
//                     value={formik.values.subject}
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     {myResponse.map((sub, index) => (
//                       <MenuItem key={index} value={sub.subject}>
//                         {sub.subject}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </div>
//               <div className="education-input-box">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
//                   <InputLabel id="demo-simple-select-standard-label">
//                     Grade
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-standard-label"
//                     id="demo-simple-select-standard"
//                     onChange={formik.handleChange}
//                     label="Grade"
//                     name="grade"
//                     value={formik.values.grade}
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value="A1">A1</MenuItem>
//                     <MenuItem value="B2">B2</MenuItem>
//                     <MenuItem value="B3">B3</MenuItem>
//                     <MenuItem value="C4">C4</MenuItem>
//                     <MenuItem value="C5">C5</MenuItem>
//                     <MenuItem value="C6">C6</MenuItem>
//                     <MenuItem value="D7">D7</MenuItem>
//                     <MenuItem value="E8">E8</MenuItem>
//                     <MenuItem value="F9">F9</MenuItem>
//                   </Select>
//                 </FormControl>
//               </div>
//               <div className="education-input-box">
//                 <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
//                   <InputLabel id="demo-simple-select-standard-label">
//                     Year
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-standard-label"
//                     id="demo-simple-select-standard"
//                     // value={selectedYear}
//                     onChange={formik.handleChange}
//                     label="Year"
//                     name="year"
//                     value={formik.values.year}
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     {generateYearOptions()}
//                   </Select>
//                 </FormControl>
//               </div>
//               <div className="education-input-box">
//                 <input
//                   required="required"
//                   className="education-input"
//                   type="text"
//                   name="examNo"
//                   onChange={formik.handleChange}
//                   value={formik.values.examNo}
//                 />
//                 <span>exam no</span>
//                 <i></i>
//               </div>
//               <div className="education-input-box">
//                 <input
//                   required="required"
//                   className="education-input"
//                   type="text"
//                   name="candidateNo"
//                   onChange={formik.handleChange}
//                   value={formik.values.candidateNo}
//                 />
//                 <span>candidate number</span>
//                 <i></i>
//               </div>
//               <div className="education-input-box">
//                 <input
//                   required="required"
//                   className="education-input"
//                   type="text"
//                   name="identificationNo"
//                   onChange={formik.handleChange}
//                 />
//                 <span>Identification number</span>
//                 <i></i>
//               </div>
//               <button
//                 className="submit-btn bg-primary"
//                 type="submit"
//                 onClick={onClose}
//               >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </Modal.Body>
//         {/* <Modal.Footer>
//           <Button variant="primary">Save Changes</Button>
//         </Modal.Footer> */}
//       </Modal>
//     </>
//   );
// };

// export default EditEducationModal;









import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
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
  itemExam,
  itemSubject,
  itemExamNo,
  itemYear,
  itemGrade,
  itemCandidate,
}) => {
  const [itemExams, setItemExam] = useState("");
  const [itemSubjects, setItemSubject] = useState("");
  const [itemGrades, setItemGrade] = useState("");
  const [itemYears, setItemYear] = useState("");
  const [itemExamNos, setItemExamNo] = useState("");
  const [itemCandidateNos, setItemCandidateNo] = useState("");
  const [itemIdentificationNos, setItemIdentificationNo] = useState("");

  let formik = useFormik({
    initialValues: {
      exam: itemExam,
      subject: itemSubject,
      grade: itemGrade,
      year: itemYear,
      examNo: itemExamNo,
      candidateNo: itemCandidate,
      identificationNo: "",
    },

    onSubmit: (values) => {
      let newValues = { ...values, myId: myId, myEmail: myEmail };
      console.log(newValues);
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/student_account/edit";
      axios.put(endpoint, newValues).then((response) => {
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
                    value={itemExam || formik.values.exam}
                    onChange={formik.handleChange}
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
                <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Subject
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Subject"
                    name="subject"
                    value={itemSubject || formik.values.subject}
                    onChange={formik.handleChange}
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
                <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Grade
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Grade"
                    name="grade"
                    value={itemGrade || formik.values.grade}
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
                    value={itemYear || formik.values.year}
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
                  value={formik.values.examNo}
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
                  value={formik.values.candidateNo}
                />
                <span>Candidate Number</span>
                <i></i>
              </div>
              <div className="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="identificationNo"
                  onChange={formik.handleChange}
                  value={formik.values.identificationNo}
                />
                <span>Identification Number</span>
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
