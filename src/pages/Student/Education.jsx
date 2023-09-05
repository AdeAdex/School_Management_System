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
  const [modalIdValue, setModalIdValue] = useState("");
  const [modalEmailValue, setModalEmailValue] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [l, setL] = useState("");
  const [subject, setSubject] = useState([]);
  const [description, setDescription] = useState('')

  const openModal = () => {
    let endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/student_subject";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `hello`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setModalOpen(true);
        setSubject(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openEditModal = (myId, myEmail, items) => {
    setModalIdValue(myId);
    setModalEmailValue(myEmail);
    setEditModalOpen(true);
    setL(items);
    //  axios.get(endpoints, {
    //   headers: {
    //     Authorization: `${myId} ${myEmail}`,
    //     'Content-Type' : 'application/json'
    //   }
    //  })
    //  .then((response) => {
    //   console.log(response.data.response.previousEducation);
    //  })

    let endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/student_subject";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `hello`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSubject(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  useEffect(() => {
    let studentLoginToken = localStorage.studentLoginToken;
    let endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/student_education";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${studentLoginToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.data.status) {
          setPreEdu(response.data.response);
          setMyEmail(response.data.response2.email);
          setDescription('')
        } else {
          // const timeout = setTimeout(() => {
          // setDescription(response.data.message)
          // }, 5000);
          // return () => clearTimeout(timeout);
          setDescription(response.data.message)
          setPreEdu([])
        }
        
      })
      .catch((err) => {
        console.log(err);
      })
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
      },
    }).then((result) => {
      if (result.isConfirmed) {
        let endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/delete";
        axios
          .delete(endpoint, {
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
            } 
          });
      }
    });
  };

  return (
    <>
      <table className="table gap-2">
        <thead className="text-white table-head mb-3">
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
          <tbody key={index} className="tbody">
            <tr className="text-uppercase table-tr">
              <td>{items.exam}</td>
              <td>{items.subject}</td>
              <td>{items.examNo}</td>
              <td>{items.year}</td>
              <td>{items.grade}</td>
              <td>{items.candidateNo}</td>
              <td className="d-flex gap-2">
                <button
                  type="submit"
                  className="btn btn-white shadow edit-btn"
                  onClick={() => {
                    openEditModal(items.id, myEmail, items);
                  }}
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className="btn btn-white shadow delete-btn"
                  onClick={() => {
                    openConfirmDeleteModal(items.id, myEmail);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="text-center">{description}</div>
      
      <button onClick={openModal} className="btn btn-primary" style={{marginTop: '200px'}}>
        Add Result
      </button>
      <EducationModal isOpen={modalOpen} myResponse={subject}  onClose={closeModal} />
      <EditEducationModal
        myResponse={subject}
        myId={modalIdValue}
        myEmail={modalEmailValue}
        isOpen={editModalOpen}
        onClose={closeEditModal}
      />
    </>
  );
};

export default Education;

