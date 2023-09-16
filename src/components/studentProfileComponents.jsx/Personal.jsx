import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EachInfo from "./EachInfo";
import EachInfoForSelect from "./EachInfoForSelect";
import EachInfoForSelectState from "./EachInfoForSelectState";

// import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const Personal = () => {
  const [allCountry, setAllCountry] = useState([]);
  const [statesForCountry, setStatesForCountry] = useState([]);

  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  // useEffect(() => {}, [globalState]);

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

  return (
    <>
      <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo label="Surname" value={globalState.lastName} />
        <EachInfo label="First Name" value={globalState.firstName} />
        <EachInfo label="Middle name" value={globalState.middleName} />
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
              id="standard-select-currency"
              select
              label="State of origin"
              name="state"
              defaultValue={globalState.state}
              variant="standard"
            >
              {statesForCountry.length === 0 && formik.values.state ? (
                <MenuItem value={formik.values.state}>
                  {formik.values.state}
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
        <EachInfo label="Gender" value={globalState.gender} />
        <EachInfo label="Title" value={globalState.myTitle} />
      </div>
    </>
  );
};

export default Personal;
