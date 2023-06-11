import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";

const EducationModal = ({ isOpen, onClose }) => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

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
      const newValues = { ...values, receivedEmail: globalState.email };
      console.log(newValues);
      let endpoint = "http://localhost:2000/student_account/student_education";
      axios.post(endpoint, newValues)
      .then((response) => {
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
        // console.log(response.data.response.previousEducation[0].exam);
      });
    },
  });

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
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="exam"
                  onChange={formik.handleChange}
                />
                <span>exam</span>
                <i></i>
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
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="grade"
                  onChange={formik.handleChange}
                />
                <span>grade</span>
                <i></i>
              </div>
              <div className="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="year"
                  onChange={formik.handleChange}
                />
                <span>year</span>
                <i></i>
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
              <button className="submit-btn bg-primary" type="submit" href="#">
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
