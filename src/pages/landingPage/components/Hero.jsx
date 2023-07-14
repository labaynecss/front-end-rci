import React from "react";
import heroImg from "../../../assets/images/hero.png";
import heroBg from "../../../assets/images/admin.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="h-[600px] flex justify-center p-20 text-[20px] text-white "
    >
      <div className=" w-full h-full top-0 object-fit z-[-1] opacity-10 absolute">
        <img src={heroBg} alt="" className="w-full h-full object-fit " />
      </div>
      <div className="absolute top-0 w-full h-full bg-primary mix-blend-overlay z-[-1]"></div>
      {/* <div className="absolute top-0 left-0 bg-primary w-full h-full circle  opacity-60"></div>
      <div className="absolute top-0 left-0 bg-primary w-full h-full circle2  opacity-60"></div> */}
      <div className="flex justify-center items-center  w-full -mt-[10rem] text-center">
        <div className="flex flex-col gap-5 p-10 w-[900px]">
          <div className=" py-5">
            <motion.h1
              className="sm:text-[60px] md:text-[60px]  tracking-[2rem] font-bold text-[#e69ffd]"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              RICHWELL
            </motion.h1>
            <motion.h1
              className="sm:-mt-5 md:-mt-5  tracking-[12px] text-[#ecac44] sm:text-[20px] md:text-[25px]  -ml-5 over"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              COLLEGES INCORPORATED{" "}
            </motion.h1>
          </div>
          <motion.p
            className="text-center "
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            eaque aperiam asperiores tenetur. Reiciendis, vel. Vitae quibusdam
            non dolore quam? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dolorum, in!
          </motion.p>
          {/* <motion.a
            className="bg-primary text-white py- px-4 rounded-xl w-[100px] cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            Enroll Now
          </motion.a> */}
        </div>
        {/* <div className="w-[600px] flex z-10 bg-red-200">
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
