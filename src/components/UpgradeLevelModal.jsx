import { useFormik } from "formik";
import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const UpgradeLevelModal = ({
  isOpen,
  onClose,
  personEmail,
  studentClass,
  classPrefix,
}) => {
  let formik = useFormik({
    initialValues: {
      //       classType: "",
      class: "",
    },

    onSubmit: (values) => {
      let studentEmail = personEmail;
      let newValues = { ...values, studentEmail };
//       console.log(newValues);
      let endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/upgrade_level";
      axios.post(endpoint, newValues)
      .then((response) => {
        if (response.status) {
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
      onClose(false);
    },
  });
  return (
    <>
      <div>
        <Modal show={isOpen} onHide={onClose} animation={true}>
          <Modal.Header className="bg-white text-dark">
            <Modal.Title className="text-uppercase text-center mx-auto">
              upgrade class
              <div>Present Class: {studentClass}</div>
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
                    name="class"
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
