// import axios from "axios";
// import { useFormik } from "formik";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { BsFillEmojiSmileFill } from "react-icons/bs";
// import { Textarea } from "@mantine/core";
// import { useLocation } from "react-router-dom";
// import Chat from "../../components/studentDashboardComponents/Chat";
// import ChatMessenger from "../../components/studentDashboardComponents/ChatMessenger";
// import "../Student/StudentEditDetails.css";
// // import { useSelector } from "react-redux";

// const StudentEditDetails = ({ socket }) => {
//   const globalState = useSelector((state) => state.portalReducer.studentInfo);

//   const location = useLocation();
//   const id = new URLSearchParams(location.search).get("id");
//   const name = new URLSearchParams(location.search).get("name");
//   // const [message, setMessage] = useState("");
//   const [allmessages, setAllmessages] = useState([]);
//   const [classIndex, setClassIndex] = useState(0);
//   // let index = '';

//   useEffect(() => {
//     localStorage.getItem("myRoom");
//     if (socket.current) {
//       // console.log(socket.current);
//       socket.current.on("received_message", (receivedMessage) => {
//         console.log(receivedMessage);
//         setAllmessages([...allmessages, receivedMessage]);
//       });
//     }

//     //
//   });

//   const fetch = () => {
//     console.log("fetching");
//     // if(allmessages.length == 0) {
//     axios
//       .post("http://localhost:2000/student_account/get_student_message", {
//         class: classIndex,
//       })
//       .then((res) => {
//         console.log(res);
//         setAllmessages(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     // }
//   };

//   const fetchGroupMessage = () => {
//     if (localStorage.myRoom == "JSS 1 Group" && globalState.level == "JSS 1") {
//       setClassIndex(0);
//       // index = 0
//       fetch();
//     } else if (
//       localStorage.myRoom == "JSS 2 Group" &&
//       globalState.level == "JSS 2"
//     ) {
//       setClassIndex(1);
//       fetch();
//     } else {
//       // setAllmessages([])
//     }
//   };

//   // const sendMessage = () => {
//   //   let payload = {
//   //     message: message,
//   //     name: name,
//   //     messageDate: new Date().toLocaleDateString("en-GB", {
//   //       year: "2-digit",
//   //       month: "2-digit",
//   //       day: "2-digit",
//   //     }),
//   //     messageTime: new Date().toLocaleTimeString("en-US", {
//   //       hour12: false,
//   //       hour: "2-digit",
//   //       minute: "2-digit",
//   //     }),
//   //     picture: localStorage.cloudImage,
//   //     id: id,
//   //   };
//   //   socket.current.emit("sentMsg", payload);
//   //   setAllmessages([...allmessages, payload]);
//   // };

//   return (
//     <>
//       <div className="d-flex w-100 h-100">
//         <Chat
//           socket={socket}
//           messages={allmessages}
//           fetchGroupMessage={fetchGroupMessage}
//         />
//       </div>
//     </>
//   );
// };

// export default StudentEditDetails;

import React, { useEffect, useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Stepper, Button, Group } from "@mantine/core";
import { FaUserCheck } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "./StudentEditDetails.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import EachInfo from "../../components/studentProfileComponents.jsx/EachInfo";
import { newStudent } from "../../redux/portalSlice";
import Personal from "../../components/studentProfileComponents.jsx/Personal";
import Contact from "../../components/studentProfileComponents.jsx/Contact";
import Referee from "../../components/studentProfileComponents.jsx/Referee";

const StudentEditDetails = () => {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <MyApp />
    </SnackbarProvider>
  );
};

function MyApp() {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [allCountry, setAllCountry] = useState([]);
  const [statesForCountry, setStatesForCountry] = useState([]);
  const [edit, setEdit] = useState(true);
  const [enabled, setEnabled] = useState(false);

  const [lastName, setLastName] = useState(globalState.lastName || "");
  const [firstName, setFirstName] = useState(globalState.firstName || "");
  const [middleName, setMiddleName] = useState(globalState.middleName || "");
  const [country, setCountry] = useState(globalState.country || "");
  const [state, setState] = useState(globalState.state || "");
  const [gender, setGender] = useState(globalState.gender || "");
  const [title, setTitle] = useState(globalState.title || "");
  const [age, setAge] = useState(globalState.age || "");
  const [phoneNumber, setPhoneNumber] = useState(globalState.phoneNumber || "");
  const [email, setEmail] = useState(globalState.email || "");
  const [address, setAddress] = useState(globalState.address || "");
  const [refereeName, setRefereeName] = useState(globalState.refereeName || "");
  const [refereePhoneNumber, setRefereePhoneNumber] = useState(
    globalState.refereePhoneNumber || ""
  );
  const [refereeAddress, setRefereeAddress] = useState(
    globalState.refereeAddress || ""
  );

    useEffect(() => {
    // console.log(globalState);
  }, [globalState, edit, enabled]);

  const [active, setActive] = useState(0);
  const nextStep = (variant) =>
    setActive((current) => (current < 3 ? current + 1 : current));

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/countries";
    axios
      .get(endpoint)
      .then((response) => {
        setAllCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    // Find the selected country's states from the fetched data
    const selectedCountryData = allCountry.find(
      (countryData) => countryData.country === selectedCountry
    );

    // If the selectedCountryData is found, set the states
    if (selectedCountryData) {
      setStatesForCountry(selectedCountryData.states);
    } else {
      // If the selectedCountryData is not found, clear the states
      setStatesForCountry([]);
    }
  };

  const editMyDetails = () => {
    // handleEditDetails();
    setEdit(false);
    setEnabled(true);
    if (enabled && !edit) {
      const payload = {
        lastName,
        firstName,
        middleName,
        age,
        country,
        state,
        gender,
        title,
        phoneNumber,
        email,
        address,
        refereeName,
        refereePhoneNumber,
        refereeAddress,
      };

      // console.log(payload);
      let endpoint =
        "https://school-portal-backend-adex2210.vercel.app/student_account/edit_and_update_student_information";
      axios.post(endpoint, payload)
      .then((response) => {
        if (response.data.status) {
          setEdit(true);
          setEnabled(false);
          const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: response.data.message,
        });
          // console.log(
          //   "my response: " + response.data.response,
          //   "message: " + response.data.message
          // );
        }
      });
    }
  };

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        className="p-4"
        style={{ backgroundColor: "", width: "100%", height: "100%" }}
        color=""
      >
        <Stepper.Step
          label=""
          icon={<FaUserCheck size="1.1rem" />}
          description="Personal"
        >
          <div className="w-100 d-flex flex-wrap gap-4">
            <EachInfo
              label="Surname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              enabled={enabled}
            />
            <EachInfo
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              enabled={enabled}
            />
            <EachInfo
              label="Middle name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              enabled={enabled}
            />
            <EachInfo
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              enabled={enabled}
            />
            {/* <div className="each-info" style={{ width: "48%" }}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 0, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    disabled={!enabled}
                    id="standard-select-currency"
                    select
                    label="Nationality"
                    name="country"
                    value={country || ""}
                    variant="standard"
                    onChange={(e) => {
                      handleCountryChange(e);
                      setCountry(e.target.value);
                    }}
                  >
                    {allCountry
                      .slice() // Create a copy to avoid modifying the original array
                      .sort((a, b) => a.country.localeCompare(b.country)) // Sort alphabetically
                      .map((eachCountry, index) => (
                        <MenuItem
                          key={eachCountry.id}
                          value={eachCountry.country}
                        >
                          {eachCountry.country}
                        </MenuItem>
                      ))}
                  </TextField>
                </Box>
              </div>

              <div className="each-info" style={{ width: "48%" }}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 0, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    disabled={!enabled}
                    id="standard-select-currency"
                    select
                    label="State of origin"
                    name="state"
                    value={state || ""}
                    variant="standard"
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  >
                    {statesForCountry.length === 0 && globalState.state ? (
                      <MenuItem value={globalState.state}>
                        {globalState.state}
                      </MenuItem>
                    ) : null}
                    {statesForCountry
                      .slice() // Create a copy to avoid modifying the original array
                      .sort() // Sort the array alphabetically
                      .map((selectedState) => (
                        <MenuItem key={selectedState} value={selectedState}>
                          {selectedState}
                        </MenuItem>
                      ))}
                  </TextField>
                </Box>
              </div> */}

            <EachInfo
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              enabled={enabled}
            />
            <EachInfo
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              enabled={enabled}
            />
          </div>
          {/* <Personal enabled={enabled} edit={edit} sendPayloadToBackend={sendPayloadToBackend}/> */}
          <Group position="center" mt="">
            <Button onClick={nextStep} className="">
              Next step
            </Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step
          label=""
          icon={<FaAddressCard size="1.1rem" />}
          description="Contact"
        >
          <div className="w-100 d-flex flex-wrap gap-4">
            <EachInfo
              label="Phone Number 1"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              enabled={enabled}
            />
            <EachInfo
              label="Phone Number 2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              enabled={enabled}
            />
            <EachInfo
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              enabled={enabled}
            />
            <EachInfo
              label="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              enabled={enabled}
            />
          </div>
          {/* <Contact /> */}
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="" description="Referee">
          <div className="w-100 d-flex flex-wrap gap-4">
            <EachInfo
              label="full Name"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              enabled={enabled}
            />
            <EachInfo
              label="Phone Number"
              value={refereePhoneNumber}
              onChange={(e) => setRefereePhoneNumber(e.target.value)}
              enabled={enabled}
            />
            <EachInfo
              label="email"
              value={refereeAddress}
              onChange={(e) => setRefereeAddress(e.target.value)}
              enabled={enabled}
            />
          </div>
          {/* <Referee /> */}
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          </Group>
        </Stepper.Step>
        {/* <Stepper.Completed>Completed</Stepper.Completed> */}
      </Stepper>
      <div className="edit-info-container">
        <div className="edit-info-toggle" onClick={editMyDetails}>
          <input type="checkbox" className="edit-info-input" />
          <span className="edit-info-button"></span>
          <span className="edit-info-label">
            {edit ? (
              <BiSolidEdit size={32} color="blue" />
            ) : (
              <FaSave size={32} color="blue" />
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default StudentEditDetails;
