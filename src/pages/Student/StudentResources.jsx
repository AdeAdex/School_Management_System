import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StudentResources = () => {
  const [receivedVideo, setReceivedVideo] = useState([]);
  
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  
  useEffect(() => {
    

    const receivedEmail = globalState.email;
  const formClass = globalState.level;
  const formTerm = globalState.term;
  const formOption = globalState.options;

    // console.log(receivedEmail, formClass, formTerm, formOption);
    let endpoint = "https://school-portal-backend-adex2210.vercel.app/staff_account/details";
    axios
      .get(endpoint, {
        params: {
          receivedEmail,
          formClass,
          formTerm,
          formOption,
        },
      })
      .then((response) => {
        setReceivedVideo(response.data);
      });
  }, [globalState]);

  return (
    <>
      <div className="p-4 pb-5 resources-container">
        <h3>Resources</h3>
        <div className="d-flex flex-column gap-4">
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
      </div>
    </>
  );
};

export default StudentResources;
