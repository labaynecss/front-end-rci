import React, { useState } from "react";

import Dropdown from "./Dropdown";
import bggg from "../../../assets/images/bggg.png";
export const Header = ({ children, isExpanded }) => {
  const [searchText, setSearchText] = useState("");

  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <>
      <div
        className={`h-[10%] w-full pl-2 bg-bottom fixed ${
          isExpanded ? "ml-[90px]" : "ml-[250px]"
        } pt-2  duration-300`}
        style={{
          backgroundImage: `url(${bggg})`,
          backgroundSize: "cover",
        }}
      >
        <div className=" flex flex-col sm:flex-row gap-4 sm:gap-56 relative">
          <div className=" ml-4 py-6  ">
            <h1 className=" font-semibold  text-2xl text-gray-600 ">
              {children}
            </h1>
          </div>
          <div className=" relative mt-2 sm:mt-0">
            <button
              className="fixed top-[1rem] right-[1rem]"
              onClick={toggleProfile}
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/marketing-19/100/Profile-512.png"
                className={`img-fluid rounded-full h-8 ${
                  showProfile ? "mb-1" : ""
                }`}
                alt="avatar"
              />
              {showProfile && <Dropdown />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
