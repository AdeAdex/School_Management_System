import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentDashboardOffcanvas_On_Small_Screen from "./StudentDashboardOffcanvas_On_Small_Screen";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Avatar } from "@mantine/core";
import AvatarUploader from "./AvatarUploader";
import { show_hide_offcanvas } from "../../redux/portalSlice";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageModal from "./MessageModal";
import ChatModal from "./ChatModal";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Button, Text } from "@mantine/core";
import Backdrop from "@mui/material/Backdrop";

const StudentDashboardNavbar = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [offCanvasTitleVisible, setOffCanvasTitleVisible] = useState(true);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myMessages, setMyMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const [messagesLength, setMessagesLength] = useState(0);

  const offCanvas = () => {
    const offCan = document.getElementById("offCan");
    const nav = document.getElementById("nav");
    const menu = document.getElementById("menu");
    toggle();

    if (offCan.style.width === "20%") {
      offCan.style.width = "5%";
      nav.style.width = "95%";
      setOffCanvasTitleVisible(false);
      dispatch(show_hide_offcanvas(true));
    } else {
      offCan.style.width = "20%";
      nav.style.width = "80%";
      setOffCanvasTitleVisible(true);
      dispatch(show_hide_offcanvas(false));
    }

    var x = window.matchMedia("(max-width: 768px)");

    if (x.matches) {
      ourBody.classList.add("new-class");
    } else {
    }
  };

  const openNotification = () => {
    setIsModalOpen(true);
    setMyMessages(globalState.messages);
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const logOut = () => {
    setOpen(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen(false);
      localStorage.removeItem("studentSignInToken");
    }, 1200);
  };

  const [myImage, setMyImage] = useState("");
  const [cloudImage, setCloudImage] = useState();
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  useEffect(() => {
    const unreadMessages = myMessages.filter((message) => !message.read);
    setMessagesLength(unreadMessages.length);
  }, [myMessages]);

  const markMessageAsRead = (messageId) => {
    // Create a copy of the current messages array with updated messages
    const updatedMessages = myMessages.map((message) => {
      if (message._id === messageId && !message.read) {
        // Create a new object that is a copy of the message with an added "read" property
        return { ...message, read: true };
      }
      return message; // Return the original message if it's not the one to be marked as read
    });

    // Check if the messages array was actually updated
    if (updatedMessages !== myMessages) {
      // Update the state with the updated messages
      setMyMessages(updatedMessages);
    }
  };

  const toProfile = () => {
    navigate("/student_dashboard/profile");
  };

  const toChat = () => {
    navigate("/student_dashboard/conversation")
  }

  return (
    <>
      <div
        className="shadow d-flex"
        // id="nav"
        style={{ width: "100%", height: "80px" }}
      >
        <div className="w-50 my-auto d-flex burger">
          <Burger
            opened={opened}
            className="my-auto offcanvas-btn px-2 mx-3"
            onClick={offCanvas}
            aria-label={label}
          />
          <button
            className="btn my-auto offcanvas-btn2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="fas fa-bars fs-3 px-2"></i>
          </button>
          <div
            className="my-auto navbar-content"
            style={{ height: "25px", border: "1px solid blue" }}
          ></div>
          <div className="fw-bold ms-3 my-auto fs-5 navbar-content">
            {globalState.firstName} {globalState.lastName}
          </div>
          <div className="my-auto ms-auto fw-bold navbar-content">
            Class: {globalState.level}
          </div>
          <div className="my-auto ms-auto fw-bold navbar-content">
            Term: {globalState.term}
          </div>
          <div className="my-auto ms-auto fw-bold navbar-content">
            Option: {globalState.options}
          </div>
        </div>

        <div className="w-50 my-auto d-flex justify-content-end gap-5 me-4 navbar-icons">
          <Badge
            color="secondary"
            onClick={openNotification}
            style={{ cursor: "pointer" }}
            className="my-auto"
            badgeContent={messagesLength}
            // badgeContent={globalState.messagesLength}
            showZero
          >
            <NotificationsIcon />
          </Badge>
          <button className="border-0" onClick={toProfile}>
            <i className="fas fa-user fs-4 my-auto"></i>
          </button>
          <Badge
            color="secondary"
            style={{ cursor: "pointer" }}
            className="my-auto"
            showZero
            onClick={toChat}
          >
            <MailIcon />
          </Badge>
          <Menu>
            <Menu.Target>
              <button className="border-0">
                <i className="fas fa-gear fs-4 my-auto"></i>
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label className="mb-1">Settings</Menu.Label>
              <Menu.Item>Help</Menu.Item>
              <Menu.Item onClick={logOut}>Log Out</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <AvatarUploader
            myEmail={globalState.email}
            profilePicture={globalState.profileURL}
          />
        </div>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {isLoading && <div className="loader"></div>}
      </Backdrop>

      <MessageModal
        myMessages={myMessages}
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        markMessageAsRead={markMessageAsRead}
      />
      <ChatModal
        name={globalState.firstName}
        picture={cloudImage}
        id={globalState._id}
      />

      <StudentDashboardOffcanvas_On_Small_Screen />
    </>
  );
};

export default StudentDashboardNavbar;
