import React from "react";
import { Button } from "@mui/material";

const TextButton = (props) => {
  const { onClick, label, link, textColor } = props;
  return (
    <Button
      sx={{
        color: textColor,
      }}
      style={{ textTransform: "none" }}
      variant="text"
      onClick={onClick}
      href={link}
    >
      {label}
    </Button>
  );
};

export default TextButton;
