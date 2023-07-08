import React, { useState } from 'react'
import axios from "axios";

const AvatarUploader = () => {
        const [avatarImage, setAvatarImage] = useState(null);

  // Function to handle file selection
//   const handleFileSelect = (event) => {
//     const file = event.target.files[0]; // Get the selected file

//     // Check if a file was selected
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         setAvatarImage(e.target.result); // Set the image source as the avatar
//       };

//       reader.readAsDataURL(file);
//     }
//   };



  const [myImage, setMyImage] = useState("");
  const [cloudImage, setCloudImage] = useState(null);

  const handleFileSelect = (e) => {
    console.log(e.target.files[0]);
   let  myImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myImage);
    reader.onload = () => {
      setMyImage(reader.result);
    }

    const endpoint = "http://localhost:2000/student_account/upload_profile_pic";
    axios
      .post(endpoint, { myImage })
      .then((response) => {
        console.log(response.data);
        setCloudImage(response.data.cloudLink);
        console.log(response.data.cloudLink);
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   const saveFile = () => {
//     const endpoint = "http://localhost:2000/student_account/upload_profile_pic";
//     axios
//       .post(endpoint, { myImage })
//       .then((response) => {
//         console.log(response.data);
//         setCloudImage(response.data.cloudLink);
//         console.log(response.data.cloudLink);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
  return (
    <>
    <div>
      <label htmlFor="avatarInput" style={{cursor: 'pointer'}}>
        {cloudImage ? (
          <img src={cloudImage} alt="Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        ) : (
          <div className="avatar-placeholder d-flex flex-column justify-content-center border"><img src="../pic/avatar.png" className='mx-auto' alt="" style={{ width: '50px', height: '50px' }} /> <small>Click to upload</small> </div>
        )}
      </label>
      <input
        type="file"
        id="avatarInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
    </div>
    </>
  )
}

export default AvatarUploader