import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

const EditEducationModal = ({ isOpen, onClose, myId}) => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);



  let formik = useFormik({
    initialValues: {
      exam: "",
      subject: "",
      grade: "",
      year: "",
      examNo: "",
      candidateNo: "",
      identificationNo: "",
    },

    onSubmit: (values) => {
        let newValues = {...values, myId: myId}
        console.log(newValues);
        let endpoint = "http://localhost:2000/student_account/edit";
        axios.put(endpoint, newValues)
        .then((response) => {
          console.log(response.data.response);
        })
    },
  });

  return (
    <>
      <Modal show={isOpen} onHide={onClose} animation={true}>
        <Modal.Header className="bg-white text-dark">
          <Modal.Title className="text-uppercase text-center mx-auto">
            edit o level result
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

export default EditEducationModal;