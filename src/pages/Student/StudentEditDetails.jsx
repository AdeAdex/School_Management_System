import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { Textarea } from "@mantine/core";
import { useLocation } from "react-router-dom";
import Chat from "../../components/studentDashboardComponents/Chat";
import ChatMessenger from "../../components/studentDashboardComponents/ChatMessenger";
import '../Student/StudentEditDetails.css'


const StudentEditDetails = ({ socket }) => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const name = new URLSearchParams(location.search).get("name");

  useEffect(() => {
    if (socket.current) {
      socket.current.on("brodcastMsg", (receivedMessage) => {
        console.log(receivedMessage);
      });
    }
  });

  const [message, setMessage] = useState("");
  const [allmessages, setAllmessages] = useState([]);

  const sendMessage = () => {
    let payload = {
      message: message,
      name: name,
      messageDate: new Date().toLocaleDateString("en-GB", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      }),
      messageTime: new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }),
      picture: localStorage.cloudImage,
      id: id,
    };
    socket.current.emit("sentMsg", payload);
    setAllmessages([...allmessages, payload]);
  };

  return (
    <>
    <div className="d-flex w-100 h-100">
      {/* <div>
        
              src={msg.picture}
              alt=""
              style={{ width */}
      <Chat socket={socket}/>
      </div>
    </>
  );
};

export default StudentEditDetails;
