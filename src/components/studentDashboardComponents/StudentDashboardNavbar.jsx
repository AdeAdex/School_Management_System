import React, { useState } from "react";
import { useSelector } from "react-redux";
import StudentDashboardOffcanvas_On_Small_Screen from "./StudentDashboardOffcanvas_On_Small_Screen";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Avatar } from "@mantine/core";
import AvatarUploader from "./AvatarUploader";

const StudentDashboardNavbar = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const offCanvas = () => {
    toggle();
    if (offCan.style.width == "20%") {
      offCan.style.width = "5%";
      nav.style.width = "95%";
      menu.style.setProperty("display", "none", "important");
    } else {
      offCan.style.width = "20%";
      nav.style.width = "80%";
      menu.style.setProperty("display", "block", "important");
    }

    var x = window.matchMedia("(max-width: 768px)");

    if (x.matches) {
      ourBody.classList.add("new-class");
    } else {
    }
  };
  const gooo = () => {
    alert("msg");
  };

  const [myImage, setMyImage] = useState("");
  const [cloudImage, setCloudImage] = useState();

  const changeFile = (e) => {
    console.log(e.target.files[0]);
    let myImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myImage);
    reader.onload = () => {
      setMyImage(reader.result);
    };
  };

  const saveFile = () => {
    const endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/upload_profile_pic";
    axios
      .post(endpoint, { myImage })
      .then((response) => {
        console.log(response.data);
        setCloudImage(response.data.cloudLink);
        console.log(response.data.cloudLink);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      <div
        className="tw-shadow-xl tw-flex"
        id="nav"
        style={{ width: "100%", height: "80px" }}
      >
        <div className="tw-w-1/2 tw-my-auto tw-flex">
          {/* <button
            className="btn my-auto offcanvas-btn"
            type="button"
            onClick={offCanvas}
            id="offcanvasBtn"
          >
            <i className="fas fa-bars fs-3 px-2"></i>
          </button> */}
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
            className="tw-my-auto tw-border-l-2 tw-border-blue-600"
            style={{ height: "25px" }}
          ></div>
          <div className="tw-font-bold tw-ml-4 tw-my-auto tw-text-lg">
            {globalState.firstName} {globalState.lastName}
          </div>
          <div className="tw-my-auto tw-ms-auto fw-bold">Class: {globalState.level}</div>
          <div className="tw-my-auto tw-ms-auto fw-bold">Term: {globalState.term}</div>
          <div className="tw-my-auto tw-ms-auto fw-bold">Option: {globalState.options}</div>
        </div>
          
        <div className="tw-w-1/2 tw-my-auto tw-flex tw-justify-end tw-gap-5 tw-mr-7">
          <button onClick={gooo} className="">
            <i className="fas fa-bell fs-4 my-auto"></i>
          </button>
          <button onClick={gooo} className="">
            <i className="fas fa-user fs-4 my-auto"></i>
          </button>
          <button onClick={gooo} className="">
            <i className="fas fa-envelope fs-4 my-auto"></i>
          </button>
          <button onClick={gooo} className="">
            <i className="fas fa-gear fs-4 my-auto"></i>
          </button>
          <button onClick={gooo} className="">
            <img src="pic/avatar.png" style={{ width: "50px" }} alt="" />
          </button>
          <AvatarUploader/>
          {/* <input type="file" className="bg-info" name="" id="" onChange={(e) => changeFile(e)} />
          <button onClick={saveFile}>Upload</button>
          <img src={cloudImage} alt="" style={{ width: "50px" }} />
          <Avatar
            component="a"
            href=""
            target="_blank"
            src="/pic/avatar.png"
            alt="it's me"
            size="lg" radius="xl"
          /> */}
        </div>
      </div>

      <StudentDashboardOffcanvas_On_Small_Screen />
    </>
  );
};

export default StudentDashboardNavbar;
