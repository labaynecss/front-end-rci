import React from "react";

const AboutStudent = (props) => {
  const { getValues } = props;
  return (
    <div className="flex flex-col gap-[10rem] md:flex-row">
      <div>
        <h1 className="text-primary text-[15px] font-bold mb-5">
          Basic Information
        </h1>
        <div className="flex flex-col gap-5 font-bold">
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262] text-[15px] w-[100px] ">Gender:</h1>
            <h1 className="text-[#3b3a3a]">{getValues("gender")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[100px] text-[15px]">
              Civil Status:
            </h1>
            <h1 className="text-[#3b3a3a]">{getValues("civilStatus")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[100px] text-[15px]">
              Citizenship:
            </h1>
            <h1 className="text-[#3b3a3a]">{getValues("citizenship")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[100px] text-[15px]">
              Date of Birth:
            </h1>
            <h1 className="text-[#3b3a3a]">{getValues("dateOfBirth")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[100px] text-[15px]">
              place of Birth:
            </h1>
            <h1 className="text-[#3b3a3a]"> {getValues("placeOfBirth")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[100px] text-[15px]">Religion:</h1>
            <h1 className="text-[#3b3a3a]">{getValues("religion")}</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-primary text-[15px] font-bold mb-5">
          Current Address
        </h1>
        <div className="flex flex-col gap-5 font-bold">
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262] text-[15px] w-[180px] ">
              Streen # /Unit #:
            </h1>
            <h1 className="text-[#3b3a3a]">{getValues("currentStreetUnit")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">Street:</h1>
            <h1 className="text-[#3b3a3a]">{getValues("currentStreet")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">
              Subdivision / Village / Bldg:
            </h1>
            <h1 className="text-[#3b3a3a]">
              {getValues("currentSubdivision")}
            </h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">Barangay:</h1>
            <h1 className="text-[#3b3a3a]">{getValues("currentBarangay")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">
              City / Municipality:
            </h1>
            <h1 className="text-[#3b3a3a]"> {getValues("currentCity")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">Province:</h1>
            <h1 className="text-[#3b3a3a]">{getValues("currentProvince")}</h1>
          </div>
          <div className="text-[15px] flex gap-5">
            <h1 className="text-[#636262]  w-[180px] text-[15px]">Zip Code:</h1>
            <h1 className="text-[#3b3a3a]">{getValues("currentZipCode")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStudent;
