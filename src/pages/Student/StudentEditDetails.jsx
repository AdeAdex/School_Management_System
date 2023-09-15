import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { Textarea } from "@mantine/core";
import { useLocation } from "react-router-dom";
import Chat from "../../components/studentDashboardComponents/Chat";
import ChatMessenger from "../../components/studentDashboardComponents/ChatMessenger";
import "../Student/StudentEditDetails.css";
// import { useSelector } from "react-redux";

const StudentEditDetails = ({ socket }) => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const name = new URLSearchParams(location.search).get("name");
  // const [message, setMessage] = useState("");
  const [allmessages, setAllmessages] = useState([]);
  const [classIndex, setClassIndex] = useState(0);
  // let index = '';

  useEffect(() => {
    localStorage.getItem("myRoom");
    if (socket.current) {
      // console.log(socket.current);
      socket.current.on("received_message", (receivedMessage) => {
        console.log(receivedMessage);
        setAllmessages([...allmessages, receivedMessage]);
      });
    }

    //
  });

  const fetch = () => {
    console.log("fetching");
    // if(allmessages.length == 0) {
    axios
      .post("http://localhost:2000/student_account/get_student_message", {
        class: classIndex,
      })
      .then((res) => {
        console.log(res);
        setAllmessages(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // }
  };

  const fetchGroupMessage = () => {
    if (localStorage.myRoom == "JSS 1 Group" && globalState.level == "JSS 1") {
      setClassIndex(0);
      // index = 0
      fetch();
    } else if (
      localStorage.myRoom == "JSS 2 Group" &&
      globalState.level == "JSS 2"
    ) {
      setClassIndex(1);
      fetch();
    } else {
      // setAllmessages([])
    }
  };

  // const sendMessage = () => {
  //   let payload = {
  //     message: message,
  //     name: name,
  //     messageDate: new Date().toLocaleDateString("en-GB", {
  //       year: "2-digit",
  //       month: "2-digit",
  //       day: "2-digit",
  //     }),
  //     messageTime: new Date().toLocaleTimeString("en-US", {
  //       hour12: false,
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }),
  //     picture: localStorage.cloudImage,
  //     id: id,
  //   };
  //   socket.current.emit("sentMsg", payload);
  //   setAllmessages([...allmessages, payload]);
  // };

  return (
    <>
      <div className="d-flex w-100 h-100">
        {/* <Chat
          socket={socket}
          messages={allmessages}
          fetchGroupMessage={fetchGroupMessage}
        /> */}
        <div>coming soon </div>
      </div>
    </>
  );
};

export default StudentEditDetails;
