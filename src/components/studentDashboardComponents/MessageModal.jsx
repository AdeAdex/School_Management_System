import React, { useEffect, useState } from "react";
import { Drawer, Group, Button, ScrollArea } from "@mantine/core";
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import "../studentDashboardComponents/MessageModal.css";
import { FaUserTie} from "react-icons/fa";
import { Textarea } from "@mantine/core";
import ChatModal from "./ChatModal";


const MessageModal = ({ opened, onClose, myMessages, markMessageAsRead,  socket  }) => {
  const [selectedSenderName, setSelectedSenderName] = useState("");
  const [selectedSenderSubject, setSelectedSenderSubject] = useState("");
  const [selectedSenderBody, setSelectedSenderBody] = useState("");
  const [selectedSenderDate, setSelectedSenderDate] = useState("");
  const [selectedSenderTime, setSelectedSenderTime] = useState("");
  const isMobile = useMediaQuery("(max-width: 50em)");
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });


  const openChatModal = (
    senderName,
    senderSubject,
    senderBody,
    senderDate,
    senderTime,
  ) => {
    onClose();
    setSelectedSenderName(senderName);
    setSelectedSenderSubject(senderSubject);
    setSelectedSenderBody(senderBody);
    setSelectedSenderDate(senderDate);
    setSelectedSenderTime(senderTime);
  };



  

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Messages"
        scrollAreaComponent={ScrollArea.Autosize}
        transitionProps={{ transition: "rotate-left" }}
        position="right"
        // size={isLargeScreen ? 350 : "100%"}
        className="mantine-drawer"
        size={isLargeScreen ? 300 : null}
      style={{ width: isLargeScreen ? 300 : '100%', backgroundColor: '' }}
      >
        {myMessages.map((message) => (
          <div
            className="d-flex w-100 each-modal-message mb-3 shadow p-2"
            style={{borderRadius: '5px', cursor: 'pointer'}}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            key={message._id}
            onClick={() => {
              openChatModal(
                message.senderName,
                message.messageSubject,
                message.messageBody,
                message.messageDate,
                message.messageTime
              );
              markMessageAsRead(message._id); 
            }}
          >
            <img src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694532366/ade_ljooff.png" className="me-3" style={{ width: "50px" }} alt="logo" />
            <div className="my-auto">
              <div>{message.senderName}</div>
              <div style={{ fontSize: "12px" }}>{message.messageSubject}</div>
            </div>
            <div className="ms-auto d-flex flex-column my-auto">
              <small className="my-auto" style={{ fontSize: "10px" }}>
                {message.messageDate}
              </small>
              <small className="my-auto" style={{ fontSize: "10px" }}>
                {message.messageTime}
              </small>
            </div>
          </div>
        ))}
      </Drawer>
      <ChatModal selectedSenderName={selectedSenderName} selectedSenderBody={selectedSenderBody} selectedSenderSubject={selectedSenderSubject} selectedSenderDate={selectedSenderDate} selectedSenderTime={selectedSenderTime} socket/>
      
    </>
  );
};

export default MessageModal;

