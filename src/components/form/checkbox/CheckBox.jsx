import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckBoxComponent = ({ label, checked, onChange }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={label}
      // color="secondary"
    />
  );
};

export default CheckBoxComponent;
