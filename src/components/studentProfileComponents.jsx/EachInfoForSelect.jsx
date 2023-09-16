import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const EachInfoForSelect = ({ label, value }) => {
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
    </>
  );
};

export default EachInfoForSelect;
