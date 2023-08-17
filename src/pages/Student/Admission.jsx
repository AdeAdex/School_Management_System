import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import PickClass from "./PickClass";
import Payment from "./Payment";
import { useDispatch, useSelector } from "react-redux";
import PersonalInformation from "./PersonalInformation";
import Education from "./Education";
import Referees from "./Referees";
import axios from "axios";
import { newStudent } from "../../redux/portalSlice";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CredentialUpload from "./CredentialUpload";
import Backdrop from "@mui/material/Backdrop";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Admission = () => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [paid, setPaid] = useState(globalState.paidForAdmission)

 

  const handleClose = () => {
    setOpen(false);
  };

  
  const payWithPaystack = () => {
    let handler = PaystackPop.setup({
      key: "pk_test_a70c6dbb491c1021f98ea8cf0b840542607c2537",
      email: globalState.email,
      amount: 5000 * 100,
      ref: "Adex" + Math.floor(Math.random() * 1000000000 + 1),
      onClose: function () {
        let message = "You just cancel this transaction";
        Swal.fire({
          icon: "error",
          title: "Dear " + globalState.firstName,
          text: message,
          footer:
            "For further assistance, please call us at +2347033959586 or email us at adeoluamole@gmail.com",
        });
      },
      callback: function (response) {
        let message =
          "Payment completed! Your Reference Number is: " + response.reference;
        Swal.fire({
          icon: "success",
          title: "Thank You " + globalState.firstName,
          text: message,
          footer: "",
        });
        if (response.status == "success") {
          let payload = {
            myEmail: globalState.email,
            justPaid: true,
          }
          let endpoint = "http://localhost:2000"
          axios.post(endpoint, payload)
          .then((response) => {

          })
          .catch((err) => {
            console.log(err)
          })
        }
      },
    });

    handler.openIframe();
  };


  // const handleChange = (event, newValue) => {
  //     setValue(newValue);
  // };
  
  // const handlePaymentClick = () => {
  //   payWithPaystack();
  //   navigate("/student/admission/payment");
  // };

  const handleChange = (event, newValue) => {
    console.log(newValue);
    if (paid && newValue !== 1) {
      setValue(newValue);
    } else if (!paid && (newValue !== 1 || newValue !== 0)) {
      setValue(1);
      navigate("/student/admission/payment");
      payWithPaystack();
    } else {
      setValue(newValue);
    }
  };

  const handlePaymentClick = () => {
    // if (value === 1) {
      payWithPaystack();
    // }
    navigate("/student/admission/payment");
  };
  
  
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "normal",
  //     textDecoration: isActive ? "none" : "none",
  //   };
  // };

  
  useEffect(() => {
    setOpen(true);
    setIsLoading(true);
    let studentLoginToken = localStorage.studentLoginToken;
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/student__admission_dashboard";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${studentLoginToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res.data.status) {
          setIsLoading(false);
          setOpen(false);
          dispatch(newStudent(res.data.response));
          // setPaid(globalState.paidForAdmission)
          // console.log(res.data.message);
        } else {
          console.log(res.data.message);
          console.log(res.data.status);
          navigate("/student_login");
        }
      })
      .catch((err) => {
        console.log(err);
        // navigate('/student_login');
        // console.log(err.data.message);
        // console.log(err.data.status);
      });

      // if (!paid) {
      //   navigate("/student/admission/payment");
      // }

  }, [globalState]);

 
  // console.log(paid);
  const pay = true;

  return (
    <>
      <div className="">
        {globalState?.firstName && globalState?.lastName ? (
          <div className="font-bold ml-4 my-auto d-fle text-lg fw-bold fs-4 shadow p-2 mb-3">
            {globalState.firstName} {globalState.lastName}
            <div className="my-auto" style={{ fontSize: "14px" }}>
              <small>Registration Number:</small>{" "}
              {globalState.registrationNumber}
            </div>
          </div>
        ) : (
          <div className="loaders"></div>
        )}
        {/* <div className="font-bold ml-4 my-auto text-lg fw-bold fs-4 shadow p-2 mb-3">
          {globalState.firstName} {globalState.lastName}
        </div> */}
        {/* <div className="" style={{width: "100%" }}>
          <div
            className="d-flex justify-content-between px-lg-4"
            style={{ width: "100%", overflowX: "auto", overflowY: 'hidden', height: '40px', borderBottom: '1px solid lightgray' }}
          >
            <NavLink style={navLinkStyles} to="pick_class" className="nav-links">
              Pick Class
            </NavLink>
            <NavLink style={navLinkStyles} to="payment" className="nav-link">
              Payment
            </NavLink>
            <NavLink style={navLinkStyles} to="personal_information" className="nav-link">
              Personal Information
            </NavLink>
            <NavLink style={navLinkStyles} to="education" className="nav-link">
              Education
            </NavLink>
            <NavLink style={navLinkStyles} to="referees" className="nav-link">
              Referees
            </NavLink>
          </div>
          <div className="admission" style={{padding: "20px 100px 0px",}}>
            <Routes>
              <Route path="pick_class" element={<PickClass />} />
              <Route path="payment" element={<Payment />} />
              <Route
                path="personal_information"
                element={<PersonalInformation />}
              />
              <Route path="education" element={<Education />} />
              <Route path="referees" element={<Referees />} />
            </Routes>
          </div>
        </div> */}

        {/* <Routes>
          <Route path="pick_class" element={<PickClass />} />
          <Route path="payment" element={<Payment />} />
          <Route
            path="personal_information"
            element={<PersonalInformation />}
          />
          <Route path="education" element={<Education />} />
          <Route path="referees" element={<Referees />} />
        </Routes> */}
        <div>
          <Box
            sx={{
              flexGrow: 1,
              width: "100% ",
              bgcolor: "background.paper",
            }}
          >
            <Tabs
              orientation="horizontal"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="visible arrows tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                minWidth: "100%",
              }}
            >
              <Tab
                label="Pick Class"
                component={Link}
                to="/student/admission/pick_class"
                // to={!paid ? "/student/admission/payment" : "/student/admission/pick_class"}
                sx={{
                  "&:hover": {
                    color: "blue",
                    backgroundColor: "lightgray",
                  },
                }}
              />
              <Tab
                label="Payment"
                onClick={handlePaymentClick}
                sx={{
                  "&:hover": {
                    color: "blue",
                    backgroundColor: "lightgray",
                  },
                }}
                // component={Link}
                // to="/student/admission/payment"
              />
              <Tab
                label="Personal Information"
                component={Link}
                to={!paid ? "/student/admission/payment" : "/student/admission/personal_information"}
                // to="/student/admission/personal_information"
                sx={{
                  "&:hover": {
                    color: "blue",
                    backgroundColor: "lightgray",
                  },
                }}
              />
              <Tab
                label="Education"
                component={Link}
                to={!paid ? "/student/admission/payment" : "/student/admission/education"}
                // to="/student/admission/education"
                sx={{
                  "&:hover": {
                    color: "blue",
                    backgroundColor: "lightgray",
                  },
                }}
              />
              <Tab
                label="Referees"
                component={Link}
                to={!paid ? "/student/admission/payment" : "/student/admission/referees"}
                // to="/student/admission/referees"
                sx={{
                  "&:hover": {
                    color: "blue",
                    backgroundColor: "lightgray",
                  },
                }}
              />
              <Tab
                label="Credential Upload"
                component={Link}
                to={!paid ? "/student/admission/payment" : "/student/admission/credential"}
                // to="/student/admission/credential"
                sx={{
                  "&:hover": {
                    color: "blue",
                    backgroundColor: "lightgray",
                  },
                }}
              />
              <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <PickClass />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Payment />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <PersonalInformation />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Education />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Referees />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <CredentialUpload />
            </TabPanel>
            <TabPanel value={value} index={6}>
              Item Seven
            </TabPanel>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Admission;
