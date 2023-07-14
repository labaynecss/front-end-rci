import React from "react";
import TextField from "@mui/material/TextField";
function MultilineInput(props) {
  const { id, label, size, value, variant } = props;
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      multiline
      rows={5}
      variant={variant}
      className={`${size} w-full `}
    />
  );
}
export default MultilineInput;
