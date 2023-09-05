import React, { useEffect, useState } from "react";
import axios from "axios";
// import Modal from "react-bootstrap/Modal";
import UpgradeLevelModal from "../../components/UpgradeLevelModal";
import { SnackbarProvider, useSnackbar } from "notistack";
import ConfirmAdmissionPaymentModal from "../../components/ConfirmAdmissionPaymentModal";
import "./Dashboard.css";
import { MultiSelect } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import EventsPageComponents from "../../components/homepageComponents/EventsPageComponents";

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
  const [myVideo, setMyVideo] = useState("");
  const [myProfilePic, setMyProfilePic] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentAdmissionState, setStudentAdmissionState] = useState("");
  const [studentUploadedURL, setStudentUploadedURL] = useState("");
  const [studentUploadedDate, setStudentUploadedDate] = useState("");
  const [studentPaidAmount, setStudentPaidAmount] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const globalState = useSelector((state) => state.portalReducer.staffInfo);
  const [subjectToRegister, setSubjectToRegister] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectPercentages, setSubjectPercentages] = useState({});
  const percentageOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let endpoint2 =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/student_subject";
    axios
      .get(endpoint2, {
        headers: {
          Authorization: `${"staffArray"}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setSubjectToRegister(res.data);
        // setSelectedPercentage(res.data.percentageOptions)
        // console.log(res.data.percentageOptions);
      });
  }, [globalState]);

  const confirmAdmissionPayment = (
    studentFirstName,
    personEmail,
    studentAdmissionState,
    studentUploadedURL,
    studentUploadedDate,
    studentPaidAmount
  ) => {
    setDialogOpen(true);
    setStudentFirstName(studentFirstName);
    setPersonEmail(personEmail);
    setStudentAdmissionState(studentAdmissionState);
    setStudentUploadedURL(studentUploadedURL);
    setStudentUploadedDate(studentUploadedDate);
    setStudentPaidAmount(studentPaidAmount);
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

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

  // const [searchTerm, setSearchTerm] = useState("");
  // const [matchedNames, setMatchedNames] = useState([]);
  // const [selectedStudent, setSelectedStudent] = useState(null);

  // const handleSearch = (event) => {
  //   const term = event.target.value;
  //   setSearchTerm(term);

  //   // Filter names that match the search term
  //   const matched = allStudent.filter((student) =>
  //     student.firstName.toLowerCase().includes(term.toLowerCase())
  //   );
  //   setMatchedNames(matched);
  // };

  // const handleSelectStudent = (event) => {
  //   const selectedFirstName = event.target.value;
  //   const selectedStudent = allStudent.find(
  //     (student) => student.firstName === selectedFirstName
  //   );
  //   setSelectedStudent(selectedStudent);
  // };

  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedStudent, setSelectedStudent] = useState(null);

  // const handleSearch = (event) => {
  //   const term = event.target.value;
  //   setSearchTerm(term);
  // };

  // const handleSelectStudent = (event) => {
  //   const selectedFirstName = event.target.value;
  //   const selectedStudent = allStudent.find(
  //     (student) => student.firstName === selectedFirstName
  //   );
  //   setSelectedStudent(selectedStudent);
  // };

  // // Filter names that match the search term
  // const matchedNames = allStudent.filter((student) =>
  //   student.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

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

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setSearchTerm(student.firstName);
    setMatchedNames([]); // Clear suggestions after selection
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
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/chat_group";
    axios.post(endpoint, { values }).then((response) => {
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

  const handleVideoFileChange = (e) => {
    let myImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myImage);
    reader.onload = () => {
      setMyVideo(reader.result);
    };
  };

  const handleImageFileChange = (e) => {
    let myImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myImage);
    reader.onload = () => {
      setMyProfilePic(reader.result);
    };
  };

  let formik = useFormik({
    initialValues: {
      name: "",
      aboutMe: "",
      videoLink: "",
      selectedSubjects: [],
    },

    onSubmit: (values) => {
      setIsLoading(true);
      const subjectPercentageMap = {};
      selectedSubjects.forEach((subject) => {
        subjectPercentageMap[subject] = subjectPercentages[subject];
      });

      const updatedValues = {
        ...values,
        subjectPercentages: subjectPercentageMap,
        myVideo,
        myProfilePic,
      };

      const {
        selectedSubjects: selectedSubjects2,
        ...valuesWithoutSelectedSubjects
      } = updatedValues;

      console.log(valuesWithoutSelectedSubjects);
      let endpoint = "https://school-portal-backend-adex2210.vercel.app/staff_account/create_staff_account";
      axios.post(endpoint, valuesWithoutSelectedSubjects).then((response) => {
        setIsLoading(false);
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
      });
    },
  });

  return (
    <>
      <div className="flex p-5 flex-column w-100">
        <div className="w-100 text-black">Dashbord</div>
        <div className="search-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && matchedNames.length > 0 && (
            <div className="suggestions">
              {matchedNames.map((student, index) => (
                <div
                  key={index}
                  className="suggestion"
                  onClick={() => handleSelectStudent(student)}
                >
                  {student.firstName} {student.lastName}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-100">
          {selectedStudent && (
            <>
              {screenWidth >= 768 ? (
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
                              selectedStudent.paidForAdmission,
                              selectedStudent.paymentURL[0].paymentLink,
                              selectedStudent.paymentURL[0].dateUploaded,
                              selectedStudent.admissionAmount
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
                  <div>
                    Admission Status: {selectedStudent.paidForAdmission}
                  </div>
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
                          selectedStudent.paidForAdmission,
                          selectedStudent.paymentURL[0].paymentLink,
                          selectedStudent.paymentURL[0].dateUploaded,
                          selectedStudent.admissionAmount
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

        <div className="create-group">
          <div className="create-group-heading">Create Group</div>
          <div>
            <input
              className="create-group-input text-capitalize"
              type="text"
              placeholder="Room ID..."
              onChange={(e) => setRoom(e.target.value)}
            />
            <input
              className="create-group-input"
              type="file"
              id="avatarInput"
              accept="image/*"
              onChange={handleFileSelect}
            />
            <button className="create-group-button" onClick={createRoom}>
              Create Room
            </button>
          </div>
        </div>

        <div className="container mt-5 pb-5">
          <h5 className="mb-4">Create Staff Account</h5>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="aboutMe" className="form-label">
                About Me
              </label>
              <textarea
                className="form-control"
                id="aboutMe"
                rows="3"
                name="aboutMe"
                onChange={formik.handleChange}
                value={formik.values.aboutMe}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="profilePicture" className="form-label">
                Profile Picture
              </label>
              <input
                type="file"
                className="form-control"
                id="profilePicture"
                name="profilePicture"
                accept="images/*"
                onChange={handleImageFileChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="videoLink" className="form-label">
                My Video
              </label>
              <input
                type="file"
                className="form-control"
                id="videoLink"
                name="videoLink"
                accept="video/*"
                onChange={handleVideoFileChange}
              />
            </div>
            <div className="mb-3">
              <MultiSelect
                data={subjectToRegister.map((subject) => ({
                  label: subject.subject,
                  value: subject.subject,
                }))}
                label="Your Skills Here"
                placeholder="Pick all that you like"
                searchable
                nothingFound="Nothing found"
                onChange={(selectedItems) => {
                  formik.setFieldValue("selectedSubjects", selectedItems);
                  setSelectedSubjects(selectedItems);
                }}
              />
            </div>

            <div className="mb-3">
              {selectedSubjects.map((subject) => (
                <div key={subject}>
                  <label>{subject}</label>
                  <select
                    className="form-control"
                    value={subjectPercentages[subject] || ""}
                    name={`subjectPercentages.${subject}`}
                    onChange={(e) => {
                      const selectedPercentage = e.target.value;
                      setSubjectPercentages((prev) => ({
                        ...prev,
                        [subject]: selectedPercentage,
                      }));
                    }}
                  >
                    <option value="">Select a percentage</option>
                    {percentageOptions.map((percentage) => (
                      <option key={percentage} value={percentage}>
                        {percentage}%
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <button type="submit" className="btn btn-primary">
              {isLoading ? <div className="spinner"></div> : <div>Create</div>}
            </button>
          </form>
        </div>

        <div className="w-100">
          <EventsPageComponents />
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
          paymentURL={studentUploadedURL}
          paymentDate={studentUploadedDate}
          paymentAmount={studentPaidAmount}
        />
      </div>
    </>
  );
}

export default StaffDashboardHome;
