import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import CreateAccount from "../../pages/Student/CreateAccount";
import PickClass from "../../pages/Student/PickClass";
import Admission from "../../pages/Student/Admission";
import { useMediaQuery } from "react-responsive";

const SignupForm = ({isAdmissionPage}) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div
        className={`shadow bg-light ${isAdmissionPage && isSmallScreen ? "admission-hero" : "signup-form"}`}
        style={{ padding: "", width: "70%", }}
      >
      
        <Routes>
          <Route path="create_account" element={<CreateAccount />} />
          <Route path="admission/*" element={<Admission/>}/>
            <Route path="pick_class" element={<PickClass />} />
        </Routes>
      </div>
    </>
  );
};

export default SignupForm;



