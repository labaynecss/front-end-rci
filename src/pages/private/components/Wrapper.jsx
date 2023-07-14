import React from 'react';
import { motion } from 'framer-motion';
import bggg from '../../../assets/images/bggg.png';

export const Wrapper = ({ children, isExpanded }) => {
  return (
    <>
      <section
        className={` min-h-screen  mt-10 ${
          isExpanded ? 'ml-[90px] ' : 'ml-[250px] md:w-auto'
        } pt-2 duration-300`}
        style={{
          backgroundImage: `url(${bggg})`,
          backgroundSize: 'cover',
        }}>
        <motion.h1
          className="text-fuchsia-800 pl-4 py-[2rem] font-bold"
          whileInView={{
            y: 0,
            transition: { duration: 0.4 },
            opacity: 1,
          }}
          initial={{ y: 100, opacity: 0.3 }}>
          Overview
        </motion.h1>
        <div className="mx-4">
          <div className="justify-center items-center">{children}</div>
        </div>
      </section>
    </>
  );
};
