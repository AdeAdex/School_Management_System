import React, { useEffect, useState } from "react";
import "./Education.css";
import EducationModal from "../../components/EducationModal";


const Education = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [preEdu, setPreEdu] = useState([])

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setPreEdu(response.data.response.previousEducation)
    console.log(response.data.response.previousEducation[0].exam);
  }, [])
  


  return (
    <>
    <table className="table table-borderd table-striped">
      <thead>
        <tr className="text-uppercase">
          <td>exam</td>
          <td>subject</td>
          <td>examNo</td>
          <td>year</td>
          <td>grade</td>
          <td>candidateNo</td>
        </tr>
      </thead>
      <tbody>
        <tr className="text-uppercase">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
      <button onClick={openModal}>Add Result</button>
      <EducationModal isOpen={modalOpen} onClose={closeModal}/>
    </>
  );
};

export default Education;


{/* <div class="education-login-box">
        <form className="education-form">
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>exam</span>
            <i></i>
          </div>
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>subject</span>
            <i></i>
          </div>
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>grade</span>
            <i></i>
          </div>
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>year</span>
            <i></i>
          </div>
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>exam no</span>
            <i></i>
          </div>
          <div class="education-input-box">
            <input required="required" className="education-input" type="text" />
            <span>candidate number</span>
            <i></i>
          </div>
          <a className="submit-btn bg-primary" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div> */}