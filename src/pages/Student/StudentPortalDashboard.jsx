import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Student/StudentPortalDashboard.css";
import { Route, Routes, useLocation, useNavigate,  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newStudent } from "../../redux/portalSlice";
import StudentDashboardNavbar from "../../components/studentDashboardComponents/StudentDashboardNavbar";
import StudentDashboardOffcanvas from "../../components/studentDashboardComponents/StudentDashboardOffcanvas";
import StudentProfile from "./StudentProfile";
import StudentChangePassword from "./StudentChangePassword";
import StudentEditDetails from "./StudentEditDetails";
import StudentDashboardHome from "./StudentDashboardHome";
import StudentCourseRegistration from "./StudentCourseRegistration";
import StudentResources from "./StudentResources";

// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';






// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );














const StudentPortalDashboard = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [content, setContent] = useState('Initial Content');

  useEffect(() => {
    const endpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/student_portal_dashboard";
    let studentSignInToken = localStorage.studentSignInToken;
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${studentSignInToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.data.status) {
          // console.log(response.data.response);
          console.log(response.data.message);
          dispatch(newStudent(response.data.response));
        } else {
          console.log(response.data.message);
          navigate("/student_signin");
        }
      });
  }, []);

  // const theme = useTheme();
  // const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };



  // const handleItemClick = (text) => {
  //   switch (text) {
  //     case 'Profile':
  //       // setContent('Profile Content');
  //       break;
  //     case 'Starred':
  //       // setContent('Starred Content');
  //       break;
  //     case 'Send email':
  //       setContent('Send email Content');
  //       break;
  //     case 'Drafts':
  //       setContent('Drafts Content');
  //       break;
  //     case 'All mail':
  //       setContent('All mail Content');
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <>
      <section
        id=""
        className="d-flex"
        style={{ width: "100%", height: "100vh", overflow: "hidden" }}
      >
        <div
          className="position-relative"
          id="offCan"
          style={{
            width: "20%",
            height: "100vh",
            backgroundColor: "#030552",
            overflowY: "scroll",
          }}
        >
          <StudentDashboardOffcanvas />
        </div>
        <div className="" id="nav" style={{ width: "100%", height: "100%" }}>
          <StudentDashboardNavbar />
          <div className="flex p-5" style={{overflowY: 'scroll', height: '100%'}}>
          {isLoading ? (
            <div>loadings</div>
          ) : (
            <Routes>
              <Route path="home" element={<StudentDashboardHome />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route
                path="change_password"
                element={<StudentChangePassword myEmail={globalState.email} />}
              />
              <Route path="edit_details" element={<StudentEditDetails />} />
              <Route path="resources" element={<StudentResources/>} />
              <Route
                path="course_registration"
                element={<StudentCourseRegistration myClass={globalState.level} myTerm={globalState.term} myOption={globalState.options}/>}
              />
            </Routes>
          )}
            
          </div>
        </div>
      </section>



      {/* <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          {globalState.firstName} {globalState.lastName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Profile', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => handleItemClick(text)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>{content}
        <Routes>
              <Route path="home" element={<StudentDashboardHome />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route
                path="change_password"
                element={<StudentChangePassword myEmail={globalState.email} />}
              />
              <Route path="edit_details" element={<StudentEditDetails />} />
              <Route
                path="course_registration"
                element={<StudentCourseRegistration />}
              />
            </Routes>
        </Typography>
      </Box>
    </Box> */}
    
    </>
  );
};

export default StudentPortalDashboard;
