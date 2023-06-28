import React, { useEffect, useState } from "react";
import "./Education.css";
import EducationModal from "../../components/EducationModal";
import axios from "axios";
import { useSelector } from "react-redux";
import EditEducationModal from "../../components/EditEducationModal";

const Education = () => {
  // const globalState = useSelector((state) => state.portalReducer.studentInfo);
  var globalState = useSelector((state) => state.portalReducer.studentInfo);

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [preEdu, setPreEdu] = useState([]);
  const [modalIdValue, setModalIdValue] = useState('');
  const [modalEmailValue, setModalEmailValue] = useState('');
  const [myEmail, setMyEmail] = useState('');
  const [l, setL] = useState('');

  const openModal = () => {
    setModalOpen(true);

  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openEditModal = (myId, myEmail, items) => {
    setModalIdValue(myId)
    setModalEmailValue(myEmail)
    setEditModalOpen(true);
    setL(items)
    console.log(l);
  //   let endpoints = "http://localhost:2000/student_account/edit"
  //  axios.get(endpoints, {
  //   headers: {
  //     Authorization: `${myId} ${myEmail}`,
  //     'Content-Type' : 'application/json'
  //   }
  //  })
  //  .then((response) => {
  //   console.log(response.data.response.previousEducation);
  //  })
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
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
        setMyEmail(response.data.response.email)
      });
  });

  

  const openConfirmDeleteModal = (myId, myEmail) => {
    Swal.fire({
      position: "bottom",
      title: "Do you really want to delete your result?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        container: "my-swal",
        popup: "my-popup",
        title: "my-title",
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(myId, myEmail);
        let endpoint = "http://localhost:2000/student_account/delete";
        axios.delete(endpoint, {
          headers: {
            Authorization: `${myId} ${myEmail}`,
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
                <button type="submit" className="btn btn-white shadow" onClick={()=> {openEditModal(items.id, myEmail, items)}}>
                  edit
                </button>
                <button
                  type="submit"
                  className="btn btn-white shadow"
                  onClick={()=> {openConfirmDeleteModal(items.id, myEmail)}}
                >
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={openModal} className="btn btn-primary">Add Result</button>
      <EducationModal isOpen={modalOpen} onClose={closeModal} />
      <EditEducationModal myId={modalIdValue} myEmail={modalEmailValue} isOpen={editModalOpen}  onClose={closeEditModal} />
    </>
  );
};

export default Education;

// onClick={()=>{del(items.id)}}
