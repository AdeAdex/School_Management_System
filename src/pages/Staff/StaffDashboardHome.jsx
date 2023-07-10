import React, { useEffect, useState } from "react";
import DashboardCalendar from "../../components/dashboardComponents/DashboardCalendar";
import DashboardPieChart from "../../components/dashboardComponents/DashboardPieChart";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import UpgradeLevelModal from "../../components/UpgradeLevelModal";

const StaffDashboardHome = () => {
  const [allStudent, setAllStudent] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [personEmail, setPersonEmail] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [classPrefix, setClassPrefix] = useState("");

  useEffect(() => {
    let endpoint = "http://localhost:2000/student_account/allStudent";
    axios
      .get(endpoint, {
        headers: {
          authorization: `Bearer`,
          contentType: "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data);
        setAllStudent(response.data.response);
      });
  }, []);

  const upgrade = (personEmail, studentClass, classPrefix) => {
    setModalOpen(true);
    setPersonEmail(personEmail);
    setStudentClass(studentClass);
    setClassPrefix(classPrefix);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex p-5 flex-column w-100">
        <div className="w-100 text-black">Dashbord</div>
        <div className="w-100">
          <table className="table table-border table-stripped gap-2 w-100">
            <thead>
              <tr className="text-uppercase">
                <td>first name</td>
                <td>last name</td>
                <td>email</td>
                <td>matric No</td>
                <td>class</td>
                <td>action</td>
              </tr>
            </thead>
            {allStudent.map((student, index) => (
              <tbody key={index}>
                <tr>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.matric}</td>
                  <td>{student.level}</td>
                  <td>
                    <button
                      onClick={() => {
                        upgrade(student.email, student.level, student.prefix);
                      }}
                    >
                      Upgrade
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <UpgradeLevelModal
          isOpen={modalOpen}
          personEmail={personEmail}
          studentClass={studentClass}
          classPrefix={classPrefix}
          onClose={closeModal}
        />
      </div>
    </>
  );
};

export default StaffDashboardHome;
