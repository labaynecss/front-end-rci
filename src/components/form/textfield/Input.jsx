import React from 'react';
import TextField from '@mui/material/TextField';

function InputText(props) {
  const {
    id,
    label,
    type,
    value,
    variant,
    onChange,
    name,
    error,
    InputProps,
    defaultValue,
  } = props;

  let registerProps = {};
  if (props.register) {
    registerProps = { ...props.register(name) };
  }

  return (
    <TextField
      id={id}
      defaultValue={defaultValue}
      label={label}
      type={type}
      value={value}
      name={name}
      InputProps={InputProps}
      onChange={onChange}
      variant={variant}
      {...registerProps}
      error={!!error}
      helperText={error?.message}
      className={`w-full`}
      color="secondary"
    />
  );
}

export default InputText;
