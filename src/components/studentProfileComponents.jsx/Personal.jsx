


import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EachInfo from "./EachInfo";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import EachInfoForSelect from "./EachInfoForSelect";
import EachInfoForSelectState from "./EachInfoForSelectState";

const Personal = ({enabled, edit}) => {
  const [allCountry, setAllCountry] = useState([]);
  const [statesForCountry, setStatesForCountry] = useState([]);

  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/countries";
    axios
      .get(endpoint)
      .then((response) => {
        console.log(response.data);
        setAllCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;

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


  if (enabled && !edit) {
   const initialValues = {
      firstName: globalState.firstName,
      lastName: globalState.lastName,
      email: globalState.email,
      phoneNumber: globalState.phoneNumber,
      middleName: globalState.middleName,
      address: globalState.address,
      myTitle: globalState.myTitle,
      city: globalState.city,
      age: globalState.age,
      gender: globalState.gender,
      state: globalState.state,
      country: globalState.country,
    };

    console.log(initialValues);

    // const endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/student_update"
    // axios.post(endpoint, values)
  }

  return (
    <>
      <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo label="Surname" value={globalState.lastName} enabled={enabled}/>
        <EachInfo label="First Name" value={globalState.firstName} enabled={enabled}/>
        <EachInfo label="Middle name" value={globalState.middleName} enabled={enabled}/>
        <EachInfo label="Age" value={globalState.age} enabled={enabled}/>
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
              defaultValue={globalState.country}
              variant="standard"
              onChange={(e) => {
                handleCountryChange(e); // Call the custom event handler
              }}
            >
              {allCountry
                .slice() // Create a copy to avoid modifying the original array
                .sort((a, b) => a.country.localeCompare(b.country)) // Sort alphabetically
                .map((eachCountry, index) => (
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
              defaultValue={globalState.state}
              variant="standard"
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
        </div>
        {/* <EachInfoForSelect label="Nationality" value={globalState.country}/>
        <EachInfoForSelectState label="State of origin" value={globalState.state}/> */}
        <EachInfo label="Gender" value={globalState.gender} enabled={enabled}/>
        <EachInfo label="Title" value={globalState.myTitle} enabled={enabled}/>
      </div>
    </>
  );
};

export default Personal;
