import React from "react";
import { useNavigate } from "react-router-dom";


const Parallax1 = ({
  classes,
  styles,
  inner_content_2
}) => {
  const navigate = useNavigate()
  const goToCoursesPage = () => {
    navigate('/our_courses')
  }
  return (
    <>
      <div className={classes} style={styles}>
        <div
          className="bg-image1-container d-flex flex-lg-row flex-md-column  m-auto justify-content-center gap-4"
          style={{ height: "", width: "75%" }}
        >
          <button
            className="parallax1-btn btn text-white text-uppercase d-flex gap-3 px-4 py-2 justify-content-center" onClick={goToCoursesPage}
            style={{ backgroundColor: "#74CEE4", boxShadow: 'inset 0px -4px #54CAE1' }}
          >
            <i className="fas fa-bars my-auto"></i> all courses
          </button>
          <button
            className="parallax1-btn btn text-white text-uppercase d-flex gap-3 px-4 py-2 justify-content-center"
            style={{ backgroundColor: "#74CEE4", boxShadow: 'inset 0px -4px #54CAE1' }}
          >
            <i className="fas fa-edit my-auto"></i>{inner_content_2}
          </button>
        </div>
      </div>
    </>
  );
};

export default Parallax1;
