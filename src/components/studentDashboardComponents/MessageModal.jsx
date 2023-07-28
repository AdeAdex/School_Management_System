import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
// import { Modal, Group, Button, ScrollArea } from "@mantine/core";
import "../studentDashboardComponents/MessageModal.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "85px",
  left: "",
  right: "40px",
  // transform: 'translate(-50%, -50%)',
  width: 400,
  height: "87%",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  padding: "10px",
};

const MessageModal = ({ opened, onClose, myMessages }) => {
  const [selectedSenderName, setSelectedSenderName] = useState("");


  const openChatModal = (senderName) => {
    onClose();
    setSelectedSenderName(senderName);
  }

  return (
    <>
      {/* <Modal
        opened={opened}
        onClose={onClose}
        title="Messages"
        scrollAreaComponent={ScrollArea.Autosize}
        transitionProps={{ transition: "rotate-left" }}
        // size="70%"
        xOffset="250px"
        position="right"
        style={{position: 'absolute'}}
        
      >
        {myMessages.map((message) => (
          <div className="d-flex w-100 each-modal-message" key={message._id}>
            <img src="/pic/avatar.png" style={{ width: "80px" }} alt="" />
            <div className="my-auto">
              <div>{message.senderName}</div>
              <div>{message.messageSubject}</div>
            </div>
            <div className="ms-auto my-auto">{message.messageDate}</div>
          </div>
        ))}
        
      </Modal> */}

      <Modal
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Messages
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {myMessages.map((message) => (
                <div
                  className="d-flex w-100 each-modal-message" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                  key={message._id}
                  onClick={() => openChatModal(message.senderName, message.messageSubject, message.messageBody)}
                >
                  <img src="/pic/avatar.png" style={{ width: "80px" }} alt="" />
                  <div className="my-auto">
                    <div>{message.senderName}</div>
                    <div style={{fontSize: '12px'}}>{message.messageSubject}</div>
                  </div>
                  <div className="ms-auto my-auto">
                  <small className="ms-auto my-auto" style={{fontSize: '8px'}}>{message.messageDate}</small>
                  <small className="ms-auto my-auto" style={{fontSize: '8px'}}>{message.messageTime}</small>
                  </div>
                </div>
              ))}
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            {selectedSenderName}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
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
