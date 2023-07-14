import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const RadioButton = ({ value, checked, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Radio
          sx={{ color: "#833AB4", "&.Mui-checked": { color: "#833AB4" } }}
        />
      }
      value={value}
      checked={checked}
      onChange={onChange}
      label={value}
    />
  );
};

export default RadioButton;
