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
  // const [myEmail, setMyEmail] = useState("");
  const [myImage, setMyImage] = useState("");
  const [receivedVideo, setReceivedVideo] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectToRegister, setSubjectToRegister] = useState([]);
  const myEmail = globalState.email;
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/uploaded_subject";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `${"staffArray"}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const responseData = response.data.response;
        setResponseArray(responseData);
        // console.log(response.data.response[0].Resources);
        // setReceivedVideo(response.data.response[0].Resources[0].jss2Resources);
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
        setSubjectToRegister(res.data);
      });
  }, [globalState]);

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
  // https://school-portal-backend-adex2210.vercel.app

  const handleOptionChange = async (selectedOption) => {
    try {
      setSubjectToRegister([]);

      let response;
      if (selectedOption === "Science") {
        response = await axios.get(
          "https://school-portal-backend-adex2210.vercel.app/staff_account/science_option_endpoint"
        );
      } else if (selectedOption === "Commercial") {
        response = await axios.get(
          "https://school-portal-backend-adex2210.vercel.app/staff_account/commercial_option_endpoint"
        );
      } else {
        return;
      }

      setSubjectToRegister(response.data);
      setSelectedOption(selectedOption);
    } catch (error) {
      console.error(error);
    }
  };

  let formik = useFormik({
    initialValues: {
      receivedEmail: "",
      class: "",
      term: "",
      options: "",
    },

    onSubmit: (values) => {
      const newValues = {
        ...values,
        receivedEmail: globalState.email,
        selectedSubjects: selectedSubjects,
        options: selectedOption,
      };
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/staff_account/edit_details";
      axios.post(endpoint, newValues).then((response) => {
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
    },
  });

  // https://school-portal-backend-adex2210.vercel.app

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
      upload_class: "",
    },

    onSubmit: (values) => {
      let newValues = { ...values, myImage };
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/staff_account/upload_resources";
      axios.post(endpoint, newValues).then((response) => {
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

  //https://school-portal-backend-adex2210.vercel.app

  const openConfirmDeleteModal = (myClass, myEmail, myTerm, myOptions, id) => {
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
        console.log(myClass, myEmail, myTerm, myOptions, id);
        let endpoint =
          "https://school-portal-backend-adex2210.vercel.app/staff_account/delete_class";
        axios
          .delete(endpoint, {
            data: { myClass, myEmail, myTerm, myOptions, id },
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
    <div
      className="upload-container d-flex flex-column gap-5"
      style={{ overflowX: "hidden", width: "100%", paddingTop: "100px" }}
    >
      <table className="table gap-2">
        <thead className="text-white table-head mb-3">
          <tr className="text-uppercase">
            <th>Class</th>
            <th>Term</th>
            <th>Subject</th>
            <th>Option</th>
            <th>Action</th>
          </tr>
        </thead>
        {responseArray && responseArray.length > 0
          ? responseArray.map((option, index) => (
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
                        openConfirmDeleteModal(
                          option.class,
                          myEmail,
                          option.term,
                          option.options,
                          option._id
                        );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          : null}
      </table>
      <div className="w-100">
        <div className="w-100">
          <h3 className="edit-login text-center my-3">Upload Class Subject</h3>
          <form
            action=""
            className="upload-form"
            onSubmit={formik.handleSubmit}
          >
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
            {formik.values.class === "SSS 1" ||
            formik.values.class === "SSS 2" ||
            formik.values.class === "SSS 3" ? (
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
                  onChange={(event) => {
                    handleOptionChange(event.target.value);
                  }}
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
              label="Your Picked Subjects here"
              placeholder="Pick all that you like"
              searchable
              nothingFound="Nothing found"
              onChange={setSelectedSubjects}
            />
            <button
              type="submit"
              className="edit-enter"
              // onClick={() => formik.handleSubmit(selectedOption)}
            >
              Enter
            </button>
          </form>
        </div>
      </div>
      <div>
        <form
          action=""
          className="video-form mb-5"
          onSubmit={videoUpload.handleSubmit}
        >
          <h3 className="text-center">Upload video</h3>
          <div className="d-flex flex-column gap-4" style={{ width: "400px" }}>
            {receivedVideo && receivedVideo.length > 0
              ? receivedVideo.map((eachVideo, index) => (
                  <video
                    className="w-100 shadow"
                    style={{ height: "200px" }}
                    controls
                    poster="../pic/pic.jpg"
                    key={index}
                  >
                    <source src={eachVideo.myImage} type="video/mp4" />
                  </video>
                ))
              : null}
          </div>
          <div className="col-md-12 mb-3">
            <label
              htmlFor="validationServer04"
              className="form-label fw-bold text-secondary"
            >
              Upload to Class
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="upload_class"
              aria-describedby="validationServer04Feedback"
              required
              onChange={videoUpload.handleChange}
              onBlur={videoUpload.handleBlur}
            >
              <option disabled>Choose...</option>
              <option value="JSS1">JSS 1</option>
              <option value="JSS2">JSS 2</option>
              <option value="JSS3">JSS 3</option>
              <option value="SSS1">SSS 1</option>
              <option value="SSS2">SSS 2</option>
              <option value="SSS3">SSS 3</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <input
              type="file"
              name="video_data"
              id=""
              accept="video/*"
              onChange={handleVideoFileChange}
              className="upload-video-input"
            />
            <input
              type="text"
              name="uploader_name"
              id=""
              placeholder="video uploader name"
              onChange={videoUpload.handleChange}
              className="upload-video-input"
            />
            <input
              type="text"
              name="video_title"
              id=""
              placeholder="video title"
              onChange={videoUpload.handleChange}
              className="upload-video-input"
            />
            <input
              type="text"
              name="video_length"
              id=""
              placeholder="video length"
              onChange={videoUpload.handleChange}
              className="upload-video-input"
            />
            <input
              type="text"
              name="video_duration"
              id=""
              placeholder="video duration"
              onChange={videoUpload.handleChange}
              className="upload-video-input"
            />
          </div>
          <button className="btn btn-primary btn-sm my-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StaffEditDetails;
