import React from "react";
import { useParams, useLocation } from "react-router-dom";


const UserPage = () => {
  const location = useLocation();
  let { username } = useParams();
  return (
    <>
      <div>Welcome: {username}</div>
    </>
  );
};

export default UserPage;
