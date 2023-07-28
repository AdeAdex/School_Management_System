import React, { useEffect, useState } from "react";
// import { Modal, Group, Button, ScrollArea } from "@mantine/core";
import { Drawer, Group, Button, ScrollArea } from "@mantine/core";
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import "../studentDashboardComponents/MessageModal.css";
// import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { FaUserTie } from "react-icons/fa";
import { Textarea } from "@mantine/core";

// const style = {
//   position: "absolute",
//   top: "85px",
//   left: "",
//   right: "40px",
//   // transform: 'translate(-50%, -50%)',
//   width: 400,
//   height: "87%",
//   bgcolor: "background.paper",
//   // border: '2px solid #000',
//   boxShadow: 24,
//   padding: "10px",
// };

const MessageModal = ({ opened, onClose, myMessages }) => {
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
    senderTime
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
        size={isLargeScreen ? 300 : undefined}
      style={{ width: isLargeScreen ? "10%" : '100%' }}
        // style={{display: 'flex', marginTop: 'auto', marginBottom: 'auto', height: '300px'}}
      >
        {myMessages.map((message) => (
          <div
            className="d-flex w-100 each-modal-message mb-3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            key={message._id}
            onClick={() =>
              openChatModal(
                message.senderName,
                message.messageSubject,
                message.messageBody,
                message.messageDate,
                message.messageTime
              )
            }
          >
            <img src="/pic/avatar.png" style={{ width: "80px" }} alt="" />
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

      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={opened}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={opened}>
          <Box sx={style} className="box">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Messages
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {myMessages.map((message) => (
                <div
                  className="d-flex w-100 each-modal-message"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  key={message._id}
                  onClick={() =>
                    openChatModal(
                      message.senderName,
                      message.messageSubject,
                      message.messageBody,
                      message.messageDate,
                      message.messageTime
                    )
                  }
                >
                  <img src="/pic/avatar.png" style={{ width: "80px" }} alt="" />
                  <div className="my-auto">
                    <div>{message.senderName}</div>
                    <div style={{ fontSize: "12px" }}>
                      {message.messageSubject}
                    </div>
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
            </Typography>
          </Box>
        </Fade>
      </Modal> */}

      <div
        className="modal fade w-100 h-100"
        id="staticBackdrop"
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog d-flex">
          <div className="modal-content my-auto">
            <div className="modal-header">
              <div className="modal-title d-flex" id="staticBackdropLabel">
                <img src="/pic/avatar.png" style={{ width: "50px" }} alt="" />
                <div className="my-auto d-flex flex-column">
                  <small>{selectedSenderName}</small>
                  <small>Active 2h ago</small>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-4">
                <div className="d-flex mb-4 gap-2 w-100 justify-content-center">
                  <small>{selectedSenderDate}</small>
                  <small>{selectedSenderTime}</small>
                </div>
                <div className="d-flex gap-2">
                  <img src="/pic/avatar.png" style={{ width: "45px" }} alt="" />
                  <div
                    className="my-auto p-2"
                    style={{
                      backgroundColor: "lightgreen",
                      borderRadius: "10px",
                    }}
                  >
                    {selectedSenderBody}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex mb-4 gap-2 w-100 justify-content-center">
                  <small>{selectedSenderDate}</small>
                  <small>{selectedSenderTime}</small>
                </div>
                <div className="d-flex gap-2">
                  <img src="/pic/avatar.png" style={{ width: "45px" }} alt="" />
                  <div
                    className="my-auto p-2"
                    style={{
                      backgroundColor: "lightgreen",
                      borderRadius: "10px",
                    }}
                  >
                    {selectedSenderBody}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex mb-4 gap-2 w-100 justify-content-center">
                  <small>{selectedSenderDate}</small>
                  <small>{selectedSenderTime}</small>
                </div>
                <div className="d-flex gap-2">
                  <img src="/pic/avatar.png" style={{ width: "45px" }} alt="" />
                  <div
                    className="my-auto p-2"
                    style={{
                      backgroundColor: "lightgreen",
                      borderRadius: "10px",
                    }}
                  >
                    {selectedSenderBody}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex mb-4 gap-2 w-100 justify-content-center">
                  <small>{selectedSenderDate}</small>
                  <small>{selectedSenderTime}</small>
                </div>
                <div className="d-flex gap-2">
                  <img src="/pic/avatar.png" style={{ width: "45px" }} alt="" />
                  <div
                    className="my-auto p-2"
                    style={{
                      backgroundColor: "lightgreen",
                      borderRadius: "10px",
                    }}
                  >
                    {selectedSenderBody}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer d-flex w-100">
              <FaUserTie size={20} color="gray" />
              <Textarea
                label=""
                placeholder="Message"
                autosize
                minRows={1}
                maxRows={4}
                style={{ width: "70%", backgroundColor: "" }}
              />
              <button type="button " className="btn btn-sm btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageModal;

// import React, { useState } from "react";

// const StudentDashboardNavbar = () => {
//   const globalState = useSelector((state) => state.portalReducer.studentInfo);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//         const [myMessages, setMyMessages] = useState([])
//         const gooo = () => {
//         setIsModalOpen(true);
//     setMyMessages(globalState.messages)
//         };
//         return (
//                 <>
//                 <Badge color="secondary" onClick={gooo} style={{cursor: 'pointer'}} className="my-auto" badgeContent={messagesLength} showZero>
//             <MailIcon />
//           </Badge>

// <MessageModal myMessages={myMessages} opened={isModalOpen} onClose={() => setIsModalOpen(false)} />

//          </>
//   );
// };

// export default StudentDashboardNavbar;
