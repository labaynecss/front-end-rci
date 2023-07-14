import React from "react";
import { getstudentinfo } from "../api/studentInfo";
import { useQuery } from "@tanstack/react-query";
function StudentInfoLog() {
  const { data, isLoading, isError, error } = useQuery(
    ["roles"],
    getstudentinfo
  );
  console.log(data);
  [data];
  return (
    <div>
      <div className="mb-20">
        <div className="flex gap-1 mb-2 flex-col">
          <h1 className="text-2xl text-primary font-bold hr-lines">
            Basic Information
          </h1>
          <hr />
          <h2 className="text-sm">
            Name: {data?.first_name} {data?.middle_name} {data?.last_name}
          </h2>
          <h2 className="text-sm">Course: {data?.course_name}</h2>
          Student Number:<h2> {data?.student_id}</h2>
        </div>
        <hr />
        <div className="flex gap-3 mb-2 mt-2">
          <h1 className="text-[15px] text-primary font-bold hr-lines">
            Contact Information
          </h1>
          <h2 className="text-[12px] bg-secondary font-bold text-white px-2 py-1 rounded-md">
            Student
          </h2>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <div className="flex">
            <h1 className="text-sm ">Mobile Number: {data?.contact_no}</h1>
            <h1 className="text-[#3b3a3a] font-bold "></h1>
          </div>
          <div className="flex">
            <h1 className="text-[15px] font-semibold text-[#5c5c5c]  w-[130px]">
              Telephone Number: {data?.tel_no}
            </h1>
            <h1 className="text-[#3b3a3a] font-bold "></h1>
          </div>
          <div className="flex">
            <h1 className="text-[15px] font-semibold text-[#5c5c5c]  w-[130px]">
              Email: {data?.email_address}
            </h1>
            <h1 className="text-[#3b3a3a] font-bold "></h1>
          </div>
          <hr />
          <div>
            <h1 className="text-primary text-[15px] font-bold mb-3">
              Current Address
            </h1>
            <div className="flex flex-col gap-3 font-bold">
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262] text-[15px] w-[180px] ">
                  Streen # /Unit #: {data?.house_no}
                </h1>
                <h1 className="text-[#3b3a3a]"></h1>
              </div>
              <div className="text-[15px] flex gap-3">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Street: {data?.street_name}
                </h1>
                <h1 className="text-[#3b3a3a]"></h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Subdivision / Village / Bldg: {data?.subdivision}
                </h1>
                <h1 className="text-[#3b3a3a]"></h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Barangay: {data?.barangay}
                </h1>
                <h1 className="text-[#3b3a3a]"></h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  City / Municipality: {data?.municipality}
                </h1>
                <h1 className="text-[#3b3a3a]"></h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Province: {data?.province}
                </h1>
                <h1 className="text-[#3b3a3a]"></h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Zip Code: {data?.zip_code}
                </h1>
                <h1 className="text-[#3b3a3a]"></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentInfoLog;
