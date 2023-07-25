import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Avatar } from "@mantine/core";
import AvatarUploader from "./AvatarUploader";
import { show_hide_offcanvas } from "../../redux/portalSlice";
import StaffAvatarUploader from './StaffAvatarUploader';
import StaffDashboardOffcanvas_On_Small_Screen from './StaffDashboardOffcanvas_On_Small_Screen';


const StaffDashboardNavbar = () => {
  const globalState = useSelector((state)=>state.portalReducer.staffInfo)
  const [offCanvasTitleVisible, setOffCanvasTitleVisible] = useState(true);
  const dispatch = useDispatch();


  const offCanvas = () => {
    const offCan = document.getElementById("offCan");
    const nav = document.getElementById("nav");
    const menu = document.getElementById("menu");
    toggle();

    if (offCan.style.width === "20%") {
      offCan.style.width = "5%";
      nav.style.width = "95%";
      setOffCanvasTitleVisible(false);
      dispatch(show_hide_offcanvas(true))
    } else {
      offCan.style.width = "20%";
      nav.style.width = "80%";
      setOffCanvasTitleVisible(true);
      dispatch(show_hide_offcanvas(false))
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
            style={{ height: "25px", border: '1px solid blue' }}
          ></div>
          <div className="fw-bold ms-3 my-auto fs-5 navbar-content" >
            {globalState.firstName} {globalState.lastName}
          </div>
          <div className="my-auto ms-auto fw-bold navbar-content">Class: {globalState.level}</div>
          <div className="my-auto ms-auto fw-bold navbar-content">Term: {globalState.term}</div>
          <div className="my-auto ms-auto fw-bold navbar-content">Option: {globalState.options}</div>
        </div>
          
        <div className="w-50 my-auto d-flex justify-content-end gap-5 me-4 navbar-icons">
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
          <StaffAvatarUploader/>
        </div>
      </div>

      <StaffDashboardOffcanvas_On_Small_Screen/>
    </>
  )
}

export default StaffDashboardNavbar