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
    let endpoint = "http://localhost:2000/staff_account/details";
    axios
      .get(endpoint, {
        params: {
          receivedEmail,
          formClass,
          formTerm,
          formOption,
        },
      })
      // .then((response) => {
      //   // const responseData = response.data.response[0].staffArray;
      //   // setResponseArray(responseData);
      //   console.log(response.data.response[0].Resources[0]);
      //   setReceivedVideo(response.data.response[0].Resources[0].jss2Resources);
      // });
  }, [globalState]);

  return (
    <>
      <div className="pb-5">
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
