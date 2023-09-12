import React from "react";
import { Link, useNavigate } from "react-router-dom";
import StickyNav from "./StickyNav";
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

const Nav = () => {
  let navigate = useNavigate()
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  const mobileStyle = {
    maxHeight: opened ? "1000px" : "0",
    overflow: "hidden",
    // opacity: opened ? 1 : 0,
    transition: "max-height 1s ease-in-out, opacity 1s ease-in-out",
  };
  
  const desktopStyle = {
    height: "80px",
  };



  const navMobileStyle = {
   height: '50px',
   paddingLeft: '12px'
  };
  
  const navDesktopStyle = {
    height: "50px",
  };

  return (
    <>
      <nav
        className="navbar shadow navbar-expand-lg px-2 px-lg-5 d-flex flex-column"
        style={{
          position: "relative",
          height: "70px",
          backgroundColor: "white",
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      >
        <div className="container-fluid h-100" style={{ top: "0px", padding: '0px' }}>
        <div className="logo-icon-div d-flex justify-content-between w-auto" style={{backgroundColor: ''}}>
        <Link
            className="navbar-brand w-auto h-100 position-relative d-flex"
            to="/"
          >
            <img
              src="pic/ade.png"
              alt="Logo"
              className="my-auto logo-image"
              style={window.innerWidth <= 768 ? navMobileStyle : navDesktopStyle}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <Burger opened={opened} onClick={toggle} aria-label={label} />
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
        </div>
          <div
            className={`collapse navbar-collapse ${opened ? "show opened" : ""}`}
            id="navbarSupportedContent"
             style={window.innerWidth <= 768 ? mobileStyle : desktopStyle}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="sign-in-lg d-flex justify-content-between my-3 w-100 gap-3">
                <StickyNav
                  name="register"
                  icon="fas fa-circle-plus"
                  to_where="/account_type"
                  styles={{border: '1px solid gray', width: '50%', padding: '5px 0px', justifyContent: 'center'}}
                ></StickyNav>
                <StickyNav
                  name="login"
                  icon="fas fa-right-to-bracket"
                  to_where="/login_account_type"
                  styles={{border: '1px solid gray', width: '50%', padding: '5px 0px', justifyContent: 'center'}}
                ></StickyNav>
              </div>
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  courses
                </a>
                <ul className="dropdown-menu" style={{width: '250px', padding: '0px', marginTop: '15px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderTop: '4px solid #3D6AFF'}}>
                  <li>
                    <Link to="/our_courses" state={{ para: "jOne" }} className="dropdown-item">
                      JSS 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/our_courses" state={{ para: "jTwo" }} className="dropdown-item">
                      JSS 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/our_courses" state={{ para: "jThree" }} className="dropdown-item">
                      JSS 3
                    </Link>
                  </li>

                  <li>
                    <Link to="/our_courses" state={{ para: "sOne" }} className="dropdown-item">
                      SSS 1
                    </Link>
                  </li>

                  <li>
                    <Link to="/our_courses" state={{ para: "sTwo" }} className="dropdown-item">
                      SSS 2
                    </Link>
                  </li>

                  <li>
                    <Link to="/our_courses" state={{ para: "sThree" }} className="dropdown-item">
                      SSS 3
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  portals
                </a>
                <ul className="dropdown-menu" style={{width: '250px', padding: '0px', marginTop: '15px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderTop: '4px solid #3D6AFF'}}>
                  <li>
                    <Link className="dropdown-item" to="/staff_signin">
                      teachers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/student_signin">
                      students
                    </Link>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li> */}
                  <li>
                    <a className="dropdown-item" href="#">
                      excursions
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">blog</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  email
                </a>
                <ul className="dropdown-menu" style={{width: '250px', padding: '0px', marginTop: '15px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderTop: '4px solid #3D6AFF'}}>
                  <li>
                    <Link className="dropdown-item" to="/staff_signup">
                      teachers email
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      students email
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">more</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">About US</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
