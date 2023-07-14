import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageOne from "./content/PageOne";
import PageTwo from "./content/PageTwo";
import ScrollToTop from "../../../components/ScrollTop";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formApi } from "./api/FormApi";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import thankyou from "../../../assets/lottie/check.json";
import ContainedButton from "../../../components/buttons/ContainedButton";
import Progressbar from "../../../components/Progressbar";

const schema = z.object({
  syYear: z.string(),
  admitAs: z.string(),
  course: z.string(),
  yrLevel: z.string(),
  term: z.string(),
  studentFirstName: z
    .string()
    .min(2, "firstName min 2 chars")
    .max(30, "max 30 chars"),
  studentMiddleName: z.string(),
  studentLastName: z
    .string()
    .min(2, "lastName min 2 chars")
    .max(30, "max 30 chars"),
  studentSuffixName: z.string(),
  gender: z.string(),
  placeOfBirth: z.string().nonempty("Place of Birth is required"),
  religion: z.string().nonempty("Religion is required"),
  civilStatus: z.string(),
  citizenship: z.string().nonempty("Citizenship is required"),
  currentStreetUnit: z.string().nonempty("Street Unit is required"),
  currentStreet: z.string().nonempty("Street is required"),
  currentSubdivision: z.string().nonempty("Subdivision is required"),
  currentBarangay: z.string().nonempty("Barangay is required"),
  currentCity: z.string().nonempty("City is required"),
  currentProvince: z.string().nonempty("Province is required"),
  currentZipCode: z.string().nonempty("Zip Code is required"),
  permanentStreetUnit: z.string().nonempty("Street Unit is required"),
  permanentStreet: z.string().nonempty("Street is required"),
  permanentSubdivision: z.string().nonempty("Subdivision is required"),
  permanentBarangay: z.string().nonempty("Barangay is required"),
  permanentCity: z.string().nonempty("City is required"),
  permanentProvince: z.string().nonempty("Province is required"),
  permanentZipCode: z.string().nonempty("Zip Code is required"),
  telephoneNumber: z
    .string()
    .optional()
    .refine((value) => !value || /^\d{8}$/.test(value), {
      message: "Telephone number must have 8 digits",
    }),

  mobileNumber: z.string().refine((value) => /^09\d{9}$/.test(value), {
    message: "Mobile number must start with '09' and have 11 digits",
  }),
  emailAddress: z.string().email(),
  fatherFirstName: z
    .union([z.string().length(0, "min 2 char"), z.string().min(2)])
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  fatherMiddleName: z
    .union([z.string().length(0, "min 2 char"), z.string().min(2)])
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  fatherLastName: z
    .union([z.string().length(0, "min 2 char"), z.string().min(2)])
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  fatherSuffixName: z
    .union([z.string().length(0), z.string()])
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  fatherMobileNumber: z
    .string()
    .optional()
    .refine((value) => !value || /^09\d{9}$/.test(value), {
      message: "Mobile number must start with '09' and have 11 digits",
    }),
  fatherEmailAddress: z.union([
    z.string().length(0, "it must a valid email"),
    z.string().email(),
  ]),
  fatherOccupation: z
    // .union([z.string().length(0, ""), z.string()])
    .string()
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  motherFirstName: z
    .union([z.string().length(0, "min 2 char"), z.string().min(2)])
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  motherMiddleName: z
    .union([z.string().length(0, "min 2 char"), z.string().min(2)])
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  motherLastName: z
    .union([z.string().length(0, "min 2 char"), z.string().min(2)])
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  motherSuffixName: z
    .union([z.string().length(0, "min 2 char"), z.string().min(2)])
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  motherMobileNumber: z
    .string()
    .optional()
    .refine((value) => !value || /^09\d{9}$/.test(value), {
      message: "Mobile number must start with '09' and have 11 digits",
    }),
  motherEmailAddress: z.union([
    z.string().length(0, "it must a valid email"),
    z.string().email(),
  ]),
  motherOccupation: z
    // .union([z.string().length(0, ""), z.string()])
    .string()
    .optional()
    .transform((e) => (e === "" ? "" : e)),
  guardianFirstName: z
    .string()
    .min(2, "firstName min 2 chars")
    .max(30, "max 30 chars"),
  guardianMiddleName: z.string(),
  guardianLastName: z
    .string()
    .min(2, "lastName min 2 chars")
    .max(30, "max 30 chars"),
  guardianSuffixName: z.string(),
  guardianMobileNumber: z.string().refine((value) => /^09\d{9}$/.test(value), {
    message: "Mobile number must start with '09' and have 11 digits",
  }),
  guardianEmailAddress: z.union([
    z.string().length(0, "it must a valid email"),
    z.string().email(),
  ]),
  guardianOccupation: z
    // .union([z.string().length(0, ""), z.string()])
    .string()
    .optional()
    .transform((e) => (e === "" ? "" : e)),
});

const BachelorsForm = () => {
  useEffect(() => {
    document.title = "Bachelors Enrollment Form";
  }, []);
  const { mutate, isLoading, data } = useMutation(formApi);
  // const [gg, setGg] = useState(true);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // const navigate = useNavigate();
  const [next, setNext] = useState(0);
  const onSubmit = async (value) => {
    console.log(value);
    try {
      mutate({
        course: value.course,
        admitAS: value.admitAs,
        yrLevel: value.yrLevel,
        term: value.term,
        syYear: value.syYear,
        first_name: value.studentFirstName,
        middle_name: value.studentMiddleName,
        last_name: value.studentLastName,
        extension_name: value.studentSuffixName,
        civil_status: value.civilStatus,
        citizenship: value.citizenship,
        birth_place: value.placeOfBirth,
        religion: value.religion,
        gender: value.gender,

        house_no: value.currentStreetUnit,
        street_name: value.currentStreet,
        subdivision: value.currentSubdivision,
        barangay: value.currentBarangay,
        municipality: value.currentCity,
        province: value.currentProvince,
        zip_code: value.currentZipCode,

        permanent_house_no: value.permanentStreetUnit,
        permanent_subdivision: value.permanentSubdivision,
        permanent_street_name: value.permanentStreet,
        permanent_barangay: value.permanentBarangay,
        permanent_municipality: value.permanentCity,
        permanent_province: value.permanentProvince,
        permanent_zip_code: value.permanentZipCode,

        tel_no: value.telephoneNumber,
        contact_no: value.mobileNumber,
        email_address: value.emailAddress,

        mother_firstname: value.motherFirstName,
        mother_middlename: value.motherMiddleName,
        mother_suffix: value.motherSuffixName,
        mother_lastname: value.motherLastName,
        mother_occupation: value.motherOccupation,
        mother_email: value.motherEmailAddress,
        mother_contactno: value.motherMobileNumber,

        father_firstname: value.fatherFirstName,
        father_middlename: value.fatherMiddleName,
        father_suffix: value.fatherSuffixName,
        father_lastname: value.fatherLastName,
        father_occupation: value.fatherOccupation,
        father_email: value.fatherEmailAddress,
        father_contactno: value.fatherMobileNumber,

        guardian_firstname: value.guardianFirstName,
        guardian_middlename: value.guardianMiddleName,
        guardian_suffix: value.guardianSuffixName,
        guardian_lastname: value.guardianLastName,
        guardian_occupation: value.guardianOccupation,
        guardian_email: value.guardianEmailAddress,
        guardian_contactno: value.guardianMobileNumber,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [data]);

  const showModal = () => {
    if (data) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="realtive min-w-[30vw] min-h-[60vh] flex flex-col items-center bg-[#FFFFEB] rounded-lg "
            animate={{ scale: [0, 1.5, 1] }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-[25vh] bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-lg"></div>
            <div className="w-[120px] absolute -mt-[3rem] ">
              <Lottie animationData={thankyou} />
            </div>
            <div className="text-center p-10 ">
              <h1 className="text-[20px] font-semibold text-[#252323] ">
                Thank You For Registering
              </h1>
              <p className="w-[300px] text-[18px] mt-[1rem] text-[#706f6f] mb-5">
                We're delighted to have you as part of our school. Get ready for
                an incredible learning journey filled with growth, friendships,
                and amazing opportunities. We can't wait to see you shine!
              </p>
              <ContainedButton label="Home" bgColor="#833AB4" link="/" />
            </div>
          </motion.div>
        </div>
      );
    }
  };

  const [image, setImage] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(e.target.files[0]);
  };
  const changePage = () => {
    if (next === 0) {
      return (
        <>
          <ScrollToTop />
          <PageOne
            handleImageChange={handleImageChange}
            useImage={image}
            onClick={handleSubmit(() => setNext(next + 1))}
            register={register}
            error={errors}
            control={control}
            getValues={getValues}
          />
        </>
      );
    } else {
      return (
        <>
          <ScrollToTop />
          <PageTwo
            getValues={getValues}
            useImage={image}
            onClick={() => setNext(next - 1)}
          />
        </>
      );
    }
  };

  return (
    <div className={`background`}>
      <Progressbar width="100%" />
      {showModal()}
      <div className="w-full flex justify-center background-blur ">
        <form className="w-[1200px]" onSubmit={handleSubmit(onSubmit)}>
          {changePage()}
        </form>
      </div>
    </div>
  );
};

export default BachelorsForm;
