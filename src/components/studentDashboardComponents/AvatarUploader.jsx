import React, { useState } from 'react'
import axios from "axios";

const AvatarUploader = () => {
        const [myImage, setMyImage] = useState("");
        const [cloudImage, setCloudImage] = useState(null);
      
        const handleFileSelect = (e) => {
          console.log(e.target.files[0]);
          let selectedImage = e.target.files[0];
          let reader = new FileReader();
          reader.readAsDataURL(selectedImage);
          reader.onload = () => {
            setMyImage(reader.result);
            const endpoint = "http://localhost:2000/student_account/upload_profile_pic";
            axios
              .post(endpoint, { myImage: reader.result })
              .then((response) => {
                console.log(response.data);
                setCloudImage(response.data.cloudLink);
                console.log(response.data.cloudLink);
              })
              .catch((err) => {
                console.log(err);
              });
          };
        };
      
        return (
          <>
            <div>
              <label htmlFor="avatarInput" style={{ cursor: 'pointer' }}>
                {cloudImage ? (
                  <img src={cloudImage} alt="Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                ) : (
                  <div className="avatar-placeholder d-flex flex-column justify-content-center border">
                    <img src="../pic/avatar.png" className="mx-auto" alt="" style={{ width: '50px', height: '50px' }} />
                    <small>Click to upload</small>
                  </div>
                )}
              </label>
              <input type="file" id="avatarInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileSelect} />
            </div>
          </>
        );
      };
      
      export default AvatarUploader;