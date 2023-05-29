import React, { useState } from "react";
import Offcanvas_On_Small_Screen from "./Offcanvas_On_Small_Screen";

const DashboardNavbar = () => {
  const offCanvas = () => {
    // const [isShown, setIsShown] = useState(false)
    if (offCan.style.width == "20%") {
      offCan.style.width = "5%";
      nav.style.width = "95%";
      menu.style.setProperty("display", "none", "important");
      //       setIsShown(false)
      //       canvasTitle.classList.add("hide")
      //       canvasTitle.style.setProperty("opacity", "0", "important");
    } else {
      offCan.style.width = "20%";
      nav.style.width = "80%";
      menu.style.setProperty("display", "block", "important");
      //       setIsShown(true)
      //       canvasTitle.classList.remove("show")
      //       canvasTitle.style.setProperty("opacity", "1", "important");
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
  return (
    <>
      <div
        className="shadow d-flex"
        id="nav"
        style={{ width: "100%", height: "80px" }}
      >
        <div className="w-50 my-auto d-flex">
          <button
            className="btn my-auto offcanvas-btn"
            type="button"
            onClick={offCanvas}
            id="offcanvasBtn"
          >
            <i className="fas fa-bars fs-3 px-2"></i>
          </button>
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
            className="my-auto border-l-2 border-blue-600"
            style={{ height: "25px" }}
          ></div>
          <div className="font-bold ml-4 my-auto text-lg"></div>
        </div>
        <div className="w-50 my-auto flex justify-end gap-5 mr-7">
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
        </div>
      </div>

      <Offcanvas_On_Small_Screen />
    </>
  );
};

export default DashboardNavbar;
