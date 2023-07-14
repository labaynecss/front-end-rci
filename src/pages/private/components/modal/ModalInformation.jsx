import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import ContainedButton from "../../../../components/buttons/ContainedButton";
import { motion, AnimatePresence } from "framer-motion";
import { duration } from "@mui/material";
import OutlinedButton from "../../../../components/buttons/OutlinedButton";

const ModalInformation = ({ onClick, onClose, selectedRowData, Approve }) => {
  const dataInformation = ["About", "School Information", "Parent Information"];
  const [dataInfo, setDataInfo] = useState("About");
  const renderData = () => {
    if (dataInfo === "About") {
      return (
        <div className="flex flex-col gap-[10rem] md:flex-row h-[200px] overflow-x-hidden p-5">
          <div>
            <h1 className="text-primary text-[15px] font-bold mb-5">
              Basic Information
            </h1>
            <div className="flex flex-col gap-5 font-bold">
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262] text-[15px] w-[100px] ">
                  Number:
                </h1>
                <h1 className="text-[#3b3a3a]">{selectedRowData.contact_no}</h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262] text-[15px] w-[100px] ">
                  Gender:
                </h1>
                <h1 className="text-[#3b3a3a]">{selectedRowData.gender}</h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[100px] text-[15px]">
                  Civil Status:
                </h1>
                <h1 className="text-[#3b3a3a]">
                  {selectedRowData.civil_status}
                </h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[100px] text-[15px]">
                  Citizenship:
                </h1>
                <h1 className="text-[#3b3a3a]">
                  {selectedRowData.citizenship}
                </h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[100px] text-[15px]">
                  Date of Birth:
                </h1>
                <h1 className="text-[#3b3a3a]">{selectedRowData.birthday}</h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[100px] text-[15px]">
                  place of Birth:
                </h1>
                <h1 className="text-[#3b3a3a]">
                  {" "}
                  {selectedRowData.birth_place}
                </h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[100px] text-[15px]">
                  Religion:
                </h1>
                <h1 className="text-[#3b3a3a]">{selectedRowData.religion}</h1>
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
                <h1 className="text-[#3b3a3a]">{selectedRowData.house_no}</h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Street:
                </h1>
                <h1 className="text-[#3b3a3a]">
                  {selectedRowData.street_name}
                </h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Subdivision / Village / Bldg:
                </h1>
                <h1 className="text-[#3b3a3a]">
                  {selectedRowData.subdivision}
                </h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Barangay:
                </h1>
                <h1 className="text-[#3b3a3a]">{selectedRowData.barangay}</h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  City / Municipality:
                </h1>
                <h1 className="text-[#3b3a3a]">
                  {selectedRowData.municipality}
                </h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Province:
                </h1>
                <h1 className="text-[#3b3a3a]">{selectedRowData.province}</h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Zip Code:
                </h1>
                <h1 className="text-[#3b3a3a]">{selectedRowData.zip_code}</h1>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (dataInfo === "School Information") {
      return (
        <div className="flex flex-col gap-[10rem] lg:flex-row h-[200px] overflow-x-hidden p-5">
          <div>
            <h1 className="text-primary text-[15px] font-bold mb-5">
              School Information
            </h1>
            <div className="flex flex-col gap-5 font-bold">
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262] text-[15px] w-[180px] ">
                  Preferred Course:
                </h1>
                <h1 className="text-[#3b3a3a]">{selectedRowData.course}</h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Admit Type:
                </h1>
                <h1 className="text-[#3b3a3a]">{selectedRowData.admit_type}</h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  Yr Level / Grade Level:
                </h1>
                <h1 className="text-[#3b3a3a]">
                  {selectedRowData.school_level}
                </h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">
                  School Year:
                </h1>
                <h1 className="text-[#3b3a3a]">
                  {selectedRowData.school_year}
                </h1>
              </div>
              <div className="text-[15px] flex gap-5">
                <h1 className="text-[#636262]  w-[180px] text-[15px]">Term:</h1>
                <h1 className="text-[#3b3a3a]"> {selectedRowData.term}</h1>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (dataInfo === "Parent Information") {
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
        <div className="flex flex-col gap-x-[10rem] gap-y-6 lg:flex-row flex-wrap h-[200px] overflow-x-hidden p-5">
          {parentGardian.map((parent, index) => (
            <div key={index}>
              <h1 className="text-primary text-[15px] font-bold mb-5">
                {parent.Title}
              </h1>
              <div className="flex flex-col gap-5 font-bold">
                <div className="text-[15px] flex gap-5">
                  <h1 className="text-[#636262] text-[15px] w-[100px] ">
                    Name:
                  </h1>
                  <h1 className="text-[#3b3a3a]">
                    {selectedRowData[parent.option + "_firstname"]}{" "}
                    {selectedRowData[parent.option + "_lastname"]}{" "}
                    {selectedRowData[parent.option + "_suffix"]}
                  </h1>
                </div>
                <div className="text-[15px] flex gap-5">
                  <h1 className="text-[#636262]  w-[100px] text-[15px]">
                    Email:
                  </h1>
                  <h1 className="text-[#3b3a3a]">
                    {selectedRowData[parent.option + "_email"]}
                  </h1>
                </div>
                <div className="text-[15px] flex gap-5">
                  <h1 className="text-[#636262]  w-[100px] text-[15px]">
                    Number:
                  </h1>
                  <h1 className="text-[#3b3a3a]">
                    {selectedRowData[parent.option + "_contactno"]}
                  </h1>
                </div>
                <div className="text-[15px] flex gap-5">
                  <h1 className="text-[#636262]  w-[100px] text-[15px]">
                    Occupation:
                  </h1>
                  <h1 className="text-[#3b3a3a]">
                    {selectedRowData[parent.option + "_occupation"]}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="relative bg-white h-[500px] w-[750px] rounded-md flex justify-center overflow-hidden"
        animate={{ scale: [0, 1.2, 1] }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      >
        <div className="w-full p-5">
          <div className="absolute -mt-[10rem] bg-primary rounded-full w-[200px] h-[200px] opacity-[.8]"></div>
          <div className="absolute right-0 -mr-[8rem] mt-[15rem] bg-primary rounded-full w-[200px] h-[200px] opacity-[.8]"></div>
          <div className="mt-5 text-center">
            <h1 className="font-bold text-[20px] text-[#161414]">
              {selectedRowData.first_name} {selectedRowData.middle_name}{" "}
              {selectedRowData.last_name} {selectedRowData.extension_name}
            </h1>
            <h2 className="font-bold text-[15px] text-[#484747]">
              ID: {selectedRowData.queue_no}
            </h2>
            <h2 className="font-bold text-[15px] text-[#484747]">
              {selectedRowData.course}
            </h2>
          </div>
          <div className="w-full mt-5 mb-5 flex justify-center gap-4">
            <OutlinedButton
              label="Approve"
              color="secondary"
              onClick={Approve}
            />
            <OutlinedButton label="Decline" color="secondary" />
          </div>
          <div className="flex flex-col items-center mb-5">
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
          {renderData()}
        </div>
        <div
          className="absolute right-1 top-1 w-[40px] flex justify-center items-center h-[40px] rounded-full cursor-pointer"
          onClick={onClick}
        >
          <CancelIcon className="absoulute left-4" />
        </div>
      </motion.div>
    </div>
  );
};

export default ModalInformation;
