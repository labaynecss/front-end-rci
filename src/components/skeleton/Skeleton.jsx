import React from "react";

const Skeleton = ({ children }) => {
  return <div className=" h-screen w-full  overflow-hidden">{children}</div>;
};

export default Skeleton;
