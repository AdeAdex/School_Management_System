import React, { useEffect, useState } from "react";
import axios from "axios";

const AvatarUploader = ({myEmail, profilePicture}) => {
  const [myImage, setMyImage] = useState("");
  const [cloudImage, setCloudImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (e) => {
    setIsLoading(true);
    console.log(e.target.files[0]);
    let selectedImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = () => {
      setMyImage(reader.result);
      const endpoint =
        "https://school-portal-backend-adex2210.vercel.app/student_account/upload_profile_pic";
      axios
        .post(endpoint, { myImage: reader.result, myEmail })
        .then((response) => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  useEffect(() => {
    setCloudImage(profilePicture);
    console.log(profilePicture);
  }, [profilePicture])

  return (
    <>
      <div>
        <label htmlFor="avatarInput" style={{ cursor: "pointer" }}>
          {isLoading ? (
            <div className="ping"></div>
          ) : profilePicture != null || profilePicture != "" ? (
            <img
              src={profilePicture}
              alt="Avatar"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          ) : (
            <div className="avatar-placeholder d-flex flex-column justify-content-center border">
              <img
                src="../pic/avatar.png"
                className="mx-auto"
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <small className="dp">Click to upload</small>
            </div>
          )}
        </label>
        <input
          type="file"
          id="avatarInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </div>
    </>
  );
};

export default AvatarUploader;
