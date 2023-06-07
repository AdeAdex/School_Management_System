import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const StaffChangePassword = () => {
  const globalState = useSelector((state)=>state.portalReducer.staffInfo)
  const [allMessages, setAllMessages] = useState([])

  useEffect(() => {
    setAllMessages([...allMessages, globalState.staffArray]);

  }, [])
  


  return (
    <>
      <div>
        <h3>Change Password</h3>
        {
        allMessages.map((eachStaff, index) => (
        <h5 key={index}>{eachStaff}</h5>
        ))
        }
        <h4> {globalState.phoneNumber}</h4>
      </div>
    </>
  );
};

export default StaffChangePassword;
