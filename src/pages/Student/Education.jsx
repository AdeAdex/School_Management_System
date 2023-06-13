import React, { useEffect, useState } from "react";
import "./Education.css";
import EducationModal from "../../components/EducationModal";
import axios from "axios";
import { useSelector } from "react-redux";


const Education = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [modalOpen, setModalOpen] = useState(false);
  const [preEdu, setPreEdu] = useState([])
  const [myIndex, setMyIndex] = useState("")

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    let studentLoginToken = localStorage.studentLoginToken;
    let endpoint = "http://localhost:2000/student_account/student_education"
    axios
    .get(endpoint, {
      headers: {
        Authorization: `Bearer ${studentLoginToken}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then((response) => {
      setPreEdu(response.data.response.previousEducation)

    })

  },)
  

  const del = (myId) => {
    console.log(myId);
    let endpoint = "http://localhost:2000/student_account/delete"
    axios.post(endpoint, myId)
    .then((response) => {

    })
    // alert("ID:" + myId)
  }

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
          <td>options</td>
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
          <td className="d-flex gap-2">
            <button type="submit" className="btn btn-white shadow" >edit</button>
            <button type="submit" className="btn btn-white shadow" onClick={()=>{del(items.id)}}>delete</button>
          </td>
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
