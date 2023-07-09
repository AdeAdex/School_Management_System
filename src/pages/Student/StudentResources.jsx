import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentResources = () => {
  const [receivedVideo, setReceivedVideo] = useState([]);

  useEffect(() => {
    let endpoint = "http://localhost:2000/staff_account/details";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `${"staffArray"}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // const responseData = response.data.response[0].staffArray;
        // setResponseArray(responseData);
        setReceivedVideo(response.data.response[0].Resources);
      });
  }, []);

  return (
    <>
      <div className="pb-5">
        <h3>Resources</h3>
        <div className="d-flex">
        {
            receivedVideo.map((eachVideo, index) => (
              <video
              className="w-100 shadow"
              style={{ height: "200px" }}
              controls
              poster="pic/pic.jpg"
            >
              <source src={eachVideo.myImage} type="video/mp4" />
            </video>
            ))
          }
          </div>
      </div>
    </>
  );
};

export default StudentResources;
