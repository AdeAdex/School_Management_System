import React, { useEffect, useState } from "react";
import "./Education.css";
import EducationModal from "../../components/EducationModal";
import axios from "axios";
import { useSelector } from "react-redux";

const Education = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [modalOpen, setModalOpen] = useState(false);
  const [preEdu, setPreEdu] = useState([]);
  const [myIndex, setMyIndex] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    let studentLoginToken = localStorage.studentLoginToken;
    let endpoint = "http://localhost:2000/student_account/student_education";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${studentLoginToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setPreEdu(response.data.response.previousEducation);
      });
  });

  const openConfirmDeleteModal = (myId) => {
    Swal.fire({
      title: "Do you really want to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(myId);
        let endpoint = "http://localhost:2000/student_account/delete";
        axios.delete(endpoint, {
          headers: {
            Authorization: `${myId}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
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
          } else {

          }
         
        })
        
      }
    });
  };

  // const del = (myId) => {
  //   console.log(myId);
  //   let endpoint = "http://localhost:2000/student_account/delete";
  //   axios.delete(endpoint, {
  //     headers: {
  //       Authorization: `${myId}`,
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   // .then((response) => {

  //   // })
  // };

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
        {preEdu.map((items, index) => (
          <tbody key={index}>
            <tr className="text-uppercase">
              <td>{items.exam}</td>
              <td>{items.subject}</td>
              <td>{items.examNo}</td>
              <td>{items.year}</td>
              <td>{items.grade}</td>
              <td>{items.candidateNo}</td>
              <td className="d-flex gap-2">
                <button type="submit" className="btn btn-white shadow">
                  edit
                </button>
                <button
                  type="submit"
                  className="btn btn-white shadow"
                  onClick={()=> {openConfirmDeleteModal(items.id)}}
                >
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={openModal}>Add Result</button>
      <EducationModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};

export default Education;

// onClick={()=>{del(items.id)}}
