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

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="shadow bg-light signup-form"
        style={{ padding: "60px 100px 0px", width: "70%" }}
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
