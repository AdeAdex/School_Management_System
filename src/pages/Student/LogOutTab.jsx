import React, { useState } from "react";

const LogOutTab = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.removeItem("studentLoginToken");
    }, 500);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        {isLoading ? <div className="spinner"></div> : <span>Log out</span>}
      </button>
    </div>
  );
};

export default LogOutTab;
