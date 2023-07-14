import React from "react";
import { Button } from "@mui/material";

const ContainedButton = (props) => {
  const { onClick, label, link, bgColor, textColor, endIcon, type, width } =
    props;
  return (
    <Button
      sx={{ color: textColor }}
      style={{ backgroundColor: bgColor, textTransform: "none", width: width }}
      variant="contained"
      onClick={onClick}
      href={link}
      endIcon={endIcon}
      type={type}
    >
      {label}
    </Button>
  );
};

export default ContainedButton;
