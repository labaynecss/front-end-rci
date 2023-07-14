import React from "react";
import InputText from "../../../../components/form/textfield/Input";

const CurrentAddress = ({ register, error }) => {
  return (
    <div className="w-full p-5">
      <div className="mb-5">
        <h1 className="text-primary text-[20px] font-bold">Current Address</h1>
      </div>
      <div className="flex md:flex-row flex-col gap-2 mb-5">
        <InputText
          label="Street # / Unit #"
          variant="filled"
          type="text"
          name="currentStreetUnit"
          register={register}
          error={error?.currentStreetUnit || ""}
        />
        <InputText
          label="Street"
          variant="filled"
          type="text"
          name="currentStreet"
          register={register}
          error={error?.currentStreet || ""}
        />
        <InputText
          label="Subdivision / Village / Bldg"
          variant="filled"
          type="text"
          name="currentSubdivision"
          register={register}
          error={error?.currentSubdivision || ""}
        />
        <InputText
          label="Barangay"
          variant="filled"
          type="text"
          name="currentBarangay"
          register={register}
          error={error?.currentBarangay || ""}
        />
      </div>
      <div className="flex gap-2 mb-5">
        <InputText
          label="City / Municipality"
          variant="filled"
          type="text"
          name="currentCity"
          register={register}
          error={error?.currentCity || ""}
        />
        <InputText
          label="Province"
          variant="filled"
          type="text"
          name="currentProvince"
          register={register}
          error={error?.currentProvince || ""}
        />
        <InputText
          label="Zip Code"
          variant="filled"
          type="text"
          name="currentZipCode"
          register={register}
          error={error?.currentZipCode || ""}
        />
      </div>
    </div>
  );
};

export default CurrentAddress;
