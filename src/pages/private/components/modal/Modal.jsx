import { motion } from "framer-motion";
import React from "react";

export const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          className=" min-w-auto -h-auto  flex flex-col items-center bg-[#FFFFEB] rounded-lg overflow-y-auto "
          animate={{ scale: [0, 1.5, 1] }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-[5vh] bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-t-lg"></div>

          {children}
        </motion.div>
      </div>
    </>
  );
};
