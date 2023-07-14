import React from 'react';
import { social } from '../data';

export const Socials = () => {
  return (
    <div className="">
      <ul className="flex space-x-6">
        {social.map((items, index) => {
          return (
            <li
              className={`flex flex-col items-center ${
                items.color ? items.color : 'text-orange-100'
              } ${
                items.colorHover ? items.colorHover : 'hover: text-red-500'
              } `}
              key={index}>
              <a className="text-base" href={items.href}>
                {items.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
