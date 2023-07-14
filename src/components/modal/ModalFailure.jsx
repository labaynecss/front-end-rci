import React from 'react';
import fail from '../../assets/lottie/fail.json';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

const ModalFailure = ({ header, message, button, closeModal }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-row justify-center top-3 ">
          <motion.div
            className="flex  justify-center  md:w-1/2"
            animate={{ scale: [0, 1.2, 1] }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.3, ease: 'easeInOut' }}>
            <div className="flex flex-col mt-20 pb-5 shadow-2xl rounded-xl bg-gray-100 z-20">
              <div className="flex flex-row justify-center text-white h-[180px] w-[450px]  bg-red-500  rounded-t-lg">
                <motion.div
                  className="flex flex-row justify-center "
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}>
                  <Lottie animationData={fail} />
                </motion.div>
              </div>
              <div className="flex flex-col space-y-5 py-5">
                <h1 className="text-2xl font-serif text-center">{header}</h1>
                <p className="text-center">{message}</p>
                <div className="flex flex-row justify-center">
                  <button
                    className="shadow-md shadow-zinc-500 w-32 text-center transition-all duration-150 bg-red-700 text-white border-b-8 border-b-red-700 rounded-lg hover:border-t-8 hover:border-b-0 hover:bg-red-700 hover:border-t-red-700 hover:shadow-lg"
                    onClick={closeModal}>
                    <div className="hover:shadow-md hover:shadow-zinc-500 p-5 duration-150 bg-red-500 rounded-lg hover:bg-red-700">
                      {button}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ModalFailure;
