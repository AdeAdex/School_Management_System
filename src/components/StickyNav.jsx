import React from "react";
import { useNavigate } from "react-router-dom";

const StickyNav = (props) => {
  const navigate = useNavigate();
  const login = (myNumber) => {
    navigate(props.to_where);
    // alert("Hello" + myNumber);
  };

  return (
    <>
      <div className="w-50 my-auto w-auto">
        <div className="d-flex gap-2">
          <i
            className={props.icon}
            style={{ marginTop: "auto", marginBottom: "auto" }}
          ></i>
          <span
            className="text-uppercase"
            style={{ fontSize: "17px", cursor: "pointer" }}
            onClick={()=>login(props.params)}
          >
            {props.name}
          </span>
        </div>
      </div>
    </>
  );
};

export default StickyNav;
