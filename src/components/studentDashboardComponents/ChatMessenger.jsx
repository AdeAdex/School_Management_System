import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { Textarea } from "@mantine/core";
import { useSelector } from "react-redux";

const ChatMessenger = ({ socket, room, createDay, createTime, roomPic }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

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
        author: globalState.firstName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.current.emit("sent_message", messageData);
      //       setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  return (
    <>
      <div
        className="d-flex flex-column border"
        style={{ width: "50%", height: "100%" }}
      >
        <div className="text-center" style={{ height: "5%" }}>
          Live Chat
        </div>
        <div
          className="shadow position-relative"
          style={{ height: "80%", width: "100%", border: "3px solid red" }}
        >
          <div className="d-flex justify-content-center shadow p-3 gap-2">
            <img src={roomPic} style={{ width: "30px" }} alt="" />
            <div className="my-auto">
              <small
                className=""
                style={{ fontSize: "14px", fontFamily: "monospace" }}
              >
                {room}
              </small>
              <div></div>
            </div>
          </div>
          <ScrollToBottom
            style={{ overflowY: "scroll", width: "100%", height: "100%" }}
          >
          
            {messageList.map((messageContent, index) => (
              <div
                className="d-flex chat-div"
                key={index}
                id={
                  globalState.firstName === messageContent.author
                    ? "you"
                    : "others"
                }
              >
                <div>{messageContent.message}</div>
                <div>{messageContent.author}</div>
                <div>{messageContent.time}</div>
              </div>
            ))}
          </ScrollToBottom>
        </div>
        <div className="mt-auto d-flex yhan" style={{ height: "15%" }}>
          <BsFillEmojiSmileFill size={20} color="orange" />
          <Textarea
            label=""
            placeholder="Message"
            autosize
            minRows={1}
            maxRows={4}
            style={{ width: "100%", backgroundColor: "", height: "100%" }}
            value={currentMessage}
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMessage();
            }}
          />
          <button
            type="submit"
            onClick={sendMessage}
            className="btn btn-sm btn-primary h-auto"
            style={{ marginLeft: "10px" }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatMessenger;
