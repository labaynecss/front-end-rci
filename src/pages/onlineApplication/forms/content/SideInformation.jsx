import { Avatar } from "@mui/material";
import React from "react";

const SideInformation = (props) => {
  const { getValues, useImage } = props;
  const image = useImage;
  return (
    <div className=" min-w-[15rem] p-5">
      <div className="rounded-md overflow-hidden mb-5">
        {!image ? (
          <div className=" flex justify-center  ">
            <Avatar sx={{ width: 200, height: 200 }} />
          </div>
        ) : (
          <div className="flex justify-center ">
            <Avatar
              sx={{ width: 200, height: 200 }}
              src={URL.createObjectURL(image)}
            />
          </div>
        )}
      </div>
      <div className="mb-20">
        <div className="flex gap-5 mb-2">
          <h1 className="text-[15px] text-primary font-bold hr-lines">
            Contact Information
          </h1>
          <h2 className="text-[12px] bg-secondary font-bold text-white px-2 py-1 rounded-md">
            Student
          </h2>
        </div>
        <hr />
        <div className="flex flex-col gap-5">
          <div className="flex">
            <h1 className="text-[15px] font-semibold text-[#5c5c5c]  w-[130px]">
              Mobile Number:{" "}
            </h1>
            <h1 className="text-[#3b3a3a] font-bold ">
              {getValues("mobileNumber")}
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-[15px] font-semibold text-[#5c5c5c]  w-[130px]">
              Telephone Number:{" "}
            </h1>
            <h1 className="text-[#3b3a3a] font-bold ">
              {getValues("telephoneNumber")}
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-[15px] font-semibold text-[#5c5c5c]  w-[130px]">
              Email:{" "}
            </h1>
            <h1 className="text-[#3b3a3a] font-bold ">
              {getValues("emailAddress")}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 mb-2">
          <h1 className="text-[15px] font-bold text-primary hr-lines">
            Contact Information
          </h1>
          <h2 className="text-[12px] bg-secondary font-bold text-white px-2 py-1 rounded-md">
            Parent / Guardian
          </h2>
        </div>
        <hr />
        <div className="flex flex-col gap-5">
          <div className="flex">
            <h1 className="text-[15px] font-semibold text-[#5c5c5c] w-[130px]">
              Mobile Number:{" "}
            </h1>
            <h1 className="text-[#3b3a3a] font-bold ">
              {getValues("guardianMobileNumber")}
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-[15px] font-semibold text-[#5c5c5c]  w-[130px]">
              Email:{" "}
            </h1>
            <h1 className="text-[#3b3a3a] font-bold ">
              {getValues("guardianEmailAddress")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideInformation;
