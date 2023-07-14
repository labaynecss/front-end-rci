import React from "react";
import HeaderInformation from "./HeaderInformation";
import StudentInfo from "./StudentInfo";
import CurrentAddress from "./CurrentAddress";
import PermanentAddress from "./PermanentAddress";
import ContactInformation from "./ContactInformation";
import ParentGuaridian from "./ParentGuaridian";
import ContainedButton from "../../../../components/buttons/ContainedButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PageOne = (props) => {
  const {
    data,
    onClick,
    useImage,
    handleImageChange,
    register,
    error,
    control,
    getValues,
  } = props;
  return (
    <div>
      <HeaderInformation
        register={register}
        error={error}
        control={control}
        data={data}
        getValues={getValues}
      />
      <div className="w-full p-10 ">
        <StudentInfo
          useImage={useImage}
          handleImageChange={handleImageChange}
          register={register}
          error={error}
          control={control}
        />
        <CurrentAddress register={register} error={error} />
        <PermanentAddress
          register={register}
          error={error}
          getValues={getValues}
        />
        <ContactInformation register={register} error={error} />
        <ParentGuaridian register={register} error={error} />
        <div className="p-5">
          <ContainedButton
            onClick={onClick}
            label="Next"
            bgColor="#E8AA42"
            endIcon={<ArrowForwardIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default PageOne;
