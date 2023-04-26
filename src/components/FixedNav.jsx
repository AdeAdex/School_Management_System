import React from "react";

const FixedNav = () => {
  return (
    <>
      <div
        className="fixed-container text-white w-100 d-flex px-5"
        style={{
          height: "50px",
          width: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "6",
          backgroundColor: "#262626",
        }}
      >
      <div className="w-50 h-100 my-auto d-flex justify-content-start position-relative">
        <img src="vite.svg" alt="" className="py-2"  />
      </div>
        <div className="w-50 my-auto d-flex justify-content-end">
          <button className="btn btn-sm text-white px-3" style={{backgroundColor: '#7AA93C'}}>Shop</button>
        </div>
      </div>
    </>
  );
};

export default FixedNav;
