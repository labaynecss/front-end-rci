import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ContainedButton from "../../components/buttons/ContainedButton";
import student from "../.../../../assets/images/student.png";
import studying from "../.../../../assets/images/studying.png";
import analysis from "../.../../../assets/images/analysis.png";
import knowledge from "../.../../../assets/images/knowledge.png";
import sports from "../.../../../assets/images/sports.png";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar } from "@mui/material";
import useToggle from "../../hooks/useToggle";
import Books from "./Books";
import Miscellaneous from "./Miscellanious";
import Grades from "./Grades";
import StudentInfoLog from "./StudentInfoLog";
import Subject from "../student/Subject";

const StudentUi = (props) => {
  useEffect(() => {
    document.title = "Student Portal";
  }, []);
  const { value, toggleValue } = useToggle(false);
  const [showBooks, setShowBooks] = useState(true);
  const [showMiscellaneous, setShowMiscellaneous] = useState(false);
  const [showGrades, setShowGrades] = useState(false);
  const [showSubject, setShowSubject] = useState(false);
  const handleButtonClick = (component) => {
    if (component === "books") {
      setShowBooks(!showBooks);
      setShowMiscellaneous(false);
      setShowGrades(false);
      setShowSubject(false);
    } else if (component === "miscellaneous") {
      setShowMiscellaneous(!showMiscellaneous);
      setShowBooks(false);
      setShowGrades(false);
      setShowSubject(false);
    } else if (component === "grades") {
      setShowGrades(!showGrades);
      setShowBooks(false);
      setShowMiscellaneous(false);
      setShowSubject(false);
    } else if (component === "Subject") {
      setShowSubject(!showSubject);
      setShowBooks(false);
      setShowMiscellaneous(false);
      setShowGrades(false);
    }
  };
  return (
    <div className="">
      <header className="relative w-full flex justify-between px-5 py-2 items-center shadow-xl">
        <div className="text-[20px]">
          <button onClick={() => toggleValue(!value)}>
            <GiHamburgerMenu />
          </button>
        </div>
        <Avatar alt="Remy Sharp" />
      </header>
      {value && (
        <AnimatePresence>
          <motion.div
            className={`bg-secondary  w-[200px] absolute z-20 left-5 rounded-xl top-10 p-5`}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
            transition={{ type: "spring", stiffness: 100, duration: 0.75 }}
          >
            <motion.ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
              transition={{ type: "spring", stiffness: 100, duration: 1 }}
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Change Password
                </a>
              </li>
              <li>
                <a
                  href="Login"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      )}
      <div className="flex px-5 py-6 gap-4 pr-0">
        <div className=" w-[20%] -mt-4 rounded-lg h-full border shadow-left p-5">
          <StudentInfoLog />
        </div>

        <div className="w-[75%] flex flex-col gap-6">
          <div className="w-full flex  overflow-hidden justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-5 text-white text-[30px] shadow-md">
            <div className=" w-[400px]">
              <h1>
                Introducing. Richwell Colleges <br /> Prosperity and Success
              </h1>
              <ContainedButton label="Click" bgColor="#E8AA42" link="/login" />
            </div>
            <div className="relative w-[400px] h-full flex justify-center items-center ">
              <img src={student} alt="" className="w-[100px] z-[2]" />
              <motion.div
                className="absolute top-0 left-0 glow-container rounded-full"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <img src={studying} alt="" className="w-[50px]" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-[4rem] "
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <img src={knowledge} alt="" className="w-[50px] z-[2]" />
              </motion.div>
              <motion.div
                className="absolute top-1 right-10"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <img src={analysis} alt="" className="w-[50px]" />
              </motion.div>
              <motion.div
                className="bg-red-200 rounded-full  w-[160px] h-[160px]  absolute bg-gradient-to-r from-[#E8AA42] to-purple-500 shadow-xl"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              ></motion.div>
            </div>
          </div>
          <div className="h-full w-full flex justify-center">
            <div className="w-full h-full font-bold text-center ">
              <hr />
              <div className="flex w-auto justify-center gap-10">
                <div className=" text-center cursor-pointer underlineHover">
                  <h1 onClick={() => handleButtonClick("books")}>Books</h1>
                </div>
                <div className=" text-center cursor-pointer underlineHover">
                  <h1 onClick={() => handleButtonClick("miscellaneous")}>
                    Miscellaneous
                  </h1>
                </div>
                <div className=" text-center  cursor-pointer underlineHover ">
                  <h1 onClick={() => handleButtonClick("grades")}>Grades</h1>
                </div>
                <div className=" text-center  cursor-pointer underlineHover ">
                  <h1 onClick={() => handleButtonClick("Subject")}>Subject</h1>
                </div>
              </div>
              <hr />

              <div className=" h-full w-full mt-3 ">
                {showGrades && <Grades />}
                {showBooks && <Books />}
                {showMiscellaneous && <Miscellaneous />}
                {showSubject && <Subject />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentUi;
