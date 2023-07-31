import React, { useEffect, useState } from "react";

const Chat = ({socket}) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    // console.log(username, room);
    if (username !== "" && room !== "") {
        socket.current.emit("join room", room);
    } else {
    }
  };

  return (
    <>
      <div>
        <h3>Join A Chat</h3>
        <input
          type="text"
          placeholder="Adex..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Room ID..."
          onChange={(e) => setRoom(e.target.value)}
        />
        <button onClick={joinRoom}>Join A Room</button>
      </div>
    </>
  );
};

export default Chat;
