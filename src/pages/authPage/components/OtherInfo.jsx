import React from "react";
import Input from "../../../components/form/textfield/Input";
import MultilineInput from "../../../components/form/textfield/Multiline";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className=" flex flex-col gap-2">
      <div className="mb-4">
        <Input
          label="Nationality"
          type="Text"
          variant="filled"
          value={formData.nationality}
          onChange={(e) => {
            setFormData({ ...formData, nationality: e.target.value });
          }}
        />
      </div>
      <div className="mb-4 ">
        <Input
          label="Others"
          variant="filled"
          value={formData.other}
          onChange={(e) => {
            setFormData({ ...formData, other: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default OtherInfo;
