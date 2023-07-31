import React, { useEffect, useState } from "react";

const ChatMessenger = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.current.emit("sent_message", messageData);
    }
  };
  return (
    <>
      <div className="d-grid gap-3 mt-5 justify-content-center">
        <div className="text-center">Live Chat</div>
        <div></div>
        <div>
          <input
            type="text"
            placeholder="Hey..."
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
          />
          <button onClick={sendMessage}> Send&#9658;</button>
        </div>
      </div>
    </>
  );
};

export default ChatMessenger;
