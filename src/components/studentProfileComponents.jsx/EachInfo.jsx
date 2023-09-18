import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./EachInfo.css";

const EachInfo = ({ label, value, enabled, onChange }) => {
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
            disabled={!enabled}
            id={enabled ? "outlined-disabled" : "outlined-disabled"}
            label={label}
            onChange={onChange}
            defaultValue={value}
            variant="standard"
            className={
              enabled ? "custom-textfield-enabled" : "custom-textfield-disabled"
            }
          />
        </Box>
      </div>
    </>
  );
};

export default EachInfo;
