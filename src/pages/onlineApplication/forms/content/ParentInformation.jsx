import React from "react";

const ParentInformation = ({ getValues }) => {
  const parentGardian = [
    {
      Title: "Father's Information",
      option: "father",
    },
    {
      Title: "Mother's Information",
      option: "mother",
    },
    {
      Title: "Guardian's Information",
      option: "guardian",
    },
  ];
  return (
    <div className="flex flex-col gap-x-[10rem] gap-y-6 lg:flex-row flex-wrap">
      {parentGardian.map((parent, index) => (
        <div key={index}>
          <h1 className="text-primary text-[15px] font-bold mb-5">
            {parent.Title}
          </h1>
          <div className="flex flex-col gap-5 font-bold">
            <div className="text-[15px] flex gap-5">
              <h1 className="text-[#636262] text-[15px] w-[100px] ">Name:</h1>
              <h1 className="text-[#3b3a3a]">
                {getValues([parent.option + "FirstName"])}{" "}
                {getValues([parent.option + "LastName"])}{" "}
                {getValues([parent.option + "SuffixName"])}
              </h1>
            </div>
            <div className="text-[15px] flex gap-5">
              <h1 className="text-[#636262]  w-[100px] text-[15px]">Email:</h1>
              <h1 className="text-[#3b3a3a]">
                {getValues([parent.option + "EmailAddress"])}
              </h1>
            </div>
            <div className="text-[15px] flex gap-5">
              <h1 className="text-[#636262]  w-[100px] text-[15px]">Number:</h1>
              <h1 className="text-[#3b3a3a]">
                {getValues([parent.option + "MobileNumber"])}
              </h1>
            </div>
            <div className="text-[15px] flex gap-5">
              <h1 className="text-[#636262]  w-[100px] text-[15px]">
                Occupation:
              </h1>
              <h1 className="text-[#3b3a3a]">
                {getValues([parent.option + "Occupation"])}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParentInformation;
