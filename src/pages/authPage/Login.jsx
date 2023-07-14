import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/admin.png";
import Input from "../../components/form/textfield/Input";
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const [emailAddress, setEmailAddress] = useState("");
  const [studentId, setStudentId] = useState("");

  const { postData, data, error } = useFetch(
    "https://richwellcolleges.edu.ph/api/loginStudent.php",
    "POST"
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    postData({
      emailAddress: emailAddress,
      studentId: studentId,
    });
  };

  useEffect(() => {
    console.log(data);
    let saveStorage;
    const currentAccessStorage = localStorage.getItem("student_token");
    if (typeof currentAccessStorage == "string") {
      saveStorage = currentAccessStorage;
      if (saveStorage) {
        navigate("/studentportal");
      }
    } else if (data) {
      navigate("/studentportal");
      localStorage.setItem("student_token", data.student_token);
      localStorage.setItem("refresh_token", data.refresh_token);
    }
  }, [data]);
  return (
    <>
      <div className="relative h-screen justify-center items-center flex flex-col ">
        <div className=" w-full h-full top-0 object-fit z-[-1] opacity-10 absolute">
          <img src={heroBg} alt="" className="w-full h-full object-fit " />
        </div>
        <div className="absolute top-0 w-full h-full bg-primary mix-blend-overlay z-[-1]"></div>
        <motion.div
          className=" bg-gray-100 w-[280px]  h-[460px] rounded-md  shadow-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-center mb-3 mt-2">
            <h6 className="text-sm font-bold">Sign in with</h6>
          </div>
          <div className=" text-center space-x-2  capitalize">
            <button className="bg-white hover:shadow-md text-primary font-normal py-2 px-2 rounded-full ">
              <img src={google} alt="icon" className="w-8" />
            </button>
            <button className=" bg-white hover:shadow-md text-primary font-normal py-2 px-2  rounded-full">
              <img src={facebook} alt="icon" className="w-8" color="39569c" />
            </button>
            <hr className="mt-6 border-b-1 bg-gray-800" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-center mt-2 text-sm text-gray-500 font-bold">
              Or sign in with credentials
            </div>
            <form onSubmit={handleSubmit} className="register form">
              <div className="relative w-full mb-3 mt-2 ">
                <Input
                  onChange={(e) => setEmailAddress(e.target.value)}
                  label="Email"
                  type="email"
                  variant="filled"
                  value={emailAddress}
                />
              </div>
              <div className="relative w-full mb-3">
                <Input
                  onChange={(e) => setStudentId(e.target.value)}
                  label="Password"
                  type="password"
                  variant="filled"
                  value={studentId}
                />
              </div>
              <div>
                <label
                  htmlFor="checkbox"
                  className="inline-flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="border-0 rounded text-gray-700 ml-1  w-5 h-5 ease-linear transition-all duration-15"
                  />
                  <span className=" text-sm font-semibold text-gray-700  ml-2 ">
                    Log me out after
                  </span>
                  <span className=" text-sm font-semibold text-gray-700 ml-[11rem]">
                    Forgot Password?
                  </span>
                </label>
              </div>
              <div className="text-center mt-3">
                <button className="bg-[#833AB4] hover:shadow-md text-white font-bold capitalize py-2 px-4 w-full rounded">
                  SIGN IN
                </button>
              </div>
              <div className="text-center mt-3 font-bold text-sm">
                <h5
                  className=" text-gray-500
                "
                >
                  New to Richwell?{" "}
                  <span className="text-gray-400">
                    <Link to="/register">Sign up</Link>
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
