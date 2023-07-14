import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { data2, charts } from '../components/data/dashboard';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const Sidebar = ({
  isOpen,
  isExpanded,
  handleLinkClick,
  handleToggleExpand,
  linkfor,
}) => {
  return (
    <div
      className={`bg-gradient-to-b from-primary via-fuchsia-800 to-purple-800 min-h-screen z-20 fixed ${
        isOpen ? 'w-[90px]' : 'w-[250px]'
      } duration-300`}>
      <header
        className={`  h-[13%] pl-${
          isOpen ? '  h-[95px]  ' : '[90px]'
        } pt-2  flex flex-wrap justify-end  `}>
        {!isOpen && (
          <div className="flex mt-[28px] items-center mx-auto">
            <motion.img
              src="https://richwellcolleges.com/wp-content/uploads/2022/09/logp.png"
              alt=""
              className="w-[80px] h-[80px]  "
            />
          </div>
        )}

        <MenuOpenIcon
          className="text-amber-400  absolute cursor-pointer rounded-full "
          onClick={handleToggleExpand}
        />
      </header>
      <div className=" mt-14"></div>

      {linkfor === 'register' &&
        data2.map((item, index) => (
          <div className="flex flex-col ml-8 py-2 pt-4" key={index}>
            <div className=" -ml-3  text-gray-300   font-light ">
              <label htmlFor="dashboard" className="  justify-left text-xs  ">
                {item.label}
              </label>
            </div>
            <NavLink to={item.path} onClick={() => handleLinkClick(index)}>
              <div
                className={`rounded-md ${
                  isExpanded ? 'w-64' : 'w-15'
                } sm:w-20 md:w-32 lg:w-48 ${
                  !isExpanded ? 'hover:bg-amber-500' : ''
                }`}>
                <div className="flex items-center gap-4 text-sm">
                  {item.icon}
                  <span className="text-gray-200 hover:text-black text-xs font-normal">
                    {!isExpanded ? item.title : ''}
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}

      {linkfor === 'admin' &&
        charts.map((item, index) => (
          <div className="flex flex-col ml-8 py-2 pt-4" key={index}>
            <div className=" -ml-3  text-gray-300   font-light ">
              <label htmlFor="dashboard" className="  justify-left text-xs  ">
                {item.label}
              </label>
            </div>
            <NavLink to={item.path} onClick={() => handleLinkClick(index)}>
              <div
                className={`rounded-md ${
                  isExpanded ? 'w-64' : 'w-15'
                } sm:w-20 md:w-32 lg:w-48 ${
                  !isExpanded ? 'hover:bg-amber-500' : ''
                }`}>
                <div className="flex items-center gap-4 text-sm">
                  {item.icon}
                  <span className="text-gray-200 hover:text-black text-xs font-normal">
                    {!isExpanded ? item.title : ''}
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
    </div>
  );
};
