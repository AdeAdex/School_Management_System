import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FiPlay } from "react-icons/fi";


const FixedNav = () => {
  const navigate = useNavigate()
  const navigateToShop = () => {
    window.open('https://adex2210.github.io/ShopStream-Your-One-Stop-Shopping-Destination', '_blank');
  }

  const navigateToGame = () => {
    window.open('https://adex2210.github.io/rock-Paper-Scissors/', '_blank');
  }
  return (
    <>
      <div
        className="fixed-container text-white w-100 d-flex px-5"
        style={{
          height: "50px",
          width: "90%",
          position: "fixed",
          top: "0",
          left: "0",
          // right: "0",
          zIndex: "6",
          backgroundColor: "#262626",
        }}
      >
      <div className="w-50 h-100 my-auto d-flex justify-content-start position-relative" >
      {/* <div className="my-auto text-uppercase px-2" onClick={navigateToGame} style={{borderRadius: '3px', cursor: 'pointer', backgroundColor: 'red', paddingTop: '3px', paddingBottom: '3px'}}><FiPlay className="my-auto" /> play game</div> */}
        <img src="/pic/game_icon.png" alt="" className="my-auto" onClick={navigateToGame} style={{borderRadius: '3px', cursor: 'pointer', width: '80px', height: '50px'}} />
      </div>
        <div className="w-50 my-auto d-flex justify-content-end">
          <button className="btn btn-sm text-white px-3" style={{backgroundColor: '#7AA93C'}} onClick={navigateToShop}>Shop</button>
        </div>
      </div>
    </>
  );
};

export default FixedNav;
