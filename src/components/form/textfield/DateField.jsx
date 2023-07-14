import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";

function Datepick(props) {
  const { label, value, onChange, name } = props;

  const handleDateChange = (date) => {
    const event = {
      target: {
        name,
        value: date.toISOString(),
      },
    };
    onChange(event);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
        name={name}
        inputFormat="MM.dd.yyyy"
        className={`w-full`}
        inputVariant="outlined"
        inputProps={{
          sx: {
            "& fieldset": {
              borderColor: "gray",
            },
            "&.Mui-focused fieldset": {
              borderColor: "purple",
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default Datepick;
