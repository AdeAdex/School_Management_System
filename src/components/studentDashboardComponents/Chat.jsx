import React, { useEffect, useState, useRef } from "react";
import ChatMessenger from "./ChatMessenger";
import socketClient from "socket.io-client";
import OnlineUser from "./OnlineUser";
import axios from "axios";
import { useSelector } from "react-redux";

const Chat = ({ socket }) => {

  //   let socketRef = useRef();
  //   const endpoint = "http://localhost:2000";
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [group, setGroup] = useState([]);
  const [datCreate, setDateCreate] = useState('');
  const [timeCreate, setTimeCreate] = useState('');
  const [groupIcon, setGroupIcon] = useState('');

  const joinRoom = (myRoom, createDay, createTime, roomPic) => {
    
    if (myRoom !== "") {
      setRoom(myRoom);
   		setDateCreate(createDay);
   		setTimeCreate(createTime);
   		setGroupIcon(roomPic)
      socket.current.emit("join room", myRoom);
    } else {
    }
  };

  useEffect(() => {
    let groupEndpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/chat_group";
    axios.get(groupEndpoint)
    .then((response) => {
      setGroup(response.data.rooms);
    });
  }, []);

  return (
    <>
      {/* {!showChat ? ( */}
      <div className="w-100 d-flex gap-3 h-100 chat-container">
        <div
          className="d-flex flex-column gap-3 border h-100 p-4 chat-nav"
          style={{ width: "25%" }}
        >
          <h3 className="text-center" style={{fontFamily: 'fantasy'}}>Join A Chat</h3>
          {group.map((eachGroup, index) => (
            <div
              key={index}
              className="d-flex group-chat p-2 gap-2"
              style={{ cursor: "pointer", borderRadius: "5px" }}
              onClick={() =>
                joinRoom(
                  eachGroup.roomName,
                  eachGroup.roomDateCreated,
                  eachGroup.roomTimeCreated,
                  eachGroup.roomPic
                )
              }
            >
              <img src={eachGroup.roomPic} style={{ width: "30px" }} alt="" />
              <div className="my-auto">
                <small className="" style={{fontSize: '14px', fontFamily: 'monospace'}}>{eachGroup.roomName}</small>
                <div></div>
              </div>
            </div>
          ))}
        </div>
        {/* ) : ( */}
        <ChatMessenger socket={socket}  room={room} createDay={datCreate} createTime={timeCreate} roomPic={groupIcon} />
        <OnlineUser />
      </div>
      {/* )} */}
    </>
  );
};

export default Chat;
