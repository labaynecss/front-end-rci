import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RadioButton from "../../../components/buttons/RadioButton";
import cat from "../../../assets/images/cat.png";
import ContainedButton from "../../../components/buttons/ContainedButton";
import { useNavigate } from "react-router-dom";

const NewStudent = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  console.log(selectedValue);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://richwellcolleges.edu.ph/api/collegeCourse.php"
  //       );
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const academicOfferings = ["Senior High", "Bachelors", "Diploma"];
  const showButton = () => {
    if (selectedValue === "Bachelors") {
      return (
        <ContainedButton
          label="Next"
          onClick={() => navigate("/application")}
        />
      );
    }
  };
  return (
    <motion.div
      className="relative flex justify-center mt-5 "
      animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
      initial={{ scale: 0, opacity: 0.2 }}
    >
      <motion.div
        className="w-[60%] p-5  shadow-md bg-white shadow-violet-600 rounded-md mb-5"
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-primary text-[18px] font-bold mb-5">
          Academic Offerings
        </h1>
        {academicOfferings.map((item, index) => (
          <div key={index} className="border py-2 px-5 rounded-md mb-5">
            <RadioButton
              value={item}
              checked={selectedValue === item}
              onChange={handleChange}
            />
          </div>
        ))}
        {showButton()}
      </motion.div>
    </motion.div>
  );
};

export default NewStudent;
