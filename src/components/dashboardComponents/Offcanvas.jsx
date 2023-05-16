import React from "react";
import OffcanvasList from "./OffcanvasList";
import OffcanvasTitle from "./OffcanvasTitle";

const Offcanvas = () => {
  return (
    <>
      <div
        className="position-relative"
        id="offCan"
        style={{
          width: "20%",
          overflow: "hidden",
          height: "100vh",
          backgroundColor: "#030552",
        }}
      >
        <div className="dashboard-offcanvas w-100 position-relative text-white">
          <div
            className="w-full flex justify-center shadow border-b-2"
            style={{ height: "80px" }}
          >
            <img
              src="pic/ade.png"
              alt=""
              className="my-auto"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <div className="capitalize text-center py-6 text-lg font-bold" id="menu">
            personal menu
          </div>
          <div className="px-4 grid gap-y-12">
            <div className="grid gap-y-5">
              <OffcanvasTitle title="main menu" />
              <OffcanvasList
                item="dashboard"
                icons="fas fa-border-all"
              />
            </div>
            <div className="grid gap-y-5">
            <OffcanvasTitle title="profile"/>
            <OffcanvasList item="my profile" icons="fas fa-user"/>
            <OffcanvasList item="change password" icons="fas fa-lock"/>
            <OffcanvasList item="edit details" icons="fas fa-edit"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
