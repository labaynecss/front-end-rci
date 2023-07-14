import React from "react";
import InputText from "../../../../components/form/textfield/Input";

const ParentGuaridian = ({ register, error }) => {
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
    <div className="w-full p-5">
      <div className="mb-5">
        <h1 className="text-primary text-[20px] font-bold">
          Parents / Guardian's Information
        </h1>
      </div>
      {parentGardian.map((parent, index) => (
        <div key={index}>
          <h1 className="ml-2 mb-5 text-[20px] text-[#504e4e]">
            {parent.Title}
          </h1>
          <div className="flex gap-2 mb-5">
            <InputText
              label="First Name"
              variant="filled"
              type="text"
              name={`${parent.option}FirstName`}
              register={register}
              error={error?.[`${parent.option}FirstName`] || ""}
            />
            <InputText
              label="Middle Name"
              variant="filled"
              type="text"
              name={`${parent.option}MiddleName`}
              register={register}
              error={error?.[`${parent.option}MiddleName`] || ""}
            />
            <InputText
              label="Last Name"
              variant="filled"
              type="text"
              name={`${parent.option}LastName`}
              register={register}
              error={error?.[`${parent.option}LastName`] || ""}
            />
            <InputText
              label="Suffix Name"
              variant="filled"
              type="text"
              name={`${parent.option}SuffixName`}
              register={register}
              error={error?.[`${parent.option}SuffixName`] || ""}
            />
          </div>
          <div className="flex gap-2 mb-5">
            <InputText
              label="Mobile No."
              variant="filled"
              type="number"
              name={`${parent.option}MobileNumber`}
              register={register}
              error={error?.[`${parent.option}MobileNumber`] || ""}
            />
            <InputText
              label="Email"
              variant="filled"
              type="email"
              name={`${parent.option}EmailAddress`}
              register={register}
              error={error?.[`${parent.option}EmailAddress`] || ""}
            />
            <InputText
              label="Occupation"
              variant="filled"
              type="text"
              name={`${parent.option}Occupation`}
              register={register}
              error={error?.[`${parent.option}Occupation`] || ""}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParentGuaridian;
