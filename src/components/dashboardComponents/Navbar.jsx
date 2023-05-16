import React from "react";

const Navbar = () => {
  const offCanvas = () => {
    if (offCan.style.width == "20%") {
      offCan.style.width = "5%";
      nav.style.width = "95%";
      menu.style.setProperty("display", "none", "important");
      canvasTitle.classList.add("hide")
//       canvasTitle.style.setProperty("opacity", "0", "important");
    } else {
      offCan.style.width = "20%";
      nav.style.width = "80%";
      menu.style.setProperty("display", "block", "important");
      canvasTitle.classList.remove("show")
//       canvasTitle.style.setProperty("opacity", "1", "important");
    }
  };

  return (
    <>
      <div
        className="shadow d-flex"
        id="nav"
        style={{ width: "80%", height: "80px" }}
      >
        <div className="w-50 my-auto d-flex">
          <button className="btn my-auto offcanvas-btn" type="button" onClick={offCanvas}>
            <i className="fas fa-bars fs-3 px-2"></i>
          </button>
          <div className="my-auto border-l-2 border-blue-600" style={{height: '25px'}}></div>
          <div className="font-bold ml-4 my-auto text-lg">Adeolu Amole</div>
        </div>
        <div className="w-50 my-auto"></div>
      </div>
    </>
  );
};

export default Navbar;
