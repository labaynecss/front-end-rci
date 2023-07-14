import React, { useState } from "react";
import { navLinks } from "../data";
import { motion } from "framer-motion";
import useToggle from "../hooks/useToggle";
import { useNavigate } from "react-router-dom";
import ContainedButton from "./buttons/ContainedButton";

function NavBar(props) {
  const { onClick } = props;
  const { value, toggleValue } = useToggle(false);
  const [active, setActive] = useState("");

  const navigate = useNavigate();

  return (
    <nav className="relative w-full p-5 text-[#dddee0] text-[15px] flex justify-center ">
      <div className="flex items-center justify-between   w-[85%] rounded-xl   ">
        <img
          src="https://richwellcolleges.com/wp-content/uploads/2022/09/logp.png"
          alt=""
          id="logo"
          width="50px"
        />

        <ul className="hidden space-x-7 font-bold md:flex">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                active === navLink.title ? "text-secondary" : ""
              }  font-medium cursor-pointer underlineHover`}
              onClick={() => setActive(navLink.title)}
            >
              <a
                key={navLink.id}
                onClick={onClick}
                href={`#${navLink.id}`}
                className={`${
                  active === navLink.title ? "active" : ""
                } tracking-widest hover:text-secondary  `}
              >
                {navLink.title}
              </a>
            </li>
          ))}
          {/* <a href="" className="underlineHover hover:text-primary ">
            LOGIN
          </a> */}
          <ContainedButton
            label="Apply Now"
            bgColor="#E8AA42"
            link="/applyNow"
          />
        </ul>
        {/* <div className="gap-4 flex items-center"></div> */}
        <button
          id="menu-btn"
          className="z-50 block md:hidden focus:outline-none hamburger"
          onClick={toggleValue}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div
        id="menu"
        className={`${
          value == true ? "flex" : "hidden"
        } fixed md:hidden inset-0 z-20 flex-col bg-red-200 items-center self-end w-full px-6 py-1 pt-24 pb-4 tracking-widest text-black uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
      >
        <div className="w-full py-3 text-center">
          <a
            href="#features"
            className="block hover:text-softRed"
            onClick={toggleValue}
          >
            Features
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#download" className="block hover:text-softRed">
            Download
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#faq" className="block hover:text-softRed">
            FAQ
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#" className="block hover:text-softRed">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
