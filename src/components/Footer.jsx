import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8  text-[20px]">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="" className="flex items-center mb-4 sm:mb-0">
          <img
            src="https://richwellcolleges.com/wp-content/uploads/2022/09/logp.png"
            className="h-8 mr-3"
            alt=""
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Richwell Colleges INC
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6  text-gray-500 sm:mb-0 ">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <span className="block  text-gray-500 sm:text-center ">
        © 2019-2023{" "}
        <a href="#" className="hover:underline">
          Richwell College
        </a>
      </span>
    </footer>
  );
}

export default Footer;
