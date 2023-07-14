import React from "react";
import { Button } from "@mui/material";

const OutlinedButton = (props) => {
  const { onClick, label, link, color, hoverColor } = props;
  return (
    <Button
      // sx={{
      //   color: color,
      //   borderColor: color,
      //   "&:hover": {
      //     borderColor: hoverColor,
      //   },
      // }}
      style={{ textTransform: "none" }}
      variant="outlined"
      onClick={onClick}
      href={link}
      color={color}
    >
      {label}
    </Button>
  );
};

export default OutlinedButton;
