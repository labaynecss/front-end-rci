import React, { useEffect } from "react";
import Lottie from "lottie-react";
import lost from "../assets/lottie/404.json";
import { motion } from "framer-motion";
import ContainedButton from "./buttons/ContainedButton";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "PageNotFound";
  }, []);
  return (
    <div className="relative grid place-items-center h-screen">
      <div className="text-center">
        <div className=" w-[500px]">
          <Lottie animationData={lost} />
        </div>
        <div>
          <h1 className="text-[30px] font-semibold text-[#252323]">
            Page Not Found
          </h1>
          <h1 className="text-[20px] font-semibold text-[#706f6f]">
            The page you're looking for does not seem to exist
          </h1>
        </div>
      </div>
      <motion.div
        className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[100px] h-[100px] rounded-full absolute -z-10 left-5 top-10"
        // initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 0] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>
      <motion.div
        className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[100px] h-[100px] rounded-full absolute -z-10 left-[200px] top-[300px] "
        animate={{ scale: [0, 1.2, 0] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>
      <motion.div
        className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[100px] h-[100px] rounded-full absolute -z-10 right-10 bottom-20"
        animate={{ scale: [0, 1.2, 0] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>
      <motion.div
        className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[100px] h-[100px] rounded-full absolute -z-10 right-[300px] "
        animate={{ scale: [0, 1.2, 0] }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>
      <motion.div
        className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[100px] h-[100px] rounded-full absolute -z-10 right-[200px] top-[100px]"
        animate={{ scale: [0, 1.2, 0] }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>
      <motion.div
        className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[100px] h-[100px] rounded-full absolute -z-10 left-20 bottom-2"
        animate={{ scale: [0, 1.2, 0] }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>
      <div className="-mt-[5rem]">
        <ContainedButton label="Home" bgColor="purple" link="/" />
      </div>
    </div>
  );
};

export default PageNotFound;
