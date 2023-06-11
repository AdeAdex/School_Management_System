import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";

const EducationModal = ({ isOpen, onClose }) => {
  let formik = useFormik({
    initialValues: {
      exam: "",
      subject: "",
      grade: "",
      year: "",
      examNo: "",
      candidateNo: "",
    },

    onSubmit: (values) => {
        console.log(values);
    }
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
          <div class="education-login-box">
            <form className="education-form" action="" method="post" onSubmit={formik.handleSubmit}>
              <div class="education-input-box">
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
              <div class="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="subject"
                />
                <span>subject</span>
                <i></i>
              </div>
              <div class="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="grade"
                />
                <span>grade</span>
                <i></i>
              </div>
              <div class="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="year"
                />
                <span>year</span>
                <i></i>
              </div>
              <div class="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="examNo"
                />
                <span>exam no</span>
                <i></i>
              </div>
              <div class="education-input-box">
                <input
                  required="required"
                  className="education-input"
                  type="text"
                  name="candidateNo"
                />
                <span>candidate number</span>
                <i></i>
              </div>
              <a className="submit-btn bg-primary" type="submit" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
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
