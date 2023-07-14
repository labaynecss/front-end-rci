import React, { useState } from 'react';
import { sections } from '../data';

export const Accordio = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="w-full mx-auto ">
      {sections.map((section, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleAccordion(index)}
            type="button"
            className="flex justify-between items-center  w-full h-16 py-2 px-2 text-primary font-medium text-left border-purple-800 border-lg rounded-lg shadow-md">
            <span>{section.title} </span>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="border border-purple-800 bg-gray-900  w-full h-16 mb-3  px-2 py-2 flex items-center ">
              <p className="w-full ">{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
