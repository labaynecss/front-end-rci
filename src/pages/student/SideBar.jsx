import React, { useState } from "react";

function SideBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        toggle ? "w-[5.8rem]" : ""
      }  bg-glass h-[96%] w-[20rem] rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-glass relative`}
    >
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      ></div>
    </div>
  );
}

export default SideBar;
