import React from 'react';
import { NavBar } from './NavBar';
import { useState } from 'react';
import logo from '../assets/img/logo.png';
import name from '../assets/img/name.png';

export const Header = () => {
  const [navbar, setNavBar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener('scroll', changeBg);
  return (
    <header className={navbar ? 'header active' : 'header'}>
      <div className="container mx-auto h-auto flex  pr-2 items-center justify-center lg:justify-between">
        <img
          src={name}
          className="   w-20 hidden md:block lg:block shadow-[0_4px_3px_-4px_#6699CC]"
        />
        <img src={logo} className="w-12 pr-3 lg:hidden md:hidden sm:block" />
        <NavBar />
      </div>
    </header>
  );
};
