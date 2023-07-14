import React from 'react';
import { ArrowSection } from './ArrowSection';

import { inViewhandler } from './animationHandler';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import {
  AiOutlineFile,
  AiFillLinkedin,
  AiFillGithub,
  AiFillContacts,
} from 'react-icons/ai';

export const Hero = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inView) => inViewhandler(inView, animation)}>
      <section
        id="home"
        className="h-screen bg-white flex items-center bubbles w-full flex-col  ">
        <div className="bubble-container ">
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
        </div>
        <div className="container mx-auto h-screen flex justify-center ">
          <motion.div
            className="context-wrapper flex items-center "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={animation}>
            <div className="flex pt-[5rem]">
              <div className="flex flex-col items-center lg:item-center text-lg ">
                <div className="text-content text-center  ">
                  <p className="capitalize text-sm text-gray-700 ">
                    LET'S BUILD TOGETHER
                  </p>
                  <h1 className="py-4 text-6xl text-gray-700 text-bold">
                    Hi, I'm <span className="text-[#6699CC] ">Carl</span>
                  </h1>
                  <h1 className="pb-4  text-6xl text-center  text-gray-700 ">
                    A React Developer
                  </h1>
                  <p className="capitalize text-gray-700 pb-3 text-sm">
                    Specialized in building your exceptional web designs
                  </p>

                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4 px-1 ">
                    <a href="">
                      <div className="h-16 w-16 rounded-full hover:pointer-up duration-200 shadow-lg p-6">
                        <AiFillLinkedin />
                      </div>
                    </a>
                    <a href="">
                      <div className="h-16 w-16 rounded-full hover:pointer-up duration-200 shadow-lg p-6">
                        <AiFillGithub />
                      </div>
                    </a>
                    <a href="#contact">
                      <div className="h-16 w-16 rounded-full hover:pointer-up duration-200 shadow-lg p-6">
                        <AiFillContacts />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://docs.google.com/document/d/1JtYVUJXcqUsdNJVmJJcOdFuXqXJJTZrH/edit?usp=sharing&ouid=108840990101263968347&rtpof=true&sd=true">
                      <div className="hh-16 w-16 rounded-full hover:pointer-up duration-200 shadow-lg p-6">
                        <AiOutlineFile />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="  flex items-center justify center">
          <ArrowSection />
        </div>
      </section>
    </InView>
  );
};
