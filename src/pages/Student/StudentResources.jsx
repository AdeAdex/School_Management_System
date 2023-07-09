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
      <div>
        <h3>Resources</h3>
        {
            receivedVideo.map((eachVideo, index) => (
              <video
              className="w-100 shadow p-3"
              style={{ height: "300px" }}
              controls
              poster="pic/pic.jpg"
            >
              <source src={eachVideo.myImage} type="video/mp4" />
            </video>
            ))
          }
      </div>
    </>
  );
};

export default StudentResources;
