import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

const EditEducationModal = ({ isOpen, onClose }) => {
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
      identificationNo: "",
    },

    onSubmit: (values) => {
        console.log(values);
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
                <span>candidate number</span>
                <i></i>
              </div>
              <button
                className="submit-btn bg-primary"
                type="submit"
                
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
