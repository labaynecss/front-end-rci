import React from "react";
import Hero from "./components/Hero";
import NewStudents from "./components/NewStudents";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Courses from "./components/Courses";

const index = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <div className=" p-6">
        <div className="bg-white mt-[-9rem] rounded-2xl shadow-xl p-10  bgs">
          <NewStudents />
        </div>
      </div>
      <Courses />
      <div className="flex justify-center items-center h-screen "></div>
      <Footer />
    </div>
  );
};

export default index;
