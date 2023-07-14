import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SelectInput from "./testtext";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  gender: z.string().nonempty("Gender is required"),
});

const MyForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectInput
        label="Gender"
        name="gender"
        control={control}
        error={errors?.gender}
        options={genderOptions}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
