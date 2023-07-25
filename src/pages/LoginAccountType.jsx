// import React from "react";
// import PagesNavbar from "../components/navbarComponents/PagesNavbar";

// const LoginAccountType = () => {
//   return (
//     <>
//       <PagesNavbar />
//       <section
//         className="w-100 d-flex"
//         style={{
//           height: "100%",
//           backgroundColor: "#F8F9FD",
//           paddingTop: "170px",
//         }}
//       >
//         <div className="m-auto w-lg-50 w-sm-100 shadow px-5 py-5 h-100 d-flex flex-column justify-content-center">
//           <div>
//             <div className="text-center text-capitalize fs-3 fw-bold">
//               welcome to Adex school
//             </div>
//             <div className="text-center fw-bold">
//               Select one of the option below
//             </div>
//           </div>
//           <div className="d-flex gap-4 mt-4">
//             <div
//               className="shadow text-capitalize text-center p-3 d-flex flex-column gap-3 fw-bold"
//               style={{
//                 width: "200px",
//                 height: "200px",
//                 borderRadius: "10px",
//                 outline: "1px solid #1F9FEF",
//               }}
//             >
//               <span>teacher</span>
//               <img src="/pic/teacher_avatar5.jpg" className="mx-auto" style={{height: '80%', width: '80%', borderRadius: '50%'}} alt="" />
//             </div>
//             <div
//               className="shadow text-capitalize text-center p-3 d-flex flex-column gap-3 fw-bold"
//               style={{
//                 width: "200px",
//                 height: "200px",
//                 borderRadius: "10px",
//                 outline: "1px solid #1F9FEF",
//               }}
//             >
//               <span>student</span>
//               <img src="/pic/teacher_avatar3.jpg" className="mx-auto" style={{height: '80%', width: '80%', borderRadius: '50%'}} alt="" />
//             </div>
//           </div>
//           <div></div>
//           <div></div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default LoginAccountType;




import React, { useState } from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";

const LoginAccountType = () => {
  const [selectedAccountType, setSelectedAccountType] = useState("");

  // const handleAccountTypeClick = (accountType) => {
  //   setSelectedAccountType(accountType);
  //   alert(accountType);
  // };

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
    alert(event.target.value);
  };

  return (
    <>
      <PagesNavbar />
      <section
        className="w-100 d-flex"
        style={{
          height: "100%",
          backgroundColor: "#F8F9FD",
          paddingTop: "170px",
        }}
      >
        <div className="m-auto w-lg-50 w-sm-100 shadow px-5 py-5 h-100 d-flex flex-column justify-content-center">
          <div>
            <div className="text-center text-capitalize fs-3 fw-bold">
              welcome to Adex school
            </div>
            <div className="text-center fw-bold">
              Select one of the options below
            </div>
          </div>
          <div className="d-flex gap-4 mt-4">
            <div
              className="shadow text-capitalize text-center p-3 d-flex flex-column gap-3 fw-bold"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                outline: "1px solid #1F9FEF",
              }}
              onClick={() => handleAccountTypeClick("teacher")}
            >
            <input
                type="radio"
                name="accountType"
                value="teacher"
                checked={selectedAccountType === "teacher"}
                onChange={handleAccountTypeChange}
              />
              <span>teacher</span>
              <img
                src="/pic/teacher_avatar5.jpg"
                className="mx-auto"
                style={{ height: "80%", width: "80%", borderRadius: "50%" }}
                alt=""
              />
            </div>
            <div
              className="shadow text-capitalize text-center p-3 d-flex flex-column gap-3 fw-bold"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                outline: "1px solid #1F9FEF",
              }}
              onClick={() => handleAccountTypeClick("student")}
            >
            <input
                type="radio"
                name="accountType"
                value="teacher"
                checked={selectedAccountType === "student"}
                onChange={handleAccountTypeChange}
              />
              <span>student</span>
              <img
                src="/pic/teacher_avatar3.jpg"
                className="mx-auto"
                style={{ height: "80%", width: "80%", borderRadius: "50%" }}
                alt=""
              />
            </div>
          </div>
          {/* Additional content */}
        </div>
      </section>
    </>
  );
};

export default LoginAccountType;

