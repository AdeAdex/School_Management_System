import React, { useState } from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footerComponents/Footer";

const AccountTypePage = () => {
  const [first, setfirst] = useState(
    "Hello and welcome to the account type selections page, kindly select an account type to create an account"
  );
  const setImage = (mySelect) => {
    textDiv.innerHTML = ""
    if (mySelect === "staff") {
      
      // "Hello Staff you are welcome, kindly click the button below to create an account"
      const h1 = document.createElement("div");
      const h2 = document.createElement("div");
      const h3 = document.createElement("div");
      const h1textNode = document.createTextNode("Hello Staff");
      const h2textNode = document.createTextNode("you are welcome, kindly click the button below to create an account");
      const h3textNode = document.createTextNode("Hello World three");
      h1.appendChild(h1textNode);
      h2.appendChild(h2textNode);
      h3.appendChild(h3textNode);
      let x = textDiv.append(h1, h2, h3);
      alert(h2.innerHTML)
      // first = x
      // setfirst(first);
    } else if (mySelect === "student") {
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
      textDiv.classList.add("bg-danger");
    } else if (
      first ===
      "Hi Student you are welcome, kindly click the button below to create an account"
    ) {
      navigate("/student_signup");
      textDiv.classList.add("bg-danger");
    } else {
      setfirst("Kindly select an account to create an account");
      textDiv.classList.add("bg-red-500");
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
            <div
              className="px-4 pt-4 pb-3"
              style={{
                width: "150px",
                outline: "outset gray",
                cursor: "pointer",
              }}
              onClick={() => setImage('staff')}
            >
              <img
                src="pic/teacher_avatar6.jpg"
                alt=""
                style={{ width: "100%", objectFit: "10% 70%" }}
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
              onClick={() => setImage('student')}
            >
              <img
                src="pic/student_avatar.avif"
                alt=""
                style={{ width: "100%", objectFit: "cover" }}
              />
              <hr />
              <div className="text-center fw-bold">Student</div>
            </div>
          </div>
          <div className="text-center mt-5 text-div" id="textDiv">
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
