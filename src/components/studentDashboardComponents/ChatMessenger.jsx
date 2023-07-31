import React, { useEffect, useState } from "react";
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatMessenger = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("received_message", (data) => {
        // console.log(data);
        setMessageList((list) => [...list, data]);
      });
    }
  }, [socket.current]);

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
      setMessageList((list) => [...list, messageData]);
    }
  };

  return (
    <>
      <div className="d-grid gap-3 mt-5 justify-content-center">
        <div className="text-center">Live Chat</div>
        <div>
        <ScrollToBottom style={{overflowY: 'scroll', width: '100%', height: '100%'}}>
          {messageList.map((messageContent, index) => (
            <div className="" key={index} id={username === messageContent.author ? "you" : "others"}>
              <div>{messageContent.message}</div>
              <div>{messageContent.author}</div>
              <div>{messageContent.time}</div>
            </div>
          ))}
          </ScrollToBottom>
        </div>
        <div>
          <input
            type="text"
            placeholder="Hey..."
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            onKeyPress={(e) => {e.key == "Enter" && sendMessage()}}
          />
          <button onClick={sendMessage}> Send&#9658;</button>
        </div>
      </div>
    </>
  );
};

export default ChatMessenger;
