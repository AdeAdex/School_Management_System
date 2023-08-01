import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import UpgradeLevelModal from "../../components/UpgradeLevelModal";

const StaffDashboardHome = () => {
  const [allStudent, setAllStudent] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [personEmail, setPersonEmail] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentTerm, setStudentTerm] = useState("");
  const [studentOption, setStudentOption] = useState("")
  const [room, setRoom] = useState('')

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
        setAllStudent(response.data.response);
        // console.log(response.data.response);
      });
  }, []);

  const upgrade = (personEmail, studentClass, studentTerm, studentOption) => {
    setModalOpen(true);
    setPersonEmail(personEmail);
    setStudentClass(studentClass);
    setStudentTerm(studentTerm);
    setStudentOption(studentOption);
    
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [matchedNames, setMatchedNames] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);


  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter names that match the search term
    const matched = allStudent.filter(student =>
      student.firstName.toLowerCase().includes(term.toLowerCase())
    );
    setMatchedNames(matched);
  };


  const handleSelectStudent = (event) => {
    const selectedFirstName = event.target.value;
    const selectedStudent = allStudent.find(student => student.firstName === selectedFirstName);
    setSelectedStudent(selectedStudent);
  };


  const createRoom = () => {
    let createdDay = new Date().toLocaleDateString("en-GB", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });

    let createdTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    let values = {room, createdDay, createdTime}
    let endpoint = "http://localhost:2000/staff_account/chat_group"
    axios.post(endpoint, {values})
    .then((response) => {

    })
    // console.log(values);
  }

  return (
    <>
      <div className="flex p-5 flex-column w-100">
        <div className="w-100 text-black">Dashbord</div>
        <div className="d-flex flex-column">
      <input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <select onChange={handleSelectStudent}>
      <option value="">Select a student</option>
        {matchedNames.map((student, index) => (
          <option key={index} value={student.firstName}>
            {student.firstName}
          </option>
        ))}
      </select>
    </div>
        <div className="w-100">
          {/* <table className="table table-border table-stripped gap-2 w-100">
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
                    className="btn btn-primary btn-sm"
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
          </table> */}



          {selectedStudent && (
          <table className="table table-border table-stripped gap-2 w-100">
            <thead>
              <tr className="text-uppercase">
                <td>first name</td>
                <td>last name</td>
                <td>email</td>
                <td>matric No</td>
                <td>class</td>
                <td>term</td>
                <td>option</td>
                <td>action</td>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td>{selectedStudent.firstName}</td>
                  <td>{selectedStudent.lastName}</td>
                  <td>{selectedStudent.email}</td>
                  <td>{selectedStudent.matric}</td>
                  <td>{selectedStudent.level}</td>
                  <td>{selectedStudent.term}</td>
                  <td>{selectedStudent.options}</td>
                  <td>
                    <button 
                    className="btn btn-primary btn-sm"
                      onClick={() => {
                        upgrade(selectedStudent.email, selectedStudent.level, selectedStudent.term, selectedStudent.options);
                      }}
                    >
                      Upgrade
                    </button>
                  </td>
                </tr>
              </tbody>
          </table>

      )}


          {/* {selectedStudent && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedStudent.firstName}</td>
              <td>{selectedStudent.lastName}</td>
              <td>{selectedStudent.email}</td>
            </tr>
          </tbody>
        </table>
      )} */}
        </div>
        <div className="w-100 mt-4">
          <div>Create Group</div>
          <div>
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={createRoom}>Create Room</button>
          </div>
        </div>
        <UpgradeLevelModal
          isOpen={modalOpen}
          personEmail={personEmail}
          studentClass={studentClass}
          studentTerm={studentTerm}
          studentOption={studentOption}
          onClose={closeModal}
        />
      </div>
    </>
  );
};

export default StaffDashboardHome;

