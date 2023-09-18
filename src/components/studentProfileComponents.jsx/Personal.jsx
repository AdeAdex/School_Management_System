import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EachInfo from "./EachInfo";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const Personal = ({ enabled, edit }) => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  const [allCountry, setAllCountry] = useState([]);
  const [statesForCountry, setStatesForCountry] = useState([]);

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
  }, [globalState, allCountry]);

  return (
    <>
      <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo
          label="Surname"
          value={globalState.lastName}
          onChange={(e) => setLastName(e.target.value)}
          enabled={enabled}
        />
        <EachInfo
          label="First Name"
          value={globalState.firstName}
          enabled={enabled}
        />
        <EachInfo
          label="Middle name"
          value={globalState.middleName}
          enabled={enabled}
        />
        <EachInfo label="Age" value={globalState.age} enabled={enabled} />
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
              label="Nationality"
              name="country"
              // value={globalState.country || ""}
              value=""
              variant="standard"
            >
              {allCountry.map((eachCountry, index) => (
                <MenuItem key={eachCountry.id} value={eachCountry.country}>
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
              // value={globalState.state || ""}
              value=""
              variant="standard"
            >
              {statesForCountry.length === 0 && globalState.state ? (
                <MenuItem value={globalState.state}>
                  {globalState.state}
                </MenuItem>
              ) : null}
              {statesForCountry.map((selectedState) => (
                <MenuItem key={selectedState} value={selectedState}>
                  {selectedState}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </div>

        <EachInfo label="Gender" value={globalState.gender} enabled={enabled} />
        <EachInfo label="Title" value={globalState.title} enabled={enabled} />
      </div>
    </>
  );
};

export default Personal;
