import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AboutStudent from "./AboutStudent";
import SchoolInformation from "./SchoolInformation";
import ParentInformation from "./ParentInformation";

const MainContentInformation = (props) => {
  const { getValues } = props;
  const dataInformation = ["About", "School Information", "Parent Information"];
  const [dataInfo, setDataInfo] = useState("About");

  const showData = () => {
    if (dataInfo === "About") {
      return <AboutStudent getValues={getValues} />;
    } else if (dataInfo === "School Information") {
      return <SchoolInformation getValues={getValues} />;
    } else if (dataInfo === "Parent Information") {
      return <ParentInformation getValues={getValues} />;
    }
  };

  return (
    <div className="flex-1 p-10 bluring rounded-md ">
      <div className="flex gap-4">
        <h1 className="text-[20px] text-[#636262] font-bold ">
          {getValues("studentFirstName")} {getValues("studentMiddleName")}{" "}
          {getValues("studentLastName")} {getValues("studentSuffixName")}
        </h1>
        <div className="flex gap-1 ">
          <div className="flex items-center">
            <LocationOnIcon sx={{ fontSize: "25px", color: "#E8AA42" }} />
          </div>
          <h1 className="text-[15px] flex items-center text-[#636262] ">
            {getValues("currentProvince")}
          </h1>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-[15px] text-primary font-semibold">
          {getValues("course")}{" "}
          <span className="text-[#636262]">({getValues("yrLevel")})</span>
        </h1>
      </div>
      <div className="flex flex-col items-center mb-5 ">
        <ul className="flex gap-8 text-[#636262] text-[15px] font-bold">
          {dataInformation.map((data, index) => (
            <li
              className={`${
                dataInfo === data ? "active" : ""
              } cursor-pointer hover`}
              onClick={() => setDataInfo(data)}
              key={index}
            >
              {data}
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-primary mb-10" />
      {showData()}
    </div>
  );
};

export default MainContentInformation;
