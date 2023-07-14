import React from "react";
import Input from "../../../components/form/textfield/Input";
function PersonalInfo({ formData, setFormData }) {
  return (
    <div className=" flex flex-col gap-2">
      <div className="mb-4">
        <Input
          label="First Name"
          type="Text"
          variant="filled"
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <Input
          label="Last Name"
          type="Text"
          variant="filled"
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
