import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import LogOutTab from "./LogOutTab";

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
  const [paid, setPaid] = useState(() => {
    const storedPaid = localStorage.getItem("currentPaidState");
    return storedPaid !== null ? JSON.parse(storedPaid) : false;
  });
  
  useEffect(() => {
  }, [isLoading, paid]);
 
  

  const handleClose = () => {
    setOpen(false);
  };

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
          localStorage.removeItem("submitted");
          localStorage.removeItem("finished");
          localStorage.removeItem("taken");
          localStorage.removeItem("done");
          localStorage.removeItem("examStarted");
          const newPaid = res.data.response.paidForAdmission;
          localStorage.setItem("currentPaidState", newPaid);
          setPaid(newPaid);
          
          // localStorage.setItem(
          //   "currentPaidState",
          //   globalState.paidForAdmission
          // );

        } else {
          navigate("/student_login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [globalState, globalState.paidForAdmission, paid, navigate]);


  const handleChange = (event, newValue) => {
    if ((paid === "false" || paid === "true") && newValue == 6) {
      setValue(newValue);
      navigate("/student/admission/logout");
    } else if (
      paid === "false" &&
      (newValue !== 1 || newValue !== 0 || newValue !== 6)
    ) {
      setValue(newValue);
      setTimeout(() => {
        setValue(1);
        navigate("/student/admission/payment");
      }, 500);
    } else {
      setValue(newValue);
    }
  };

  const handlePaymentClick = () => {
    if (!paid) {
      navigate("/student/admission/payment");
    } else {
      navigate("/student/admission/payment");
    }
  };

  return (
    <>
      <div className="">
        {globalState?.firstName && globalState?.lastName ? (
          <div className="d-flex font-bold ml-4 my-auto text-lg fw-bold fs-4 shadow p-2 mb-3 justify-content-between admission-nav">
          <div className="">
          {globalState.firstName} {globalState.lastName}
            <div className="my-auto" style={{ fontSize: "14px" }}>
              <small>Registration Number:</small>{" "}
              {globalState.registrationNumber}
            </div>
          </div>
            
            {
              globalState.paidForAdmission && (
                <div className="my-auto" style={{ fontSize: "14px" }}><small> Student ID:</small> {globalState.studentID}</div>
              )
            }
          </div>
        ) : (
          <div className="loaders"></div>
        )}
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
              />
              <Tab
                label="Personal Information"
                component={Link}
                to={
                  !paid
                    ? "/student/admission/payment"
                    : "/student/admission/personal_information"
                }
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
                to={
                  !paid
                    ? "/student/admission/payment"
                    : "/student/admission/education"
                }
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
                to={
                  !paid
                    ? "/student/admission/payment"
                    : "/student/admission/referees"
                }
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
                to={
                  !paid
                    ? "/student/admission/payment"
                    : "/student/admission/credential"
                }
                sx={{
                  "&:hover": {
                    color: "blue",
                    backgroundColor: "lightgray",
                  },
                }}
              />
              <Tab
                label="Log out"
                component={Link}
                to="/student/admission/logout"
                sx={{
                  "&:hover": {
                    color: "blue",
                    backgroundColor: "lightgray",
                  },
                }}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <PickClass />
            </TabPanel>
            <TabPanel value={value} index={1}>
              {globalState.paymentURL && globalState.paymentURL[0] ? (
                <Payment
                  paid={paid}
                  myEmail={globalState.email}
                  receiptURL={globalState.paymentURL[0].paymentLink}
                  receiptDate={globalState.paymentURL[0].dateUploaded}
                  lastName={globalState.lastName}
                  firstName={globalState.firstName}
                  payWithSlip={globalState.paymentURL}
                />
              ) : (
                <Payment
                  paid={paid}
                  myEmail={globalState.email}
                  receiptURL={null}
                  lastName={globalState.lastName}
                  firstName={globalState.firstName}
                />
              )}
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
              <LogOutTab />
            </TabPanel>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Admission;

// import React, { useEffect, useState } from "react";
// import {
//   Link,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
// import PickClass from "./PickClass";
// import Payment from "./Payment";
// import { useDispatch, useSelector } from "react-redux";
// import PersonalInformation from "./PersonalInformation";
// import Education from "./Education";
// import Referees from "./Referees";
// import axios from "axios";
// import { newStudent } from "../../redux/portalSlice";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import CredentialUpload from "./CredentialUpload";
// import Backdrop from "@mui/material/Backdrop";
// import LogOutTab from "./LogOutTab";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <>
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`vertical-tabpanel-${index}`}
//         aria-labelledby={`vertical-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     </>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

// const Admission = () => {
//   const [value, setValue] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const globalState = useSelector((state) => state.portalReducer.studentInfo);
//   const [paid, setPaid] = useState(() => {
//     const storedPaid = localStorage.getItem("currentPaidState");
//     return storedPaid !== null ? JSON.parse(storedPaid) : false;
//   });

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const location = useLocation();

//   useEffect(() => {
//     localStorage.setItem(
//       "currentPaidState",
//       globalState.paidForAdmission
//     );
//     setOpen(true);
//     setIsLoading(true);
//     let studentLoginToken = localStorage.studentLoginToken;
//     let endpoint =
//       "https://school-portal-backend-adex2210.vercel.app/student_account/student__admission_dashboard";
//     axios
//       .get(endpoint, {
//         headers: {
//           Authorization: `Bearer ${studentLoginToken}`,
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       })
//       .then((res) => {
//         if (res.data.status) {
//           setIsLoading(false);
//           setOpen(false);
//           dispatch(newStudent(res.data.response));
//           localStorage.removeItem("submitted");
//           localStorage.removeItem("finished");
//           localStorage.removeItem("taken");
//           localStorage.removeItem("done");
//           localStorage.removeItem("examStarted");
//           localStorage.setItem(
//             "currentPaidState",
//             globalState.paidForAdmission
//           );
//         } else {
//           navigate("/student_login");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [globalState, globalState.paidForAdmission, navigate]);

//   const getTabIndexFromPathname = (pathname) => {
//     // Define your tab routes here
//     const tabRoutes = [
//       "/student/admission/pick_class",
//       "/student/admission/payment",
//       "/student/admission/personal_information",
//       "/student/admission/education",
//       "/student/admission/referees",
//       "/student/admission/credential",
//       "/student/admission/logout",
//     ];

//     // Find the index of the pathname in the tabRoutes array
//     return tabRoutes.indexOf(pathname);
//   };

//   useEffect(() => {
//     // Set the active tab based on the pathname
//     const tabIndex = getTabIndexFromPathname(location.pathname);
//     setValue(tabIndex);
//   }, [location.pathname]);

//   useEffect(() => {
//     window.addEventListener("popstate", () => {
//       const tabIndex = getTabIndexFromPathname(location.pathname);
//       setValue(tabIndex);
//     });

//     return () => {
//       window.removeEventListener("popstate", () => {
//         const tabIndex = getTabIndexFromPathname(location.pathname);
//         setValue(tabIndex);
//       });
//     };
//   }, [location.pathname]);

//   const handleChange = (event, newValue) => {
//     if (paid === false && (newValue !== 1 || newValue !== 0 || newValue !== 6)) {
//       setValue(newValue);
//       setTimeout(() => {
//         setValue(1);
//         navigate("/student/admission/payment");
//       }, 500);
//     } else {
//       setValue(newValue);
//       console.log(value);
//     }
//   };

//   const handlePaymentClick = () => {
//     if (paid === false) {
//       navigate("/student/admission/payment");
//     } else {
//       navigate("/student/admission/payment");
//     }
//   };

//   return (
//     <>
//       <div className="">
//         {globalState?.firstName && globalState?.lastName ? (
//           <div className="font-bold ml-4 my-auto d-fle text-lg fw-bold fs-4 shadow p-2 mb-3">
//             {globalState.firstName} {globalState.lastName}
//             <div className="my-auto" style={{ fontSize: "14px" }}>
//               <small>Registration Number:</small>{" "}
//               {globalState.registrationNumber}
//             </div>
//           </div>
//         ) : (
//           <div className="loaders"></div>
//         )}
//         <div>
//           <Box
//             sx={{
//               flexGrow: 1,
//               width: "100% ",
//               bgcolor: "background.paper",
//             }}
//           >
//             <Tabs
//               orientation="horizontal"
//               value={value}
//               onChange={handleChange}
//               variant="scrollable"
//               scrollButtons="auto"
//               aria-label="visible arrows tabs example"
//               sx={{
//                 borderRight: 1,
//                 borderColor: "divider",
//                 minWidth: "100%",
//               }}
//             >
//               <Tab
//                 label="Pick Class"
//                 component={Link}
//                 to="/student/admission/pick_class"
//                 sx={{
//                   "&:hover": {
//                     color: "blue",
//                     backgroundColor: "lightgray",
//                   },
//                 }}
//               />
//               <Tab
//                 label="Payment"
//                 onClick={handlePaymentClick}
//                 sx={{
//                   "&:hover": {
//                     color: "blue",
//                     backgroundColor: "lightgray",
//                   },
//                 }}
//               />
//               <Tab
//                 label="Personal Information"
//                 component={Link}
//                 to={
//                   !paid
//                     ? "/student/admission/payment"
//                     : "/student/admission/personal_information"
//                 }
//                 sx={{
//                   "&:hover": {
//                     color: "blue",
//                     backgroundColor: "lightgray",
//                   },
//                 }}
//               />
//               <Tab
//                 label="Education"
//                 component={Link}
//                 to={
//                   !paid
//                     ? "/student/admission/payment"
//                     : "/student/admission/education"
//                 }
//                 sx={{
//                   "&:hover": {
//                     color: "blue",
//                     backgroundColor: "lightgray",
//                   },
//                 }}
//               />
//               <Tab
//                 label="Referees"
//                 component={Link}
//                 to={
//                   !paid
//                     ? "/student/admission/payment"
//                     : "/student/admission/referees"
//                 }
//                 sx={{
//                   "&:hover": {
//                     color: "blue",
//                     backgroundColor: "lightgray",
//                   },
//                 }}
//               />
//               <Tab
//                 label="Credential Upload"
//                 component={Link}
//                 to={
//                   !paid
//                     ? "/student/admission/payment"
//                     : "/student/admission/credential"
//                 }
//                 sx={{
//                   "&:hover": {
//                     color: "blue",
//                     backgroundColor: "lightgray",
//                   },
//                 }}
//               />
//               <Tab
//                 label="Log out"
//                 component={Link}
//                 to={
//                   !paid
//                     ? "/student/admission/logout"
//                     : "/student/admission/logout"
//                 }
//                 sx={{
//                   "&:hover": {
//                     color: "blue",
//                     backgroundColor: "lightgray",
//                   },
//                 }}
//               />
//             </Tabs>
//             <TabPanel value={value} index={0}>
//               <PickClass />
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//               {globalState.paymentURL && globalState.paymentURL[0] ? (
//                 <Payment
//                   paid={paid}
//                   myEmail={globalState.email}
//                   receiptURL={globalState.paymentURL[0].paymentLink}
//                   receiptDate={globalState.paymentURL[0].dateUploaded}
//                   lastName={globalState.lastName}
//                   firstName={globalState.firstName}
//                 />
//               ) : (
//                 <Payment
//                   paid={paid}
//                   myEmail={globalState.email}
//                   receiptURL={null}
//                   lastName={globalState.lastName}
//                   firstName={globalState.firstName}
//                 />
//               )}
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//               <PersonalInformation />
//             </TabPanel>
//             <TabPanel value={value} index={3}>
//               <Education />
//             </TabPanel>
//             <TabPanel value={value} index={4}>
//               <Referees />
//             </TabPanel>
//             <TabPanel value={value} index={5}>
//               <CredentialUpload />
//             </TabPanel>
//             <TabPanel value={value} index={6}>
//               <LogOutTab />
//             </TabPanel>
//           </Box>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Admission;
