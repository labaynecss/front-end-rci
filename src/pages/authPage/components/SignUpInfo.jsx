import React from "react";
import Input from "../../../components/form/textfield/Input";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className=" flex flex-col gap-2">
      <div className="mb-4">
        <Input
          label="Email"
          type="Email"
          variant="filled"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <Input
          label="Password"
          type="Password"
          variant="filled"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
      </div>
    </div>
  );
}

export default SignUpInfo;
