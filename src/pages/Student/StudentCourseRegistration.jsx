import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mySubSub, newName } from "../../redux/portalSlice";
import axios from "axios";
import { useFormik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const StudentCourseRegistration = () => {
  const [classSubject, setClassSubject] = useState([]);
  const [subject, setSubject] = useState("");
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const globalState2 = useSelector((state) => state.portalReducer.mySubSub);
  const divRef = useRef();
  const [selectedSubjectsDetails, setSelectedSubjectsDetails] = useState([]);
  // const location = useLocation();
  // const { myEmail, myClass, myTerm, myOption } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const receivedEmail = globalState.email;
  const formClass = globalState.level;
  const formTerm = globalState.term;
  const formOption = globalState.options;

  const [yhea, setYhea] = useState([]);

  useEffect(() => {
    console.log(formClass, formTerm, formOption, receivedEmail);
    // let endpoint =
    //   "https://school-portal-backend-adex2210.vercel.app/staff_account/student_class_subject";
    // axios
    //   .post(endpoint, {
    //     data: { formClass, formTerm, formOption, receivedEmail },
    //   })
    //   .then((res) => {
    //     setClassSubject(res.data.selectedSubjects);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // https://school-portal-backend-adex2210.vercel.app
    let endpoint2 =
      "http://localhost:2000/student_account/student_term_subject";
    axios
      .get(endpoint2, {
        params: {
          receivedEmail,
          formClass,
          formTerm,
          formOption,
        },
      })
      .then((response) => {
        setYhea(response.data);
        // console.log(response.data);
      });
  }, [globalState]);

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedSubject = classSubject.find((option) => option === subject);

    if (selectedSubject) {
      setSelectedSubjectsDetails([...selectedSubjectsDetails, selectedSubject]);
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/student_account/student_term_subject";
      axios
        .post(endpoint, {
          selectedSubject,
          formTerm,
          formOption,
          receivedEmail,
        })
        .then((response) => {
          console.log(response.data.selectedArray);
          dispatch(mySubSub(response.data.selectedArray));
        });
    }

    setSubject(""); // Reset the selected subject
  };

  const deleteSelectedSubject = (id) => {
    let endpoint =
      "http://localhost:2000/student_account/delete_selected_subject";
    axios
      .delete(endpoint, {
        data: { id, formClass, formTerm, formOption, receivedEmail },
      })
      .then((response) => {
        console.log(response.data.message);
      });
  };

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
              <td>Options</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {yhea && yhea.length > 0 ? (
              yhea.map((subject, index) => (
                <tr key={index}>
                  <td>{subject.mySubject}</td>
                  <td>{subject.newTerm}</td>
                  <td>{subject.myOption}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-white shadow delete-btn"
                      onClick={() => deleteSelectedSubject(subject._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No Results Found. Add subjects.</td>
              </tr>
            )}
          </tbody>
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
        <button type="submit" className="btn btn-primary my-auto">
          Add Subject
        </button>
      </form>
    </>
  );
};

export default StudentCourseRegistration;
