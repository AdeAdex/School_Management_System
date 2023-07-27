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
  // const offcanvasState = useSelector((state) => state.portalReducer.hide_show);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
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
  }, []);

  const pay = true;

  return (
    <>
      <div>
        {globalState?.firstName && globalState?.lastName ? (
          <div className="font-bold ml-4 my-auto text-lg fw-bold fs-4 shadow p-2 mb-3">
            {globalState.firstName} {globalState.lastName}
          </div>
        ) : (
          <div class="loaders"></div>
           
        )}
        {/* <div className="font-bold ml-4 my-auto text-lg fw-bold fs-4 shadow p-2 mb-3">
          {globalState.firstName} {globalState.lastName}
        </div> */}
        {/* <div className="" style={{width: "100%" }}>
          <div
            className="d-flex justify-content-between px-lg-4"
            style={{ width: "100%", overflowX: "auto", overflowY: 'hidden', height: '40px', borderBottom: '1px solid gray' }}
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
              scrollButtons
              aria-label="visible arrows tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab
                label="Pick Class"
                component={Link}
                to="/student/admission/pick_class"
              />
              <Tab
                label="Payment"
                component={Link}
                to="/student/admission/payment"
              />
              <Tab
                label="Personal Information"
                component={Link}
                to="/student/admission/personal_information"
              />
              <Tab
                label="Education"
                component={Link}
                to="/student/admission/education"
              />
              <Tab
                label="Referees"
                component={Link}
                to="/student/admission/referees"
              />
              <Tab
                label="Credential Upload"
                component={Link}
                to="/student/admission/credential"
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
