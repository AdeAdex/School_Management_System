import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const EachInfo = ({ label, value }) => {
  return (
    <>
      <div
        className="each-info"
        style={{width: "48%" }}
      >
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
          id="standard-disabled"
          label={label}
          defaultValue={value}
          variant="standard"
        />
        </Box>
      </div>
    </>
  );
};

export default EachInfo;
