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
          value={globalState.lastName}
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
                    label="Title"
                    name="title"
                    value={globalState.title}
                    variant="standard"
                  >
                    <MenuItem value={globalState.title}>{globalState.title}</MenuItem>
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
                    disabled
                    id="standard-select-currency"
                    select
                    label="Gender"
                    name="gender"
                    value={globalState.gender}
                    variant="standard"
                  >
                    <MenuItem value={globalState.gender}>{globalState.gender}</MenuItem>
                  </TextField>
                </Box>
              </div>
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

