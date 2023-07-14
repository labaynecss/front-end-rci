import React, { useState } from "react";
import InputText from "../../../../components/form/textfield/Input";
import CheckBoxComponent from "../../../../components/form/checkbox/CheckBox";

const PermanentAddress = (props) => {
  const { register, error, getValues } = props;
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const getPermanentAdressValue = () => {
    if (checked) {
      return {
        // permanentStreetUnit: currentAddress.currentStreetUnit,
        // permanentStreet: currentAddress.currentStreet,
        // permanentSubdivision: currentAddress.currentSubdivision,
        // permanentBarangay: currentAddress.currentBarangay,
        // permanentCity: currentAddress.currentCity,
        // permanentProvince: currentAddress.currentProvince,
        // permanentZipCode: currentAddress.currentZipCode,
      };
    } else {
      return {
        // permanentStreetUnit: permanentAddress.permanentStreetUnit,
        // permanentStreet: permanentAddress.permanentStreet,
        // permanentSubdivision: permanentAddress.permanentSubdivision,
        // permanentBarangay: permanentAddress.permanentBarangay,
        // permanentCity: permanentAddress.permanentCity,
        // permanentProvince: permanentAddress.permanentProvince,
        // permanentZipCode: permanentAddress.permanentZipCode,
      };
    }
  };
  const addressValue = getPermanentAdressValue();

  return (
    <div className="w-full p-5">
      <div className="mb-5 flex gap-2 relative">
        <h1 className="text-primary text-[20px] font-bold">
          Permanent Address
        </h1>
        <div className="absolute right-[50%] translate-x-[50%]">
          <CheckBoxComponent
            label="Same as Current Address"
            checked={checked}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-5">
        <InputText
          label="Street # / Unit #"
          variant="filled"
          type="text"
          name="permanentStreetUnit"
          register={register}
          error={error?.permanentStreetUnit || ""}
        />
        <InputText
          label="Street"
          variant="filled"
          type="text"
          name="permanentStreet"
          register={register}
          error={error?.permanentStreet || ""}
        />
        <InputText
          label="Subdivision / Village / Bldg"
          variant="filled"
          type="text"
          name="permanentSubdivision"
          register={register}
          error={error?.permanentSubdivision || ""}
        />
        <InputText
          label="Barangay"
          variant="filled"
          type="text"
          name="permanentBarangay"
          register={register}
          error={error?.permanentBarangay || ""}
        />
      </div>
      <div className="flex gap-2 mb-5">
        <InputText
          label="City / Municipality"
          variant="filled"
          type="text"
          name="permanentCity"
          register={register}
          error={error?.permanentCity || ""}
        />
        <InputText
          label="Province"
          variant="filled"
          type="text"
          name="permanentProvince"
          register={register}
          error={error?.permanentProvince || ""}
        />
        <InputText
          label="Zip Code"
          variant="filled"
          type="text"
          name="permanentZipCode"
          register={register}
          error={error?.permanentZipCode || ""}
        />
      </div>
    </div>
  );
};

export default PermanentAddress;
