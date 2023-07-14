import React from "react";
import InputText from "../../../../components/form/textfield/Input";

const ContactInformation = ({ register, error }) => {
  return (
    <div className="w-full p-5">
      <div className="mb-5">
        <h1 className="text-primary text-[20px] font-bold">
          Contact Information
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-2 mb-5">
        <InputText
          label="Telephone No."
          variant="filled"
          type="number"
          name="telephoneNumber"
          register={register}
          error={error?.telephoneNumber || ""}
        />
        <InputText
          label="Mobile No."
          variant="filled"
          type="number"
          name="mobileNumber"
          register={register}
          error={error?.mobileNumber || ""}
        />
        <InputText
          label="Email Address"
          variant="filled"
          type="email"
          name="emailAddress"
          register={register}
          error={error?.emailAddress || ""}
        />
      </div>
    </div>
  );
};

export default ContactInformation;
