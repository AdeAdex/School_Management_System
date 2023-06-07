import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentCourseRegistration = () => {
  let dispatch = useDispatch();
  const globalState = useSelector((state) => state.portalReducer.staffInfo);
  useEffect(() => {
    let endpoint = "http://localhost:2000/staff_account/edit_details";
    axios.get(endpoint)
    .then((res) => {
        console.log(res.data.response);
    })
  }, []);

  return (
    <>
      <div>hi</div>
    </>
  );
};

export default StudentCourseRegistration;
