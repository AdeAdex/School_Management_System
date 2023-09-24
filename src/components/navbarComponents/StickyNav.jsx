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
      <div className="my-auto d-flex sticky-icons" style={props.styles}  onClick={() => {
              if (props.to_where == "") {
                // Swal.fire({
                //   title: "Languages",
                //   showClass: {
                //     popup: "animate__animated animate__fadeInDown",
                //   },
                //   hideClass: {
                //     popup: "animate__animated animate__fadeOutUp",
                //   },
                // });
              } else {
                login(props.params);
              }
            }}>
        <div className="d-flex gap-2">
          <i
            className={props.icon}
            style={{ marginTop: "auto", marginBottom: "auto" }}
          ></i>
          <span
            className="text-uppercase"
            style={{ fontSize: "17px", cursor: "pointer" }}
          >
            {props.name}
          </span>
        </div>
      </div>
    </>
  );
};

export default StickyNav;
