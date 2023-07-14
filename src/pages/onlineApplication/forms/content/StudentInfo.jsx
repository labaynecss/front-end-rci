import React, { useRef } from "react";
import InputText from "../../../../components/form/textfield/Input";
import SelectItems from "../../../../components/form/select/SelectItems";
import { DateField } from "@mui/x-date-pickers";
import Datepick from "../../../../components/form/textfield/DateField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Avatar } from "@mui/material";

const StudentInfo = ({
  handleImageChange,
  useImage,
  register,
  error,
  control,
}) => {
  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const civilStatus = [
    { value: "single", label: "Single" },
    { value: "maried", label: "Maried" },
  ];
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const image = useImage;
  return (
    <div className="w-full p-5 ">
      <div className="mb-5" onClick={handleImageClick}>
        {!image ? (
          <div className="flex flex-col items-center ">
            <AddPhotoAlternateIcon
              sx={{ fontSize: "100px", color: "#833AB4" }}
            />
            <h1 className="text-[#5c5c5c] text-[20px] font-bold mb-5">
              Upload 2x2 Picture
            </h1>
          </div>
        ) : (
          <div className=" flex justify-center ">
            <Avatar
              sx={{ width: 200, height: 200 }}
              src={URL.createObjectURL(image)}
            />
          </div>
        )}
        <input type="file" ref={inputRef} hidden onChange={handleImageChange} />
      </div>
      <div className="mb-5">
        <h1 className="text-primary text-[20px] font-bold">
          Student Information
        </h1>
      </div>
      <div className="flex gap-2 mb-5">
        <InputText
          label="First Name"
          variant="filled"
          type="text"
          name="studentFirstName"
          register={register}
          error={error?.studentFirstName || ""}
        />
        <InputText
          label="Middle Name"
          variant="filled"
          type="text"
          name="studentMiddleName"
          register={register}
          error={error?.studentMiddleName || ""}
        />
        <InputText
          label="Last Name"
          variant="filled"
          type="text"
          name="studentLastName"
          register={register}
          error={error?.studentLastName || ""}
        />
        <InputText
          label="Suffix Name"
          variant="filled"
          type="text"
          name="studentSuffixName"
          register={register}
          error={error?.studentSuffixName || ""}
        />
      </div>
      <div className="flex gap-2 mb-5">
        {/* <SelectItems
          name="gender"
          options={gender}
          // value=""
          label="Gender"
          inputProps={newRegister("gender")}
          error={error.gender?.message || ""}
        /> */}
        <SelectItems
          label="Gender"
          name="gender"
          control={control}
          error={error?.gender}
          options={gender}
        />
        <SelectItems
          name="civilStatus"
          label="Civil Status"
          control={control}
          error={error?.civilStatus}
          options={civilStatus}
        />

        <InputText
          label="Citizenship"
          variant="filled"
          type="text"
          name="citizenship"
          register={register}
          error={error?.citizenship || ""}
        />
        <Datepick label="Date Of Birth" name="dateOfBirth" />
      </div>
      <div className="flex gap-2 mb-5">
        <InputText
          label="Place of Birth"
          variant="filled"
          type="text"
          name="placeOfBirth"
          register={register}
          error={error?.placeOfBirth || ""}
        />
        <InputText
          label="Religion"
          variant="filled"
          type="text"
          name="religion"
          register={register}
          error={error?.religion || ""}
        />
      </div>
    </div>
  );
};

export default StudentInfo;
