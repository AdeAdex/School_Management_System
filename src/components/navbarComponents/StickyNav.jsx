import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

const StickyNav = (props) => {
  const navigate = useNavigate();
  const login = (myNumber) => {
    navigate(props.to_where);
    // alert("Hello" + myNumber);
  };

  return (
    <>
      <div className="my-auto d-flex" style={props.styles}>
        <div className="d-flex gap-2">
          <i
            className={props.icon}
            style={{ marginTop: "auto", marginBottom: "auto" }}
          ></i>
          <span
            className="text-uppercase"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ fontSize: "17px", cursor: "pointer" }}
            onClick={() => {
              if (props.to_where == "") {
                Swal.fire({
                  title: "Languages",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                  text: "hiiiiii",
                });
              } else {
                login(props.params);
              }
            }}
          >
            {props.name}
          </span>
        </div>
      </div>
    </>
  );
};

export default StickyNav;
