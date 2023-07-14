import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import student from "../../../../assets/lottie/students.json";
import teaching from "../../../../assets/lottie/teaching.json";
import math from "../../../../assets/lottie/math.json";
import accounting from "../../../../assets/lottie/accounting.json";
import nursing from "../../../../assets/lottie/nursing.json";
import programmer from "../../../../assets/lottie/programmer.json";
import InputText from "../../../../components/form/textfield/Input";
import SelectItems from "../../../../components/form/select/SelectItems";
import { Avatar } from "@mui/material";

const HeaderInformation = ({ register, error, control, getValues }) => {
  const currentYear = new Date().getFullYear();
  const [data, setData] = useState([]);
  const [course, setCourse] = useState("");

  // console.log(course);

  const courseOptions = data.map((course) => ({
    value: course.course_name,
    label: course.course_name,
  }));
  const admitType = [
    { value: "New Student", label: "New Student" },
    { value: "Transferee", label: "Transferee" },
  ];
  const yearLevel = [
    { value: "1", label: "First Year" },
    { value: "2", label: "Second Year" },
    { value: "3", label: "Third Year" },
    { value: "4", label: "Fourth Year" },
  ];
  const selectTerm = [
    { value: "1st Term", label: "1st Term" },
    { value: "2nd Term", label: "2nd Term" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://richwellcolleges.edu.ph/api/collegeCourse.php"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const renderImage = () => {
    if (getValues("course") === "Bachelor of Science in Mathematics") {
      return <Lottie animationData={math} />;
    } else if (
      course === "BACHELOR OF TECHNICAL AND VOCATIONL TEACHING EDUCATION"
    ) {
      return <Lottie animationData={teaching} />;
    } else if (course === "BACHELOR OF SCIENCE IN NURSING") {
      return <Lottie animationData={nursing} />;
    } else if (course === "BACHELOR OF SCIENCE IN ACCOUNTANCY") {
      return <Lottie animationData={accounting} />;
    } else if (course === "BACHELOR OF SCIENCE IN INFORMATION SYSTEMS") {
      return <Lottie animationData={programmer} />;
    } else {
      return <Lottie animationData={student} />;
    }
  };

  return (
    <div className=" w-full p-10 ">
      <div className="relative flex w-full">
        <div className=" bg-gradient-to-r from-purple-500 to-pink-500 max-h-[500px] w-[50%] rounded-md shadow-md p-10 grid place-items-center">
          <h1 className="text-[30px] font-semibold text-white">
            Fill-up Your Information
          </h1>
          <div className="w-[20rem]">{renderImage()}</div>
        </div>
        <div className=" w-[50%] p-10">
          <div className="flex flex-col gap-2">
            <InputText
              label="School Year"
              value={`${currentYear}-${currentYear + 1}`}
              inputProps={{
                readOnly: true,
              }}
              variant="filled"
              name="syYear"
              register={register}
              error={error?.syYear || ""}
            />
            <SelectItems
              name="admitAs"
              label="Admit as"
              control={control}
              error={error?.admitAs}
              options={admitType}
            />
            <SelectItems
              name="course"
              control={control}
              error={error?.course}
              options={courseOptions}
              label="Course"
              onChange={(e) => setCourse(e.target.value)}
            />
            <SelectItems
              name="yrLevel"
              control={control}
              error={error?.yrLevel}
              options={yearLevel}
              label="Year Level"
            />
            <SelectItems
              name="term"
              control={control}
              error={error?.term}
              options={selectTerm}
              label="Select Term"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInformation;
