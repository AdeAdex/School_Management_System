import React, { useEffect, useState } from "react";
import "../Staff/StaffEditDetails.css";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { newName } from "../../redux/portalSlice";
import { MultiSelect } from "@mantine/core";

const StaffEditDetails = () => {
  const globalState = useSelector((state) => state.portalReducer.staffInfo);
  const [responseArray, setResponseArray] = useState([]);
  const [myEmail, setMyEmail] = useState("");
  const [myImage, setMyImage] = useState("");
  const [receivedVideo, setReceivedVideo] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectToRegister, setSubjectToRegister] = useState([]);

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/details";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `${"staffArray"}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const responseData = response.data.response[0].staffArray;
        setResponseArray(responseData);
        // console.log(response.data.response[0].Resources);
        setReceivedVideo(response.data.response[0].Resources[0].jss2Resources);
      });

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
        // console.log(res.data);
        setSubjectToRegister(res.data);
      });
  });

  // const tryGet = () => {
  //   console.log(globalState.email);
  //   let myEmail = globalState.email;
  //   let endpoint =
  //     "https://school-portal-backend-adex2210.vercel.app/staff_account/details";
  //   axios.get(endpoint, myEmail).then((response) => {
  //     console.log(response);
  //   });
  // };

  // https://school-portal-backend-adex2210.vercel.app
  // http://localhost:2000

  let formik = useFormik({
    initialValues: {
      receivedEmail: "",
      class: "",
      term: "",
      options: "",
    },

    onSubmit: (values) => {
      // console.log(globalState);
      const newValues = {
        ...values,
        receivedEmail: globalState.email,
        // id: crypto.randomUUID(),
        selectedSubjects: selectedSubjects,
      };
      console.log(newValues);
      let endpoint =
        "http://localhost:2000/staff_account/edit_details";
      axios.post(endpoint, newValues);
      // .then((response) => {
      //   console.log(response.data.response.staffArray);
      // });
    },
  });

  const handleVideoFileChange = (e) => {
    // videoUpload.setFieldValue('video_data', event.currentTarget.files[0]);
    let myImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myImage);
    reader.onload = () => {
      setMyImage(reader.result);
    };
  };

  let videoUpload = useFormik({
    initialValues: {
      uploader_name: "",
      video_title: "",
      video_length: "",
      video_duration: "",
    },

    onSubmit: (values) => {
      let newValues = { ...values, myImage };
      console.log(newValues);
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/staff_account/upload_resources";
      axios.post(endpoint, newValues).then((response) => {
        // console.log(response.data.response);
        setReceivedVideo(response.data.response[0].Resources[0].jss2Resources);
      });
    },
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // const handleUpload = () => {
  //   // Code to handle the upload of the selected file
  //   if (selectedFile) {
  //     // Perform the upload using an API or any other logic
  //     console.log("Uploading file:", selectedFile);
  //   }
  // };

  const openConfirmDeleteModal = (myClass, myEmail, myTerm, myOptions) => {
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
        console.log(myClass, myEmail, myTerm, myOptions);
        let endpoint =
          "https://school-portal-backend-adex2210.vercel.app/staff_account/delete_class";
        axios
          .delete(endpoint, { data: { myClass, myTerm, myOptions } })
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
      <div className="d-flex flex-column">
        <table className="table gap-2">
          <thead className="text-white table-head mb-3">
            <tr className="text-uppercase">
              <td>class</td>
              <td>Term</td>
              <td>subject</td>
              <td>Option</td>
              <td>action</td>
            </tr>
          </thead>
          {responseArray.map((option, index) => (
            <tbody key={index}>
              <tr>
                <td>{option.class}</td>
                <td>{option.term}</td>
                <td>{option.mySubjects}</td>
                <td>{option.options}</td>
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
                      openConfirmDeleteModal(option.class, myEmail, option.term, option.options);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="w-100">
          <div className="w-100">
            <h3 className="edit-login text-center my-3">
              Upload Class Subject
            </h3>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="col-md-12 mb-3">
                <label
                  htmlFor="validationServer04"
                  className="form-label fw-bold text-secondary"
                >
                  Class
                </label>
                <select
                  className="form-select "
                  id="validationServer04"
                  name="class"
                  aria-describedby="validationServer04Feedback"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option disabled>Choose...</option>
                  <option value="JSS 1">JSS 1</option>
                  <option value="JSS 2">JSS 2</option>
                  <option value="JSS 3">JSS 3</option>
                  <option value="SSS 1">SSS 1</option>
                  <option value="SSS 2">SSS 2</option>
                  <option value="SSS 3">SSS 3</option>
                </select>
              </div>
              <div className="col-md-12 mb-3">
                <label
                  htmlFor="validationServer04"
                  className="form-label fw-bold text-secondary"
                >
                  Term
                </label>
                <select
                  className="form-select "
                  id="validationServer04"
                  name="term"
                  aria-describedby="validationServer04Feedback"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option disabled>Choose...</option>
                  <option value="First Term">First Term</option>
                  <option value="Second Term">Second Term</option>
                  <option value="Third Term">Third Term</option>
                </select>
              </div>

              {formik.values.class === "SSS1" ||
              formik.values.class === "SSS2" ||
              formik.values.class === "SSS3" ? (
                <div className="col-md-12 mb-3">
                  <label
                    htmlFor="validationServer04"
                    className="form-label fw-bold text-secondary"
                  >
                    Options
                  </label>
                  <select
                    className="form-select"
                    id="validationServer04"
                    name="options"
                    aria-describedby="validationServer04Feedback"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option disabled>Choose...</option>
                    <option value="Science">Science Option</option>
                    <option value="Commercial">Commercial Option</option>
                    <option value="Art">Art Option</option>
                  </select>
                </div>
              ) : null}

              <MultiSelect
                data={subjectToRegister.map((subject) => ({
                  label: subject.subject,
                  value: subject.subject,
                }))}
                // data={[

                //   // "Yoruba",
                //   // "Basic Science",
                //   // "Social Studies",
                //   // "Fine Arts/Creative Art",
                //   // "Agricultural Science",
                //   // "Civic Education",
                //   // "Christian Religion Studies",
                //   // "Physical and Health Education",
                //   // "Business Studies",
                //   // "French",
                //   // "Computer Studies",
                //   // "Home Economics",
                //   // "Music",
                //   // "Basic Technology",
                // ]}
                label="Your Picked Subjects here"
                placeholder="Pick all that you like"
                searchable
                nothingFound="Nothing found"
                onChange={setSelectedSubjects}
              />
              <button type="submit" className="edit-enter">
                Enter
              </button>
            </form>
            {/* <button type="submit" onClick={tryGet}>
              Get Info
            </button> */}
          </div>
        </div>

        <div>
          <form action="" onSubmit={videoUpload.handleSubmit}>
            <h3>Upload video</h3>
            <div
              className="d-flex flex-column gap-4"
              style={{ width: "400px" }}
            >
              {receivedVideo && receivedVideo.length > 0
                ? receivedVideo.map((eachVideo, index) => (
                    <video
                      className="w-100 shadow"
                      style={{ height: "200px" }}
                      controls
                      poster="../pic/pic.jpg"
                      key={index} // Added a key prop for each video
                    >
                      <source src={eachVideo.myImage} type="video/mp4" />
                    </video>
                  ))
                : null}
            </div>
            <input
              type="file"
              name="video_data"
              id=""
              onChange={handleVideoFileChange}
            />
            <input
              type="text"
              name="uploader_name"
              id=""
              placeholder="video uploader name"
              onChange={videoUpload.handleChange}
            />
            <input
              type="text"
              name="video_title"
              id=""
              placeholder="video title"
              onChange={videoUpload.handleChange}
            />
            <input
              type="text"
              name="video_length"
              id=""
              placeholder="video length"
              onChange={videoUpload.handleChange}
            />
            <input
              type="text"
              name="video_duration"
              id=""
              placeholder="video duration"
              onChange={videoUpload.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StaffEditDetails;
