import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const EachInfoForSelectState = ({ label, value }) => {
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

  const [allCountry, setAllCountry] = useState([]);
  const [statesForCountry, setStatesForCountry] = useState([]);

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
            label={label}
            defaultValue={value}
            variant="standard"
          >
            {statesForCountry
                .slice() // Create a copy to avoid modifying the original array
                .sort()
              .map((state, index) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
          </TextField>
        </Box>
      </div>
    </>
  );
};

export default EachInfoForSelectState;
