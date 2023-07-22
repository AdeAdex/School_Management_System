// // export default {
// //   plugins: {
// //     tailwindcss: {},
// //     autoprefixer: {},
// //   },
// // };

//   // StudentDashboardNavbar.jsx

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import StudentDashboardOffcanvas_On_Small_Screen from "./StudentDashboardOffcanvas_On_Small_Screen";
// import axios from "axios";
// import { useDisclosure } from "@mantine/hooks";
// import { Burger, Avatar } from "@mantine/core";
// import AvatarUploader from "./AvatarUploader";

// const StudentDashboardNavbar = () => {
//   const globalState = useSelector((state) => state.portalReducer.studentInfo);
//   const offCanvas = () => {
//     toggle();
//     if (offCan.style.width == "20%") {
//       offCan.style.width = "5%";
//       nav.style.width = "95%";
//       // menu.style.setProperty("display", "none", "important");
//     } else {
//       offCan.style.width = "20%";
//       nav.style.width = "80%";
//       // menu.style.setProperty("display", "block", "important");
//     }

//     var x = window.matchMedia("(max-width: 768px)");

//     if (x.matches) {
//       ourBody.classList.add("new-class");
//     } else {
//     }
//   };


//   const gooo = () => {
//     alert("msg");
//   };

//   const [myImage, setMyImage] = useState("");
//   const [cloudImage, setCloudImage] = useState();

//   const changeFile = (e) => {
//     console.log(e.target.files[0]);
//     let myImage = e.target.files[0];
//     let reader = new FileReader();
//     reader.readAsDataURL(myImage);
//     reader.onload = () => {
//       setMyImage(reader.result);
//     };
//   };

//   const saveFile = () => {
//     const endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/upload_profile_pic";
//     axios
//       .post(endpoint, { myImage })
//       .then((response) => {
//         console.log(response.data);
//         setCloudImage(response.data.cloudLink);
//         console.log(response.data.cloudLink);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const [opened, { toggle }] = useDisclosure(false);
//   const label = opened ? "Close navigation" : "Open navigation";

//   return (
//     <>
//       <div
//         className="shadow d-flex"
//         id="nav"
//         style={{ width: "100%", height: "80px" }}
//       >
//         <div className="w-50 my-auto d-flex">
//           {/* <button
//             className="btn my-auto offcanvas-btn"
//             type="button"
//             onClick={offCanvas}
//             id="offcanvasBtn"
//           >
//             <i className="fas fa-bars fs-3 px-2"></i>
//           </button> */}
//           <Burger
//             opened={opened}
//             className="my-auto offcanvas-btn px-2 mx-3"
//             onClick={offCanvas}
//             aria-label={label}
//           />
//           <button
//             className="btn my-auto offcanvas-btn2"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasWithBothOptions"
//             aria-controls="offcanvasWithBothOptions"
//           >
//             <i className="fas fa-bars fs-3 px-2"></i>
//           </button>
//           <div
//             className="my-auto"
//             style={{ height: "25px", border: '1px solid blue' }}
//           ></div>
//           <div className="fw-bold ms-3 my-auto fs-5">
//             {globalState.firstName} {globalState.lastName}
//           </div>
//           <div className="my-auto ms-auto fw-bold">Class: {globalState.level}</div>
//           <div className="my-auto ms-auto fw-bold">Term: {globalState.term}</div>
//           <div className="my-auto ms-auto fw-bold">Option: {globalState.options}</div>
//         </div>
          
//         <div className="w-50 my-auto d-flex justify-content-end gap-5 me-4">
//           <button onClick={gooo} className="border-0">
//             <i className="fas fa-bell fs-4 my-auto"></i>
//           </button>
//           <button onClick={gooo} className="border-0">
//             <i className="fas fa-user fs-4 my-auto"></i>
//           </button>
//           <button onClick={gooo} className="border-0">
//             <i className="fas fa-envelope fs-4 my-auto"></i>
//           </button>
//           <button onClick={gooo} className="border-0">
//             <i className="fas fa-gear fs-4 my-auto"></i>
//           </button>
//           <button onClick={gooo} className="border-0">
//             <img src="pic/avatar.png" style={{ width: "50px" }} alt="" />
//           </button>
//           <AvatarUploader/>
//           {/* <input type="file" className="bg-info" name="" id="" onChange={(e) => changeFile(e)} />
//           <button onClick={saveFile}>Upload</button>
//           <img src={cloudImage} alt="" style={{ width: "50px" }} />
//           <Avatar
//             component="a"
//             href=""
//             target="_blank"
//             src="/pic/avatar.png"
//             alt="it's me"
//             size="lg" radius="xl"
//           /> */}
//         </div>
//       </div>

//       <StudentDashboardOffcanvas_On_Small_Screen />
//     </>
//   );
// };

// export default StudentDashboardNavbar;



// // StudentDashboardOffcanvas


// import React from 'react'
// import StudentDashboardOffcanvasTitle from './StudentDashboardOffcanvasTitle'
// import StudentDashboardOffcanvasList from './StudentDashboardOffcanvasList'

// const StudentDashboardOffcanvas = () => {
//   return (
//     <>
//       <div
//         className="position-relative"
//         id=""
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         <div className="dashboard-offcanvas w-100 position-relative text-white">
//           <div
//             className="w-100 d-flex justify-content-center shadow"
//             style={{ height: "80px", width: "100%", borderBottom: '2px solid white' }}
//           >
//             <img
//               src="/pic/ade.png"
//               alt=""
//               className="my-auto"
//               style={{ width: "60px", height: "60px" }}
//             />
//           </div>
//           <div
//             className="text-capitalize text-center py-5 fs-5 fw-bold"
//             id="menu"
//           >
//             personal menu
//           </div>
//           <div className="px-4 d-grid gap-5">
//             <div className="d-grid gap-3">
//               <StudentDashboardOffcanvasTitle title="main menu" />
//               <StudentDashboardOffcanvasList item="dashboard" params="/student_dashboard/home" icons="fas fa-border-all" />
//             </div>
//             <div className="d-grid gap-3">
//               <StudentDashboardOffcanvasTitle title="profile" />
//               <StudentDashboardOffcanvasList item="my profile" params="/student_dashboard/profile" icons="fas fa-user" />
//               <StudentDashboardOffcanvasList item="change password" params="/student_dashboard/change_password" icons="fas fa-lock" />
//               <StudentDashboardOffcanvasList item="edit details" params="/student_dashboard/edit_details" icons="fas fa-edit" />
//             </div>
//             <div className="d-grid gap-3">
//               <StudentDashboardOffcanvasTitle title="academics" />
//               <StudentDashboardOffcanvasList item="resources" params="/student_dashboard/resources" icons="fas fa-file"/>
//               <StudentDashboardOffcanvasList item="course registration" params="/student_dashboard/course_registration" icons="fas fa-user" />
//               <StudentDashboardOffcanvasList item="registration history" icons="fas fa-lock" />
//               <StudentDashboardOffcanvasList item="results" icons="fas fa-edit" />
//             </div>
//             <div className="d-grid gap-3">
//               <StudentDashboardOffcanvasTitle title="payment" />
//               <StudentDashboardOffcanvasList item="pay tuition" icons="fas fa-user" />
//               <StudentDashboardOffcanvasList item="payment history" icons="fas fa-lock" />
//               <StudentDashboardOffcanvasList item="results" icons="fas fa-edit" />
//             </div>
//             <div className="d-grid gap-3 mb-5">
//               {/* <StudentDashboardOffcanvasTitle title="" /> */}
//               <StudentDashboardOffcanvasList item="logout" icons="fas fa-user" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default StudentDashboardOffcanvas

