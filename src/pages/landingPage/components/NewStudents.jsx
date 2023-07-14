import React from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";
import { offers } from "../../../data";
import Carosel from "../../../components/Carosel";
import { useState, useEffect } from "react";

function Features() {
  const currentYear = new Date().getFullYear();
  // const [playerSize, setPlayerSize] = useState({ width: 440, height: 260 });

  // const handleResize = () => {
  //   setPlayerSize({ width: window.innerWidth, height: window.innerHeight });
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <section id="features" className=" ">
      <div className="flex flex-col justify-center gap-10 p-5">
        <motion.h1
          className="h1 text-center"
          whileInView={{
            y: 0,
            transition: { duration: 0.4 },
            opacity: 1,
          }}
          initial={{ y: 100, opacity: 0.3 }}
        >
          New<span className="underlined underline-clip"> Students</span>
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-4 justify-evenly ">
          <motion.div
            className="rounded-xl flex items-center justify-center "
            whileInView={{
              y: 0,
              transition: { duration: 0.4 },
              opacity: 1,
            }}
            initial={{ y: 100, opacity: 0.3 }}
          >
            <YouTube
              videoId="EDYSWV0-sXw"
              opts={{
                width: "100%",
                height: "295px",
              }}
            />
          </motion.div>
          <motion.div
            className="bg-primary rounded-xl shadow-xl p-4 "
            whileInView={{
              y: 0,
              transition: { duration: 0.4 },
              opacity: 1,
            }}
            initial={{ y: 100, opacity: 0.3 }}
          >
            <div className="text-[25px] text-white text-center ">
              <h1>ENROLLMENT ONGOING</h1>
              <h1>
                Senior High & College | SY {currentYear} - {currentYear + 1}
              </h1>
            </div>
            <div className="flex flex-col gap-2 p-5 relative text-[20px]">
              {offers.map((offer) => (
                <div key={offer.key} className="flex gap-2">
                  <AiFillCheckCircle />
                  <h2 className="-mt-1">{offer.name}</h2>
                </div>
              ))}
            </div>
            <motion.div
              className="w-full flex justify-center"
              whileHover={{ scale: 1.2 }}
            >
              {/* <WhiteButton
                label="Enroll Now"
                link="/login"
                fontSize="text-[20px]"
              /> */}
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full p-5">{/* <Carosel /> */}</div>
      </div>
    </section>
  );
}

export default Features;
