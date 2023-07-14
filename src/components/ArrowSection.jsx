import React from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';

export const ArrowSection = () => {
  return (
    <section className=" flex  items-center justify-center bg-gray-200 rounded-full shadow-md">
      <a href="#about">
        <RxDoubleArrowDown size={30} color="#6699CC" />
      </a>
    </section>
  );
};
