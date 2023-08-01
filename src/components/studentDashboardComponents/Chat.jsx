import React, { useEffect, useState, useRef } from "react";
import ChatMessenger from "./ChatMessenger";
import socketClient from "socket.io-client";
import OnlineUser from "./OnlineUser";
import axios from "axios";

const Chat = ({ socket }) => {
  //   let socketRef = useRef();
  //   const endpoint = "http://localhost:2000";
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [group, setGroup] = useState([])

  const joinRoom = () => {
    // console.log(username, room);
    if (username !== "" && room !== "") {
      socket.current.emit("join room", room);
//       setShowChat(true)
    } else {
    }
  };


      useEffect(() => {
        let groupEndpoint = "https://school-portal-backend-adex2210.vercel.app/staff_account/chat_group"
        axios.get(groupEndpoint)
        .then((response) => {
          console.log(response.data.roomsArray);
        })
      }, [])

  return (
    <>
      {/* {!showChat ? ( */}
      <div className="w-100 d-flex gap-3 h-100">

      
        <div className="d-grid justify-content-center gap-3 border" style={{width: '25%'}}>
          <h3>Join A Chat</h3>

          <button onClick={joinRoom}>Join A Room</button>
        </div>
      {/* ) : ( */}
        <ChatMessenger socket={socket} username={username} room={room} />
        <OnlineUser/>
        </div>
      {/* )} */}
    </>
  );
};

export default Chat;
