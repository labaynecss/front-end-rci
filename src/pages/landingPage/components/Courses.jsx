import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from 'framer-motion';
import laptop from '../../../assets/images/laptop.png';
import IS from '../../../assets/images/IS.png';
import reactCube from '../../../assets/images/reactCube.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import bartending from '../../../assets/images/bartending.jpg';
import bpo from '../../../assets/images/bpo.jpg';
import beautycare from '../../../assets/images/beautycare.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Carosel from '../../../components/Carosel';
import { academicOfferings } from '../../../data';
import ContainedButton from '../../../components/buttons/ContainedButton';

SwiperCore.use([Autoplay]);

function Courses() {
  return (
    <>
      {academicOfferings.map((acads) => (
        <section
          key={acads.course}
          id="about"
          className="w-full flex h-screen justify-center mt-[2rem] p-5">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
              <div className="relative bg-white w-full h-screen grid place-items-center">
                <motion.div
                  className="absolute w-[200px] top-[50%] left-[50%] z-20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}>
                  <motion.img
                    src={reactCube}
                    alt=""
                    whileInView={{
                      scale: 1,
                      transition: { duration: 0.6 },
                      opacity: 1,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                  />
                </motion.div>
                <div className="flex justify-evenly w-full">
                  <div className="flex gap-1">
                    <div className=" text-center p-5">
                      <motion.div
                        className="w-[300px]"
                        whileInView={{
                          y: 0,
                          transition: { duration: 0.4 },
                          opacity: 1,
                        }}
                        initial={{ y: 100, opacity: 0.3 }}>
                        <img src={acads.img1} alt="" />
                      </motion.div>
                      <motion.h1
                        className="text-[25px] text-[#686565] -mt-10"
                        whileInView={{
                          y: 0,
                          transition: { duration: 0.4 },
                          opacity: 1,
                        }}
                        initial={{ y: 100, opacity: 0.3 }}>
                        Learn About Our
                      </motion.h1>
                      <div className="w-full flex justify-center">
                        <motion.div
                          className=" w-full "
                          whileInView={{
                            y: 0,
                            transition: { duration: 0.4 },
                            opacity: 1,
                          }}
                          initial={{ y: 100, opacity: 0.3 }}>
                          <ContainedButton
                            label={acads.course}
                            bgColor="#833AB4"
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className=" p-10 -ml-10 mt-4">
                      <motion.h1
                        className="text-[60px] uppercase tracking-[10px]"
                        whileInView={{
                          y: 0,
                          transition: { duration: 0.4 },
                          opacity: 1,
                        }}
                        initial={{ y: 100, opacity: 0.3 }}>
                        School of
                      </motion.h1>
                      <div className="w-[500px] -ml-1 -mt-10">
                        <motion.img
                          src={acads.img2}
                          alt=""
                          whileInView={{
                            y: 0,
                            transition: { duration: 0.5 },
                            opacity: 1,
                          }}
                          initial={{ y: 100, opacity: 0.3 }}
                        />
                        <motion.div
                          className="font-bold text-[50px] -mt-5 ml-3"
                          whileInView={{
                            y: 0,
                            transition: { duration: 0.4 },
                            opacity: 1,
                          }}
                          initial={{ y: 100, opacity: 0.3 }}>
                          ___
                        </motion.div>
                        <motion.h1
                          className="text-[25px] text-[#686565] -mt-4 ml-2"
                          whileInView={{
                            y: 0,
                            transition: { duration: 0.4 },
                            opacity: 1,
                          }}
                          initial={{ y: 100, opacity: 0.3 }}>
                          Decode your future.
                        </motion.h1>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="p-10 mt-[5rem] -ml-20 "
                    whileInView={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}>
                    <motion.img
                      src={laptop}
                      alt=""
                      whileInView={{ scale: 1, transition: { duration: 0.4 } }}
                      initial={{ scale: 0 }}
                    />
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="background-image h-screen object-cover rounded-xl flex justify-center items-center px-10 shadow-xl">
                <div className="w-[900px] h-[400px]">
                  <Carosel img1={bartending} img2={bpo} img3={beautycare} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      ))}
    </>
  );
}

export default Courses;
