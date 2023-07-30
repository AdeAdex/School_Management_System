import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { Textarea } from "@mantine/core";
import { useLocation } from "react-router-dom";


const StudentEditDetails = ({ socket }) => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const name = new URLSearchParams(location.search).get("name");
  // const picture = new URLSearchParams(location.search).get("picture");

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

    // console.log(payload);
    socket.current.emit("sentMsg", payload);
    setAllmessages([...allmessages, payload]);
  };

  return (
    <>
      <div>
        {allmessages.map((msg, index) => (
          <div key={index}>
            <div>{msg.name}</div>
            <div>{msg.message}</div>
            <div>{msg.messageDate}</div>
            <div>{msg.messageTime}</div>
            <img
              src={msg.picture}
              alt=""
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </div>
        ))}
      </div>
      <div className="modal-footer d-flex w-100">
        <BsFillEmojiSmileFill size={20} color="orange" />
        <Textarea
          label=""
          placeholder="Message"
          autosize
          minRows={1}
          maxRows={4}
          style={{ width: "70%", backgroundColor: "" }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          onClick={sendMessage}
          className="btn btn-sm btn-primary"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default StudentEditDetails;
