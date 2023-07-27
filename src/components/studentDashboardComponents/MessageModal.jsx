import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, ScrollArea } from "@mantine/core";

const MessageModal = ({ opened, onClose, myMessages }) => {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  //   useEffect(() => {
  // //     console.log(myMessages);
  //   }, [myMessages])

  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
        transitionProps={{ transition: "rotate-left" }}
      >
        {myMessages.map((message) => (
          <div className="d-flex w-100" key={message._id}>
            <img src="/pic/avatar.png" style={{ width: "80px" }} alt="" />
            <div className="my-auto">
              <div>{message.senderName}</div>
              <div>{message.messageSubject}</div>
            </div>
            <div className="ms-auto my-auto">{message.messageDate}</div>
          </div>
        ))}
        
      </Modal>
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
