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
  //   useEffect(() => {
  // //     console.log(myMessages);
  //   }, [myMessages])


  const openChatModal = () => {
    onClose={close}
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
                  onClick={openChatModal}
                >
                  <img src="/pic/avatar.png" style={{ width: "80px" }} alt="" />
                  <div className="my-auto">
                    <div>{message.senderName}</div>
                    <div>{message.messageSubject}</div>
                  </div>
                  <div className="ms-auto my-auto">{message.messageDate}</div>
                </div>
              ))}
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
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
