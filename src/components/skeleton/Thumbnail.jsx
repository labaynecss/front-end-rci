import Animate from "./index";
import React from "react";

const Thumbnail = ({ height }) => {
  return (
    <div
      className={`w-full rounded-md bg-gray-200 overflow-hidden relative`}
      style={{ height: height }}
    >
      <Animate />
    </div>
  );
};

export default Thumbnail;
