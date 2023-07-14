import React from "react";

const SchoolInformation = ({ getValues }) => {
  return (
    <div className="flex flex-col gap-[10rem] lg:flex-row">
      <div>
        <h1 className="text-primary text-[15px] font-bold mb-5">
          School Information
        </h1>
        <div className="flex flex-col gap-5 font-bold">
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262] text-[15px] w-[180px] ">
              Preferred Course:
            </h1>
            <h1 className="text-[#3b3a3a]">{getValues("course")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">
              Admit Type:
            </h1>
            <h1 className="text-[#3b3a3a]">{getValues("admitAs")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">
              Yr Level / Grade Level:
            </h1>
            <h1 className="text-[#3b3a3a]">{getValues("yrLevel")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">
              School Year:
            </h1>
            <h1 className="text-[#3b3a3a]">{getValues("syYear")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">Term:</h1>
            <h1 className="text-[#3b3a3a]"> {getValues("term")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolInformation;
