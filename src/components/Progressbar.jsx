import React from "react";
import { motion } from "framer-motion";

const Progressbar = ({ width, color }) => {
  return (
    <div className="w-full py-6 mt-[2rem]">
      <div className="flex">
        <div className="w-1/4">
          <div className="relative mb-2">
            <div className="w-10 h-10 mx-auto bg-primary rounded-full text-lg text-white flex items-center">
              <span className="text-center text-white w-full">1</span>
            </div>
          </div>
          <div className="text-xs text-center md:text-base">First Step</div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <motion.div
                  className="w-0 bg-primary py-1 rounded"
                  style={{ width: width }}
                  initial={{ width: 0 }}
                  animate={{ width: width }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </div>
            <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center ">
              <span className="text-center  text-gray-600  w-full">2</span>
            </div>
          </div>
          <div className="text-xs text-center md:text-base">
            Personal Information
          </div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-primary py-1 rounded"
                  style={{ width: "0%" }}
                />
              </div>
            </div>
            <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
              <span className="text-center text-gray-600 w-full">3</span>
            </div>
          </div>
          <div className="text-xs text-center md:text-base">
            Validate Details
          </div>
        </div>
        <div className="w-1/4">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  className="w-0 bg-green-300 py-1 rounded"
                  style={{ width: "0%" }}
                />
              </div>
            </div>
            <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
              <span className="text-center text-gray-600 w-full">
                <svg
                  className="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="text-xs text-center md:text-base">Finished</div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
