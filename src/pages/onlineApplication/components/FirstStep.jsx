import React, { useState } from "react";
import { motion } from "framer-motion";
import RadioButton from "../../../components/buttons/RadioButton";
import NewStudent from "../components/NewStudent";
import enroll from "../../../assets/images/enroll.png";

const FirstStep = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const rendering = () => {
    if (selectedValue === "New") {
      return <NewStudent />;
    } else if (selectedValue === "Existing RCI Student") {
      return <h1>h1 world</h1>;
    }
  };

  return (
    <div>
      <div className="p-20">
        <h1 className="text-[30px]">Online Application</h1>
        <p className="text-[17px] text-[#757373]">
          We warmly welcome junior high school completers, senior high school
          graduates, college transferees, second coursers, and foreign
          applicants to our campuses. Kindly fill-out the online application
          form for a fast and efficient admissions procedure.
        </p>
        <div className="mt-10 flex">
          <motion.div
            className="w-[60%] p-5  shadow-md shadow-violet-600 rounded-md mb-5"
            whileHover={{ scale: 1.02 }}
          >
            <h1 className="text-primary text-[18px] font-bold mb-5">
              What type of student are you?
            </h1>
            <div className="border py-2 px-5 rounded-md mb-5">
              <RadioButton
                value="New"
                checked={selectedValue === "New"}
                onChange={handleChange}
              />
            </div>
            <div className="border py-2 px-5 rounded-md mb-5">
              <RadioButton
                value="Existing RCI Student"
                checked={selectedValue === "Existing RCI Student"}
                onChange={handleChange}
              />
            </div>
          </motion.div>
          <motion.div
            className="flex  flex-grow justify-center p-5 "
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <img src={enroll} alt="" className="w-[250px]" />
          </motion.div>
        </div>
        <div>{rendering()}</div>
      </div>
    </div>
  );
};

export default FirstStep;
