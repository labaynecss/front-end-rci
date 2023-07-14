import React, { useState } from "react";
import ContainedButton from "../../../../components/buttons/ContainedButton";
import ArrowBackwardIcon from "@mui/icons-material/ArrowBack";
import SideInformation from "./SideInformation";
import MainContentInformation from "./MainContentInformation";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const PageTwo = (props) => {
  const { onClick, getValues, useImage } = props;

  return (
    <>
      <div className="w-full p-5 flex gap-2 mb-5">
        <div className=" bluring rounded-md p-5">
          <div className="mb-5  ">
            <SideInformation getValues={getValues} useImage={useImage} />
          </div>
          <div className="flex justify-center gap-4">
            <ContainedButton
              onClick={onClick}
              label="Prev"
              bgColor="#E8AA42"
              endIcon={<ArrowBackwardIcon />}
            />
            <ContainedButton
              type="submit"
              label="Submit"
              bgColor="#E8AA42"
              endIcon={<KeyboardArrowUpIcon />}
            />
          </div>
        </div>

        <MainContentInformation getValues={getValues} />
      </div>
    </>
  );
};

export default PageTwo;
