import React from "react";
import "./SignIn.css";

const SignIn = () => {

  const login = () => {
    
  }
  return (
    <div className="d-flex gap-5 mx-auto main">
      <div className="main-container">
        <div className="container">
          <div className="file-btn" id="imgContainer">
            <img src="pic/avatar.png" id="myFrame" />
          </div>
          <h1 id="h1">
            welcome <span>back!</span>
          </h1>
          <form action="/signin" method="post">
            <div className="inputbox">
              <input required="required" type="text" name="em" />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputbox mb-4">
              <input required="required" type="text" name="pass" />
              <span>Password</span>
              <i></i>
            </div>
            <div className="check">
              <span>  
                <input type="checkbox" id="checkBox" /> Remember Me
              </span>
              <a href="" id="forgotPass">
                Forgot password
              </a>
            </div>
            <button className="btn btn-primary col-12" type="submit" onClick={login}>
              Login
            </button>
            <h3 id="h3">or log in with</h3>
            <div className="social-icons">
              <a href="www.facebook.com" className="icon-links">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="www.facebook.com" className="icon-links">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="www.google.com" className="icon-links">
                <i className="fab fa-google"></i>
              </a>
              <a href="www.twitter.com" className="icon-links">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="sign-up-container">
              <span>Not on Adex yet?</span> <a href="/signup">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
      <div
        className="d-none second-container"
        style={{ width: "70%", height: "100%" }}
      >
        <div
          className="w-75 h-75 m-auto text-black p-5"
          style={{backgroundColor: '#302bc8;'}}
        >
          digital platform for distance learning
        </div>
      </div>
    </div>
  );
};

export default SignIn;
