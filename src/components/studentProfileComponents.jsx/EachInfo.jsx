import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./EachInfo.css";

const EachInfo = ({ label, value, enabled, onChange }) => {
  return (
    <>
      <div
        className={`each-info ${
          enabled ? "custom-textfield-enabled" : "custom-textfield-disabled"
        }`}
        style={{ width: "48%" }}
      >
        <TextField
          disabled={!enabled}
          id={enabled ? "outlined-disable" : "outlined-disable"}
          label={label}
          onChange={onChange}
          defaultValue={value}
          variant="standard"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default EachInfo;
