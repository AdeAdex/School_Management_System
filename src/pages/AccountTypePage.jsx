import React, { useState } from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import { useNavigate } from "react-router-dom";

const AccountTypePage = () => {
  const [first, setfirst] = useState("");
  const setImage = (num) => {
    if (num === 1) {
      setfirst(
        "Hello Staff you are welcome, kindly click the button below to create an account"
      );
    } else if (num === 2) {
      setfirst(
        "Hi Student you are welcome, kindly click the button below to create an account"
      );
    } else {

    }
  };

  const navigate  = useNavigate()
  const createAccount = () => {
    if (first === "Hello Staff you are welcome, kindly click the button below to create an account") {
      navigate("/staff_signup")
    } else {
      navigate("/student_signup")
    }
  };
  return (
    <>
      <PagesNavbar />
      <div
        className="d-flex flex-column justify-content-center w-100"
        style={{ height: "100vh" }}
      >
        <div className="m-auto w-50 shadow h-50 px-5 py-3 d-flex flex-column justify-content-center">
          <h3
            className="text-capitalize text-center"
            style={{
              fontFamily: " Georgia, 'Times New Roman', Times, serif",
              color: "#01F",
            }}
          >
            choose account type
          </h3>
          <div className="d-flex gap-4 mx-auto mt-5">
            <img
              src="pic/avatar.png"
              alt=""
              style={{
                width: "100px",
                outline: "outset gray",
                cursor: "pointer",
              }}
              onClick={() => setImage(1)}
            />
            <img
              src="pic/ade.png"
              alt=""
              style={{
                width: "100px",
                outline: "outset gray",
                cursor: "pointer",
              }}
              onClick={() => setImage(2)}
            />
          </div>
          <div className="text-center mt-5">{first}</div>
          <button
            className="btn btn-sm px-5 mt-4 bg-primary text-white mx-auto"
            onClick={createAccount}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountTypePage;
