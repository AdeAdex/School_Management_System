import React, { useState } from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import { useNavigate } from "react-router-dom";

const AccountTypePage = () => {
  const [first, setfirst] = useState("");
  const setImage = (num) => {
    if (num === 1) {
      setfirst(
        "Hello Staff" +
          <br /> +
          "you are welcome, kindly click the button below to create an account"
      );
    } else if (num === 2) {
      setfirst(
        "Hi Student you are welcome, kindly click the button below to create an account"
      );
    } else {
      alert("hiiiii");
    }
  };

  const navigate = useNavigate();
  const createAccount = () => {
    if (
      first ===
      "Hello Staff you are welcome, kindly click the button below to create an account"
    ) {
      navigate("/staff_signup");
    } else if (
      first ===
      "Hi Student you are welcome, kindly click the button below to create an account"
    ) {
      navigate("/student_signup");
    } else {
      navigate("/account_type");
    }
  };
  return (
    <>
      <PagesNavbar />
      <div
        className="d-flex flex-column justify-content-center w-100"
        style={{ height: "100vh", backgroundColor: '#f1f1f1' }}
      >
        <div className="m-auto w-lg-50 w-sm-100 shadow px-5 py-5 d-flex flex-column justify-content-center">
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
            <div
              className="px-4 pt-4 pb-3"
              style={{
                width: "150px",
                outline: "outset gray",
                cursor: "pointer",
              }}
              onClick={() => setImage(1)}
            >
              <img
                src="pic/teacher_avatar6.jpg"
                alt=""
                style={{ width: "100%", objectFit: 'cover' }}
              />
              <hr />
              <div className="text-center fw-bold">Staff</div>
            </div>
            <div
              className="px-4 pt-4 pb-3"
              style={{
                width: "150px",
                outline: "outset gray",
                cursor: "pointer",
              }}
            >
              <img
                src="pic/student_avatar.avif"
                alt=""
                style={{ width: "100%", objectFit: 'cover' }}
                onClick={() => setImage(2)}
              />
              <hr />
              <div className="text-center fw-bold">Student</div>
            </div>
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
