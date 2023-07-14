import dashboard from '../../../assets/lottie/dashboard.json';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import React from 'react';
export const LeftComponent = () => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 2 }}
      animate={{ backgroundColor: 'purple', y: '-50%' }}
      transition={{ duration: 0.4 }}
      className=" h-[550px]  w-[35%] rounded-l-xl ">
      <Lottie animationData={dashboard} loop={false} className="h-[540px]" />
    </motion.div>
  );
};
