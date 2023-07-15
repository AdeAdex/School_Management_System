import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newName } from "../../redux/portalSlice";
import axios from "axios";
import { useFormik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StudentCourseRegistration = ({ myClass: myClass, myTerm: myTerm, myOption: myOption }) => {
  const [classSubject, setClassSubject] = useState([]);
  const [subject, setSubject] = useState("");
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const divRef = useRef();
  const [selectedSubjectsDetails, setSelectedSubjectsDetails] = useState([]);

  const formContent = myClass;
  const form = ""
  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/student_class_subject";
    axios.post(endpoint, { formContent })
    .then((res) => {
      // console.log(res.data.selectedSubjects);
      setClassSubject(res.data.selectedSubjects);
    });
  }, [globalState]);


  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(subject);
    const selectedSubject = classSubject.find((option) => option === subject);

    if (selectedSubject) {
      setSelectedSubjectsDetails([
        ...selectedSubjectsDetails,
        selectedSubject,
      ]);
      let endpoint = "http://localhost:2000/student_account/student_term_subject"
      axios.post(endpoint, {selectedSubject})
    }

    setSubject(""); // Reset the selected subject
  };

  // let formik = useFormik({
  //   initialValues: {
  //     registerSubject: "",
  //   },

  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <>
      <div>Course Registration</div>
      <div ref={divRef}>{globalState.level}</div>
      <div>
        <table className="table table-borderd">
          <thead>
            <tr>
              <td>Subject Title</td>
              <td>Term</td>
              {/* <td>Class</td> */}
              <td>Options</td>
              <td>Action</td>
            </tr>
          </thead>
          {
            <tbody>
              {selectedSubjectsDetails.map((subject, index) => (
                <tr key={index}>
                  <td>{subject}</td>
                  <td>{subject}</td>
                  <td>Action</td>
                </tr>
              ))}
            </tbody>
          }
        </table>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="d-flex shadow p-3"
        style={{ position: "fixed", bottom: "40px", width: "75%" }}
      >
        <FormControl variant="standard" sx={{ m: 1, width: "80%" }}>
          <InputLabel id="demo-simple-select-standard-label">
            Class Subjects
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={subject}
            onChange={handleChange}
            label="Class Subjects"
            name="registerSubject"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {classSubject
              ? classSubject.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))
              : null}
          </Select>
        </FormControl>
        <button type="submit" className="btn btn-primary my-auto">Add Subject</button>
      </form>
    </>
  );
};

export default StudentCourseRegistration;
