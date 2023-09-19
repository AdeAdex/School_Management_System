import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EachInfo from "./EachInfo";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Backdrop from "@mui/material/Backdrop";


const Personal = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [isLoading, setIsLoading] = useState(false);
  const isEmptyObject = Object.keys(globalState).length === 0;

  useEffect(() => {
  
  }, [globalState, isEmptyObject])
  
  
  return (
    <>
      {isEmptyObject ?  (
        <div className="loader"></div>
        
      ) : (
        <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo
          label="Surname"
          value={globalState.length == 0 ? "" : globalState.lastName}
        />
        <EachInfo
          label="First Name"
          value={globalState.firstName}
        />
        <EachInfo
          label="Middle name"
          value={globalState.middleName}
        />
        <EachInfo label="Age" value={globalState.age} />
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
              disabled
              id="standard-select-currency"
              select
              label="Nationality"
              name="country"
              value={globalState.country}
              variant="standard"
            >
              <MenuItem value={globalState.country}>
                {globalState.country}
              </MenuItem>
            </TextField>
          </Box>
        </div>
        {/* <EachInfo
          label="Nationality"
          value={globalState.country}
        />

        <EachInfo
          label="State of origin"
          value={globalState.state}
        /> */}

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
              disabled
              id="standard-select-currency"
              select
              label="State of origin"
              name="state"
              value={globalState.state}
              variant="standard"
            >
              <MenuItem value={globalState.state}>{globalState.state}</MenuItem>
            </TextField>
          </Box>
        </div>

        <EachInfo label="Gender" value={globalState.gender} />
        <EachInfo label="Title" value={globalState.title} />
      </div>
      )}
    </>
  );
};

export default Personal;



 {/* <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          {isLoading && <div className="loader"></div>}
        </Backdrop> */}


// const [lastName, setLastName] = useState("");
// const [firstName, setFirstName] = useState("");
// const [middleName, setMiddleName] = useState("");
// const [country, setCountry] = useState("");
// const [state, setState] = useState("");
// const [gender, setGender] = useState("");
// const [title, setTitle] = useState("");
// const [age, setAge] = useState("");
// const [phoneNumber, setPhoneNumber] = useState("");
// const [email, setEmail] = useState("");
// const [address, setAddress] = useState("");
// const [refereeName, setRefereeName] = useState("");
// const [refereePhoneNumber, setRefereePhoneNumber] = useState("");
// const [refereeAddress, setRefereeAddress] = useState("");


// useEffect(() => {
//   if (globalState) {
//     setLastName(globalState.lastName || "");
//     setFirstName(globalState.firstName || "");
//     setMiddleName(globalState.middleName || "");
//     setCountry(globalState.country || "");
//     setState(globalState.state || "");
//     setGender(globalState.gender || "");
//     setTitle(globalState.title || "");
//     setAge(globalState.age || "");
//     setPhoneNumber(globalState.phoneNumber || "");
//     setEmail(globalState.email || "");
//     setAddress(globalState.address || "");
//     setRefereeName(globalState.refereeName || "");
//     setRefereePhoneNumber(globalState.refereePhoneNumber || "");
//     setRefereeAddress(globalState.refereeAddress || "");
//   }
// }, [globalState]);