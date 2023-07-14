import React from "react";
import { Controller } from "react-hook-form";
import {
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@mui/material";

const SelectItems = ({ label, name, control, error, options, value }) => {
  return (
    <FormControl variant="filled" className="w-full" error={!!error}>
      <InputLabel focused={Boolean(value)}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            label={label}
            value={field.value || ""}
            color="secondary"
          >
            {value === "" && <MenuItem value="">{label}</MenuItem>}
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default SelectItems;
