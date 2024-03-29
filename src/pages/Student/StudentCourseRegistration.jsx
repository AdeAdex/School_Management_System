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
import { MultiSelect } from "@mantine/core";

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
    // console.log(formClass, formTerm, formOption, receivedEmail);
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/student_class_subject";
    axios
      .post(endpoint, {
        data: { formClass, formTerm, formOption, receivedEmail },
      })
      .then((res) => {
        setClassSubject(res.data.selectedSubjects);
      })
      .catch((err) => {
        console.log(err);
      });

    
    let endpoint2 =
      "https://school-portal-backend-adex2210.vercel.app/student_account/student_term_subject";
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
      });
  }, [globalState]);

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const selectedSubject = classSubject.find((option) => option === subject);
    if (selectedSubjectsDetails.length > 0) {
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/student_account/student_term_subject";
      axios
        .post(endpoint, {
          selectedSubjectsDetails,
          formTerm,
          formOption,
          receivedEmail,
        })
        .then((response) => {
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
          dispatch(mySubSub(response.data.selectedArray));
        });
    }

    setSubject(""); // Reset the selected subject
  };

  const deleteSelectedSubject = (id) => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/delete_selected_subject";
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
      <div className="w-100 px-2 course-reg-container" style={{height: '100%', backgroundColor: ''}}>
        <div className="d-flex gap-4  py-2">
          <div>Course Registration: </div>
          <div className="fw-bold" ref={divRef}>
            {globalState.level}
          </div>
        </div>
        <div className="" style={{overflowY: 'auto', height: '70%'}}>
          <table className="table table-borderd mt-4">
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
                  <td colSpan="4" className="text-center">
                    No Results Found. Add subjects.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="d-flex shadow p-3 course-reg-form"
          style={{ position: "fixed", bottom: "40px", width: "75%" }}
        >
          <FormControl
            variant="standard"
            className="custom-form-control"
            sx={{ m: 1, width: "80%" }}
          >
            {classSubject ? (
              <MultiSelect
                data={classSubject.map((option, index) => ({
                  label: option,
                  value: option,
                }))}
                label="Your Subject Here"
                placeholder="Pick all that you want to register"
                searchable
                nothingFound="Nothing found"
                onChange={(selectedItems) => {
                  setSelectedSubjectsDetails(selectedItems);
                }}
              />
            ) : null}
          </FormControl>
          <button
            type="submit"
            className="btn btn-primary my-auto add-subject-btn"
          >
            Add Subject
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentCourseRegistration;

