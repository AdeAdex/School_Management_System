import React, { useEffect, useState } from "react";
import "./Education.css";
import EducationModal from "../../components/EducationModal";
import axios from "axios";
import { useSelector } from "react-redux";


const Education = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [modalOpen, setModalOpen] = useState(false);
  const [preEdu, setPreEdu] = useState([])

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // console.log(globalState.email);
    // let myEmail = globalState.email
    let endpoint = "http://localhost:2000/student_account/student_education"
    axios.get(endpoint)
    .then((response) => {
      // console.log(response.data.response.previousEducation);
      setPreEdu(response.data.response.previousEducation)

    })

  },)
  


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
      { preEdu.map((items, index) => (
      <tbody key={index}>
        <tr className="text-uppercase">
          <td>{items.exam}</td>
          <td>{items.subject}</td>
          <td>{items.examNo}</td>
          <td>{items.year}</td>
          <td>{items.grade}</td>
          <td>{items.candidateNo}</td>
        </tr>
      </tbody>
      ))
      }
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