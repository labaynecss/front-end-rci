import { Link } from "react-router-dom";
import React from "react";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroBg from "../../assets/images/admin.png";
import SignUpInfo from "./components/SignUpInfo";
import PersonalInfo from "./components/PersonalInfo";
import OtherInfo from "./components/OtherInfo";

export const Register = () => {
  useEffect(() => {
    document.title = "Create account";
  }, []);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send form data to the server
    try {
      const response = await fetch("http://localhost/test/formInsert.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submitted successfully
        alert("FORM SUBMITTED");
        console.log(formData);
      } else {
        // Handle error if necessary
        console.log("An error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" h-screen justify-center items-center flex flex-col   ">
        <div className=" w-full h-full top-0 object-fit z-[-1] opacity-10 absolute">
          <img src={heroBg} alt="" className="w-full h-full object-fit " />
        </div>
        <div className="absolute top-0 w-full h-full bg-primary mix-blend-overlay z-[-1]"></div>
        <motion.div
          className="w-[480px] rounded-md bg-gray-100 shadow-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className={`${page !== 0 ? "hidden" : ""}`}>
            <div className="text-center mb-3 mt-2">
              <h6 className="text-sm font-bold">Sign up with</h6>
            </div>
            <div className=" text-center space-x-2  capitalize">
              <button className="bg-white hover:shadow-md text-primary font-normal py-2 px-2 rounded-full ">
                <img src={google} alt="icon" className="w-8" />
              </button>
              <button className=" bg-white hover:shadow-md text-primary font-normal py-2 px-2  rounded-full">
                <img src={facebook} alt="icon" className="w-8" />
              </button>
              <hr className="mt-6 border-b-1 bg-gray-800" />
              <div className="text-center mt-2 text-sm font-bold   text-gray-500">
                Or sign up with credentials
              </div>
            </div>
          </div>
          <div className="text-center mt-2 text-sm font-bold   text-gray-500">
            {FormTitles[page]}
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 ">
            <form className=" register form " onSubmit={handleSubmit}>
              <div>{PageDisplay()}</div>

              <div className="flex w-full justify-between mt-2">
                <button
                  disabled={page == 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                  className={`${
                    page == 0 ? "hidden" : ""
                  }bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  type="button"
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      // alert("FORM SUBMITTED");
                      console.log(formData);
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type={page === FormTitles.length - 2 ? "submit" : "button"}
                >
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
              <div className="text-center mt-3 font-bold text-sm">
                <h5 className=" text-gray-500 ">
                  Already have an account?{" "}
                  <span className="text-gray-400">
                    <Link to="/login">Sign in</Link>
                  </span>
                </h5>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};
