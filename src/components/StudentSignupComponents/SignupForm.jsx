import axios from "axios";
import React, { useState } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import PickClass from "../../pages/Student/PickClass";

const SignupForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState();
  // const [city, setCity] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [state, setState] = useState("");

  const createAccount = (e) => {
    let myDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      check: false,
      // city: city,
      // age: age,
      // gender: gender,
      // state: state,
      // matricNo: "",
    };
    navigate("/pick_class");

    // e.preventDefault();
    // const endpoint = "http://localhost:2000/student_account/student_signup";
    // axios.post(endpoint, myDetails)
    // .then((response) => {
    //   if (response.data == "Information saved to the student database") {
    //     navigate("/student_signin");
    //   }
    // });
  };

  return (
    <>
      <div
        className="shadow bg-light signup-form"
        style={{ padding: "100px 100px 0px", width: "70%" }}
      >
        <PickClass />
        <Routes>
          <Route path="pick_class" element={<PickClass/>} />
        </Routes>
      </div>
    </>
  );
};

export default SignupForm;
