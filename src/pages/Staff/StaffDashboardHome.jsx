import React, { useEffect, useState } from "react";
import axios from "axios";
// import Modal from "react-bootstrap/Modal";
import UpgradeLevelModal from "../../components/UpgradeLevelModal";
import { SnackbarProvider, useSnackbar } from "notistack";
import ConfirmAdmissionPaymentModal from "../../components/ConfirmAdmissionPaymentModal";

const StaffDashboardHome = () => {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <MyApp />
    </SnackbarProvider>
  );
};

function MyApp() {
  const [allStudent, setAllStudent] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [personEmail, setPersonEmail] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentTerm, setStudentTerm] = useState("");
  const [studentOption, setStudentOption] = useState("");
  const [room, setRoom] = useState("");
  const [myImage, setMyImage] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [studentFirstName, setStudentFirstName] = useState("")
  const [studentAdmissionState, setStudentAdmissionState] = useState("")
  const [] = useState("")

  const [dialogOpen, setDialogOpen] = useState(false);

  const confirmAdmissionPayment = (studentFirstName, personEmail, studentAdmissionState) => {
    setDialogOpen(true);
    setStudentFirstName(studentFirstName)
    setPersonEmail(personEmail);
    setStudentAdmissionState(studentAdmissionState)
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/allStudent";
    axios
      .get(endpoint, {
        headers: {
          authorization: `Bearer`,
          contentType: "application/json",
        },
      })
      .then((response) => {
        setAllStudent(response.data.response);
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

  const [searchTerm, setSearchTerm] = useState("");
  const [matchedNames, setMatchedNames] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter names that match the search term
    const matched = allStudent.filter((student) =>
      student.firstName.toLowerCase().includes(term.toLowerCase())
    );
    setMatchedNames(matched);
  };

  const handleSelectStudent = (event) => {
    const selectedFirstName = event.target.value;
    const selectedStudent = allStudent.find(
      (student) => student.firstName === selectedFirstName
    );
    setSelectedStudent(selectedStudent);
  };

  const createRoom = (variant) => {
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

    let values = { room, myImage, createdDay, createdTime };
    let endpoint = "http://localhost:2000/staff_account/chat_group";
    axios.post(endpoint, { values })
    .then((response) => {
      enqueueSnackbar(response.data.message, { variant: "success" });
    });
    console.log(values);
  };

  // https://school-portal-backend-adex2210.vercel.app
  const handleFileSelect = (e) => {
    // setIsLoading(true);
    console.log(e.target.files[0]);
    let selectedImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = () => {
      setMyImage(reader.result);
    };
  };

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
          {selectedStudent && (
            <>
          { window.innerWidth >= 768 ? (
            <table className="table table-border table-stripped gap-2 w-100">
              <thead>
                <tr className="text-uppercase">
                  <td>first name</td>
                  <td>last name</td>
                  <td>email</td>
                  <td>Admission Status</td>
                  <td>matric No</td>
                  <td>class</td>
                  <td>term</td>
                  <td>option</td>
                  <td className="d-flex ms-5">action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedStudent.firstName}</td>
                  <td>{selectedStudent.lastName}</td>
                  <td>{selectedStudent.email}</td>
                  <td>{selectedStudent.paidForAdmission}</td>
                  <td>{selectedStudent.matric}</td>
                  <td>{selectedStudent.level}</td>
                  <td>{selectedStudent.term}</td>
                  <td>{selectedStudent.options}</td>
                  <td className="d-flex gap-3">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        upgrade(
                          selectedStudent.email,
                          selectedStudent.level,
                          selectedStudent.term,
                          selectedStudent.options
                        );
                      }}
                    >
                      Upgrade
                    </button>
                    <button
                      variant="outlined"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        confirmAdmissionPayment(
                          selectedStudent.firstName,
                          selectedStudent.email,
                          selectedStudent.paidForAdmission
                        );
                      }}
                    >
                      Confirm Payment
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            ) : ( 
              <div className="d-block d-md-none">
              <div>First Name: {selectedStudent.firstName}</div>
              <div>Last Name: {selectedStudent.lastName}</div>
              <div>Email: {selectedStudent.email}</div>
              <div>Admission Status: {selectedStudent.paidForAdmission}</div>
              <div>Matric No: {selectedStudent.matric}</div>
              <div>Class: {selectedStudent.level}</div>
              <div>Term: {selectedStudent.term}</div>
              <div>Options: {selectedStudent.options}</div>
              <div className="d-flex gap-3">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    upgrade(
                      selectedStudent.email,
                      selectedStudent.level,
                      selectedStudent.term,
                      selectedStudent.options
                    );
                  }}
                >
                  Upgrade
                </button>
                <button
                  variant="outlined"
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    confirmAdmissionPayment(
                      selectedStudent.firstName,
                      selectedStudent.email,
                      selectedStudent.paidForAdmission
                    );
                  }}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
            )}
            </>
           
          )}
        </div>
        <div className="w-100 mt-4">
          <div>Create Group</div>
          <div>
            <input
              type="text"
              className="text-capitalize"
              placeholder="Room ID..."
              onChange={(e) => setRoom(e.target.value)}
            />
            <input
              type="file"
              id="avatarInput"
              accept="image/*"
              style={{ display: "" }}
              onChange={handleFileSelect}
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
        <ConfirmAdmissionPaymentModal
          open={dialogOpen}
          handleClose={handleDialogClose}
          firstName={studentFirstName}
          personEmail={personEmail}
          admissionState={studentAdmissionState}
        />
      </div>
    </>
  );
}

export default StaffDashboardHome;
