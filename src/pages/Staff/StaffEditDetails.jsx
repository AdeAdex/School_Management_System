import React, { useEffect, useState } from "react";
import "../Staff/StaffEditDetails.css";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { newName } from "../../redux/portalSlice";

const StaffEditDetails = () => {
  const globalState = useSelector((state) => state.portalReducer.staffInfo);
  const [responseArray, setResponseArray] = useState([]);
  const [myEmail, setMyEmail] = useState("");
  const [myImage, setMyImage] = useState("")
  const [receivedVideo, setReceivedVideo] = useState([]);



useEffect(() => {
  let endpoint = "https://school-portal-backend-adex2210.vercel.app/staff_account/details"
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
        setReceivedVideo(response.data.response[0].Resources[0].jss2Resources)
      });
}, )


  const tryGet = () => {
    console.log(globalState.email);
    let myEmail = globalState.email;
    let endpoint = "http://localhost:2000/staff_account/details";
    axios.get(endpoint, myEmail).then((response) => {
      console.log(response);
    });
  };

  let formik = useFormik({
    initialValues: {
      address: "",
      country: "",
      lga: "",
      hubby: "",
      receivedEmail: "",
      class: "",
    },

    onSubmit: (values) => {
      // console.log(globalState);
      const newValues = {
        ...values,
        receivedEmail: globalState.email,
        id: crypto.randomUUID(),
      };
      console.log(newValues);
      let endpoint = "http://localhost:2000/staff_account/edit_details";
      axios.post(endpoint, newValues).then((response) => {
        console.log(response.data.response.staffArray);
      });
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
      uploader_name: '',
      video_title: '',
      video_length: '',
      video_duration: ''
    },

    onSubmit: (values) => {
      let newValues = {...values, myImage}
      console.log(newValues);
      let endpoint = "http://localhost:2000/staff_account/upload_resources"
      axios.post(endpoint, newValues)
      .then((response) => {
        // console.log(response.data.response);
        setReceivedVideo(response.data.response[0].Resources[0].jss2Resources)
      })
    }
  })





  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Code to handle the upload of the selected file
    if (selectedFile) {
      // Perform the upload using an API or any other logic
      console.log('Uploading file:', selectedFile);
    }
  };


  const openConfirmDeleteModal = (myClass, myEmail) => {
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
        console.log(myClass, myEmail);
        let endpoint = "http://localhost:2000/staff_account/delete_class";
        axios
          .delete(endpoint, {
            headers: {
              Authorization: `${myClass} ${myEmail}`,
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
    <div className="d-flex flex-column">
    <table className="table gap-2" >
          <thead className="text-white table-head mb-3">
            <tr className="text-uppercase">
              <td>class</td>
              <td>country</td>
              <td>lga</td>
              <td>address</td>
              <td>hubby</td>
              <td>action</td>
            </tr>
          </thead>
          {responseArray.map((option, index) => (
          <tbody key={index}>
            <tr>
              <td>{option.class}</td>
              <td>{option.country}</td>
              <td>{option.lga}</td>
              <td>{option.address}</td>
              <td>{option.hubby}</td>
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
                    openConfirmDeleteModal(option.class, myEmail);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          ))}
            
        </table>
      <div className="edit-container">
        <div className="edit-card">
          <h3 className="edit-login">Edit Your Details</h3>
          <form
            onSubmit={formik.handleSubmit}
            action="/staff_account/edit_details"
            method="post"
          >
            <div className="edit-inputBox">
              <select
                name="class"
                id=""
                required="required"
                onChange={formik.handleChange}
              >
                <option value="JSS1">JSS1</option>
                <option value="JSS2">JSS2</option>
                <option value="JSS3">JSS3</option>
                <option value="SSS1">SSS1</option>
                <option value="SSS2">SSS2</option>
                <option value="SSS3">SSS3</option>
              </select>
            </div>
            <div className="edit-inputBox">
              <input
                type="text"
                name="address"
                required="required"
                onChange={formik.handleChange}
              />
              <span className="edit-user">Address</span>
            </div>

            <div className="edit-inputBox">
              <input
                type="text"
                name="country"
                required="required"
                onChange={formik.handleChange}
              />
              <span className="edit-user">Country</span>
            </div>

            <div className="edit-inputBox">
              <input
                type="text"
                name="lga"
                required="required"
                onChange={formik.handleChange}
              />
              <span className="edit-user">LGA</span>
            </div>

            <div className="edit-inputBox">
              <input
                type="text"
                name="hubby"
                required="required"
                onChange={formik.handleChange}
              />
              <span>Hubby</span>
            </div>

            <button type="submit" className="edit-enter">
              Enter
            </button>
          </form>
          <button type="submit" onClick={tryGet}>
            Get Info
          </button>
        </div>
      </div>

      <div>
        <form action="" onSubmit={videoUpload.handleSubmit}>
          <h3>Upload video</h3>
          <div className="d-flex flex-column gap-4" style={{width: '400px'}}>
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
          <input type="file" name="video_data" id="" onChange={handleVideoFileChange} />
          <input type="text" name="uploader_name" id="" placeholder="video uploader name" onChange={videoUpload.handleChange}/>
          <input type="text" name="video_title" id="" placeholder="video title" onChange={videoUpload.handleChange}/>
          <input type="text" name="video_length" id="" placeholder="video length" onChange={videoUpload.handleChange}/>
          <input type="text" name="video_duration" id="" placeholder="video duration" onChange={videoUpload.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default StaffEditDetails;