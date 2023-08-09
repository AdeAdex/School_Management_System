import { useFormik } from "formik";
import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const UpgradeLevelModal = ({
  isOpen,
  onClose,
  personEmail,
  studentClass,
  studentTerm,
  studentOption
}) => {
  let formik = useFormik({
    initialValues: {
      studentNewClass: "",
      studentNewOptions: ""
    },
    // https://school-portal-backend-adex2210.vercel.app

    onSubmit: (values) => {
      let studentEmail = personEmail;
      // let student;
      let newValues = { ...values, studentEmail };
      console.log(newValues);
      let endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/upgrade_level";
      axios.post(endpoint, newValues)
      .then((response) => {
        if (response.status) {
          // console.log(response.data.message);
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
        }
      });
      onClose(true);
    },
  });
  return (
    <>
      <div className="d-flex mx-auto w-100 bg-danger">
        <Modal show={isOpen} onHide={onClose} animation={true} className="mx-auto">
          <Modal.Header className="bg-white text-dark">
            <Modal.Title className="text-uppercase text-center mx-auto">
              upgrade class
              <div className="" style={{fontSize: '12px'}}>current Class: {studentClass}</div>
              <div className="" style={{fontSize: '12px'}}>current term: {studentTerm}</div>
              <div className="" style={{fontSize: '12px'}}>current option: {studentOption}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-uppercase">
            <div>
              <form action="" onSubmit={formik.handleSubmit}>
                {/* <div className="col-md-12 mb-3">
                <label
                  htmlFor="validationServer04"
                  className="form-label fw-bold text-secondary"
                >
                  class type
                </label>
                <select
                  className="form-select "
                  id="validationServer04"
                  name="classType"
                  aria-describedby="validationServer04Feedback"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option disabled>Choose...</option>
                  <option value={1}>JSS 1</option>
                  <option value={2}>JSS 2</option>
                  <option value={3}>JSS 3</option>
                </select>
                <div
                  id="validationServer04Feedback"
                  className="invalid-feedback"
                >
                  Please select a valid state.
                </div>
              </div> */}
                <div className="col-md-12 mb-3">
                  <label
                    htmlFor="validationServer04"
                    className="form-label fw-bold text-secondary"
                  >
                    class
                  </label>
                  <select
                    className="form-select "
                    id="validationServer04"
                    name="studentNewClass"
                    aria-describedby="validationServer04Feedback"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    //   value={studentClass}
                  >
                    <option disabled>Choose...</option>
                    <option value="JSS 1">JSS 1</option>
                    <option value="JSS 2">JSS 2</option>
                    <option value="JSS 3">JSS 3</option>
                    <option value="SSS 1">SSS 1</option>
                    <option value="SSS 2">SSS 2</option>
                    <option value="SSS 3">SSS 3</option>
                  </select>
                  <div
                    id="validationServer04Feedback"
                    className="invalid-feedback"
                  >
                    Please select a valid state.
                  </div>
                </div>

                {formik.values.studentNewClass === "SSS 1" ||
              formik.values.studentNewClass === "SSS 2" ||
              formik.values.studentNewClass === "SSS 3" ? (
                <div className="col-md-12 mb-3">
                  <label
                    htmlFor="validationServer04"
                    className="form-label fw-bold text-secondary"
                  >
                    Options
                  </label>
                  <select
                    className="form-select"
                    id="validationServer04"
                    name="studentNewOptions"
                    aria-describedby="validationServer04Feedback"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option disabled>Choose...</option>
                    <option value="Science">Science Option</option>
                    <option value="Commercial">Commercial Option</option>
                    <option value="Art">Art Option</option>
                  </select>
                </div>
              ) : null}
                <button type="submit" className="btn btn-success">
                  Confirm
                </button>
              </form>
            </div>
            <div></div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default UpgradeLevelModal;
