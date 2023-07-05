import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import * as yup from "yup";
import { SnackbarProvider, useSnackbar } from 'notistack';
import Backdrop from '@mui/material/Backdrop';



const StudentChangePassword = ({myEmail: myEmail}) => {
  return (
    <SnackbarProvider maxSnack={1} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} >
      <MyApp myEmail={myEmail}/>
    </SnackbarProvider>
  ) 
}

function MyApp({myEmail: myEmail}) {
  const [myMessage, setMyMessage] = useState("");
  let navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const changePass = useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      setOpen(true);
      setIsLoading(true);
      let newValues = { ...values, myEmail };
      console.log(newValues);
      setTimeout(() => {
        let endpoint = "http://localhost:2000/student_account/change_student_password";
      axios
      .post(endpoint, newValues)
      .then((response) => {
        setIsLoading(false);
        setMyMessage(response.data.message);
        enqueueSnackbar(response.data.message, { variant: 'error' });
        // navigate('/student_login')
      });
        setIsLoading(false);
        setOpen(false);
      }, 2000);
      
    },

    validationSchema: yup.object({
      oldPassword: yup
        .string()
        .required("Old Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
  });


  return (
    <>
      <form
        action=""
        className="email-verification-fro mx-auto d-flex flex-column border shadow"
        method="post"
        onSubmit={changePass.handleSubmit}
      >
        <div className="pt-4">
        
          <img
            src="pic/ade.png"
            alt=""
            style={{ width: "50px" }}
            className="mx-auto d-flex mb-4"
          />
          <h3 className="text-center">Change Password?</h3>
          <hr />
        </div>
        <div className="d-flex flex-column pt-2 px-5">
        <div className="col-lg-12 position-relative d-flex gap- flex-column mb-3 mt-3">
            <input
              type="password"
              name="oldPassword"
              placeholder="Enter Old Password"
              className={
                changePass.touched.oldPassword && changePass.errors.oldPassword
                  ? "input form-control is-invalid"
                  : "input form-control is-vali"
              }
              onChange={changePass.handleChange}
              onBlur={changePass.handleBlur}
            />
            {changePass.touched.oldPassword&& changePass.errors.oldPassword? (
              <small className="error text-danger">
                {changePass.errors.oldPassword}
              </small>
            ) : null}
          </div>
          <div className="col-lg-12 position-relative d-flex gap- flex-column mb-3 mt-3">
            <input
              type="password"
              name="password"
              placeholder="Enter New Password"
              className={
                changePass.touched.password && changePass.errors.password
                  ? "input form-control is-invalid"
                  : "input form-control is-vali"
              }
              onChange={changePass.handleChange}
              onBlur={changePass.handleBlur}
            />
            {changePass.touched.password && changePass.errors.password ? (
              <small className="error text-danger">
                {changePass.errors.password}
              </small>
            ) : null}
          </div>
          <div className="col-lg-12 position-relative d-flex gap- flex-column mb-3 mt-3">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter New Confirm Password"
              className={
                changePass.touched.confirmPassword &&
                changePass.errors.confirmPassword
                  ? "input form-control is-invalid"
                  : "input form-control is-vali"
              }
              onChange={changePass.handleChange}
              onBlur={changePass.handleBlur}
            />
            {changePass.touched.confirmPassword &&
            changePass.errors.confirmPassword ? (
              <small className="error text-danger">
                {changePass.errors.confirmPassword}
              </small>
            ) : null}
          </div>
        <button type="submit" className="btn btn-primary my-4 w-50" style={{marginLeft: 'auto'}} disabled={!changePass.isValid || !changePass.dirty}>Change Password</button>

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
      {isLoading && <div class="loader"></div>}
      </Backdrop>
        </div>

      </form>
    </>
  )
}

export default StudentChangePassword