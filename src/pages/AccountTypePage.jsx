import React, { useState, useEffect } from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footerComponents/Footer";

const AccountTypePage = () => {
  const [first, setfirst] = useState("");

  let h1;
  useEffect(() => {
    h1 = document.createElement("div");
    const h1textNode = document.createTextNode(
      "kindly click the button below to create an account"
    );
    h1.appendChild(h1textNode);
    textDiv.append(h1);
  }, []);

  const setImage = (mySelect = "nothing ") => {
    textDiv.innerHTML = "";
    if (mySelect == "staff") {
      h1 = document.createElement("div");
      const h2 = document.createElement("div");
      const h1textNode = document.createTextNode("Hello Staff");
      const h2textNode = document.createTextNode(
        "you are welcome, kindly click the button below to create an account"
      );
      h1.appendChild(h1textNode);
      h2.appendChild(h2textNode);
      textDiv.append(h1, h2);
    } else if (mySelect == "student") {
      h1 = document.createElement("div");
      const h2 = document.createElement("div");
      const h1textNode = document.createTextNode("Hi Student");
      const h2textNode = document.createTextNode(
        "you are welcome, kindly click the button below to create an account"
      );
      h1.appendChild(h1textNode);
      h2.appendChild(h2textNode);
      textDiv.append(h1, h2);
    } else if (mySelect == "nothing") {
      console.log("There's nothing here!");
    }
  };

  const navigate = useNavigate();
  const createAccount = () => {
    if (h1.innerHTML == "Hello Staff") {
      navigate("/staff_signup");
    } else if (h1.innerHTML == "Hi Student") {
      navigate("/student_signup");
    } else if (h1.innerHTML == "nothing") {
      console.log(h1.innerHTML == "There's nothing here!");
      navigate("/account_type");
    }
  };
  return (
    <>
      <PagesNavbar />
      <div
        className="d-flex flex-column justify-content-center w-100"
        style={{
          height: "100%",
          backgroundColor: "#f1f1f1",
          paddingTop: "170px",
        }}
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
            <label
              className=""
              style={{
                width: "150px",
                outline: "outset gray",
                cursor: "pointer",
              }}
              onClick={() => setImage("staff")}
            >
              <img
                src="pic/teacher_avatar.png"
                alt=""
                style={{ width: "100%", objectFit: "10% 70%" }}
              />
              <hr className="mx-3" />
              <div className="text-center fw-bold">Staff</div>
              <input
                type="radio"
                name="checkboxes"
                id=""
                className="mx-3 mb-3"
                style={{
                  // border: "2px solid red",
                  // backgroundColor: "#3197EE",
                  // boxShadow: "0 0 0 1px ",
                  float: "right",
                  transition: "all .5s ease",
                }}
              />
            </label>
            <label
              className=""
              style={{
                width: "150px",
                outline: "outset gray",
                cursor: "pointer",
              }}
              onClick={() => setImage("student")}
            >
              <img
                src="pic/student_avatar.avif"
                alt=""
                style={{ width: "100%", objectFit: "cover" }}
              />
              <hr className="mx-3" />
              <div className="text-center fw-bold">Student</div>
              <input
                type="radio"
                name="checkboxes"
                value
                id=""
                className="mx-3"
                style={{
                  // border: "2px solid red",
                  // backgroundColor: "#3197EE",
                  // boxShadow: "0 0 0 1px ",
                  float: "right",
                  transition: "all .5s ease",
                }}
              />
            </label>
          </div>
          <div className="text-center mt-5 text-div" id="textDiv">
            {first}
          </div>
          {/* <div
            id=""
            className="position-absolute"
            style={{ left: "47%", top: "60%" }}
          >
            <i className="fas fa-circle-check text-success"></i>
          </div> */}
          <button
            className="btn btn-sm px-5 mt-4 bg-primary text-white mx-auto"
            onClick={createAccount}
          >
            Continue
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountTypePage;
