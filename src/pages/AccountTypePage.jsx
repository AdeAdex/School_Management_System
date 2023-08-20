import React, { useState, useEffect } from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import { Router, redirect, useNavigate } from "react-router-dom";
import Footer from "../components/footerComponents/Footer";
import "./AccountTypePage.css";

const AccountTypePage = () => {
  const [first, setfirst] = useState("");
  const [redirectToCreateAccount, setRedirectToCreateAccount] = useState(false);
  const navigate = useNavigate();

  let h4;
  useEffect(() => {
    h4 = document.createElement("div");
    const h4textNode = document.createTextNode(
      "Please select an account type above to continue. We will create your account in seconds."
    );
    h4.appendChild(h4textNode);
    textDiv.append(h4);
  }, []);

  const setImage = (mySelect = "nothing ") => {
    textDiv.innerHTML = "";
    if (mySelect == "staff") {
      h4 = document.createElement("h4");
      const h2 = document.createElement("div");
      const h4textNode = document.createTextNode("Hello Staff,");
      const h2textNode = document.createTextNode(
        "You are welcome, Click the button below to create an account"
      );
      h4.appendChild(h4textNode);
      h2.appendChild(h2textNode);
      textDiv.append(h4, h2);
      textDiv.classList.remove("text-danger");
      textDiv.classList.remove("background-color-red");
    } else if (mySelect == "student") {
      h4 = document.createElement("h4");
      const h2 = document.createElement("div");
      const h4textNode = document.createTextNode("Hi Student,");
      const h2textNode = document.createTextNode(
        "Welcome to the account creation page, Click the button below to create your portal account"
      );
      h4.appendChild(h4textNode);
      h2.appendChild(h2textNode);
      textDiv.append(h4, h2);
      textDiv.classList.remove("text-danger");
      textDiv.classList.remove("background-color-red");
    } else if (mySelect == "nothing") {
      console.log("There's nothing here!");
    }
  };

  const createAccount = () => {
    if (h4.innerHTML == "Hello Staff,") {
      navigate("/staff_signup");
    } else if (h4.innerHTML == "Hi Student,") {
      // setRedirectToCreateAccount(true)
      // if (redirectToCreateAccount) {
      // }
      navigate("/student/create_account");
      // navigate("/student_signup/create_account");
    } else if (
      h4.innerHTML ==
      "Please select an account type above to continue. We will create your account in seconds."
    ) {
      navigate("/account_type");
      console.log(h4.innerHTML);
      textDiv.innerHTML =
        "⚠ Kindly select an account above and then click the 'Continue' button below to proceed.";
      textDiv.classList.add("text-danger");
      textDiv.classList.add("background-color-red");
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
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              color: "#01F",
            }}
          >
            choose account type
          </h3>
          <div className="d-flex flex-wrap justify-content-center gap-4 mx-auto mt-5">
            <label
              className="signup-account-label"
              style={{
                flex: "0 0 calc(45% - 8px)",
                maxWidth: "200px",
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
              />
            </label>
            <label
              className="signup-account-label"
              style={{
                flex: "0 0 calc(45% - 8px)",
                maxWidth: "200px",
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
              />
            </label>
          </div>
          <div className="text-center mt-5 text-div p-3" id="textDiv">
            {first}
          </div>
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
