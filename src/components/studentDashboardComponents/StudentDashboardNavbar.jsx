import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentDashboardOffcanvas_On_Small_Screen from "./StudentDashboardOffcanvas_On_Small_Screen";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Avatar } from "@mantine/core";
import AvatarUploader from "./AvatarUploader";
import StudentDashboardOffcanvas from "./StudentDashboardOffcanvas";
import { show_hide_offcanvas } from "../../redux/portalSlice";

const StudentDashboardNavbar = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [offCanvasTitleVisible, setOffCanvasTitleVisible] = useState(true);
  const offcanvasState = useSelector((state) => state.portalReducer.hide_show)
  const dispatch = useDispatch();


  const offCanvas = () => {
    const offCan = document.getElementById("offCan");
    const nav = document.getElementById("nav");
    const menu = document.getElementById("menu");
    toggle();

    if (offCan.style.width === "20%") {
      offCan.style.width = "5%";
      nav.style.width = "95%";
      menu.style.setProperty("display", "none", "important");
      setOffCanvasTitleVisible(false);
      dispatch(show_hide_offcanvas(true))
    } else {
      offCan.style.width = "20%";
      nav.style.width = "80%";
      menu.style.setProperty("display", "block", "important");
      setOffCanvasTitleVisible(true);
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
        className="shadow d-flex"
        // id="nav"
        style={{ width: "100%", height: "80px" }}
      >
        <div className="w-50 my-auto d-flex">
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
            className="my-auto"
            style={{ height: "25px", border: '1px solid blue' }}
          ></div>
          <div className="fw-bold ms-3 my-auto fs-5">
            {globalState.firstName} {globalState.lastName}
          </div>
          <div className="my-auto ms-auto fw-bold">Class: {globalState.level}</div>
          <div className="my-auto ms-auto fw-bold">Term: {globalState.term}</div>
          <div className="my-auto ms-auto fw-bold">Option: {globalState.options}</div>
        </div>
          
        <div className="w-50 my-auto d-flex justify-content-end gap-5 me-4">
          <button onClick={gooo} className="border-0">
            <i className="fas fa-bell fs-4 my-auto"></i>
          </button>
          <button onClick={gooo} className="border-0">
            <i className="fas fa-user fs-4 my-auto"></i>
          </button>
          <button onClick={gooo} className="border-0">
            <i className="fas fa-envelope fs-4 my-auto"></i>
          </button>
          <button onClick={gooo} className="border-0">
            <i className="fas fa-gear fs-4 my-auto"></i>
          </button>
          <button onClick={gooo} className="border-0">
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
      {/* <StudentDashboardOffcanvas isVisible={offCanvasTitleVisible}/> */}
      </div>


      <StudentDashboardOffcanvas_On_Small_Screen />
    </>
  );
};

export default StudentDashboardNavbar;






