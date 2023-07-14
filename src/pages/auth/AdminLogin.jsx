import InputText from "../../components/form/textfield/Input";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { loginAdmin } from "../api/loginAdmin";
import { useMutation } from "@tanstack/react-query";
import useLoginCredZustand from "../../store/useLoginCredZustand";
import { useQueryRefreshLogin } from "../../store/useQueryRefreshToken";
import ModalFailure from "../../components/modal/ModalFailure";
import { Spinner } from "../../components/loading/Spinner";
import heroBg from "../../assets/images/admin.png";

const AdminLogin = () => {
  useEffect(() => {
    document.title = "Admin Login";
  }, []);
  const navigate = useNavigate();
  const { data, isLoading, mutate, isError } = useMutation(loginAdmin);
  const [invalidAuth, setInvalidAuth] = useState(false);

  const { isAuthenticated, toggleAuthentication, toggleAuthToTrue } =
    useLoginCredZustand();
  const { data: checkData } = useQueryRefreshLogin();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      mutate({
        id: values.id,
        user_email: values.email,
        password: values.password,
      });
    } catch (error) {
      console.log(error);
    }

    setSubmitting(false);
  };

  useEffect(() => {
    if (data) {
      if (data.message !== "invalid authentication") {
        navigate("/private/roles");
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        toggleAuthentication();
      }
    } else {
      console.log("Invalid login credentials");
    }
  }, [data]);

  useEffect(() => {
    if (checkData) {
      if (!checkData.message) {
        localStorage.setItem("access_token", checkData.access_token);
        localStorage.setItem("refresh_token", checkData.refresh_token);
        toggleAuthToTrue();
        navigate("/private/roles");
      }
    } else {
      console.log("Global auth not set");
    }
  }, [checkData]);

  useEffect(() => {
    if (data) {
      if (data.message === "invalid authentication") {
        setInvalidAuth(true);
      }
    }
  }, [data]);

  const closeModal = () => {
    setInvalidAuth(false);
  };

  const validationSchema = Yup.object().shape({
    id: Yup.string().required("Employee ID is required *"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required *"),
    password: Yup.string().required("Password is required *"),
  });

  return (
    <div className="min-h-screen">
      <div className=" w-full h-full top-0 object-fit z-[-1] opacity-10 absolute">
        <img src={heroBg} alt="" className="w-full h-full object-fit " />
      </div>
      <div className="absolute top-0 w-full h-full bg-primary mix-blend-overlay z-[-1]"></div>
      {invalidAuth && (
        <ModalFailure
          header={<h1 className="font-bold text-4xl text-gray-600"> Ooops!</h1>}
          message={"Something went wrong. Authentication Failed."}
          button={"Try Again"}
          closeModal={closeModal}
        />
      )}
      <div className="flex justify-center">
        {isError && <p className="text-red-600">Login failed*</p>}
        {isLoading ? (
          <Spinner />
        ) : (
          <motion.div
            className="w-[375px] h-[485px] rounded-lg shadow-lg mt-[6rem] bg-gray-100 "
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl text-center mt-6">Employee Portal</h1>
            <div className="flex justify-center">
              <img
                src="https://richwellcolleges.com/wp-content/uploads/2022/09/logp.png"
                alt=""
                className="h-[50px] w-[50px] rounded-full shadow-lg mb-6"
              />
            </div>
            <Formik
              initialValues={{
                id: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, isValid }) => (
                <Form className="admin login form gap-4">
                  <div className="px-4">
                    <Field
                      as={InputText}
                      label="Employee ID"
                      type="text"
                      name="id"
                      error={!!errors.id}
                    />
                    <ErrorMessage
                      name="id"
                      component="div"
                      className="text-rose-800 duration-200 text-sm text-center relative -top-[80px]"
                    />
                  </div>
                  <div className="py-4 px-4">
                    <Field
                      as={InputText}
                      label="Email"
                      type="email"
                      name="email"
                      error={!!errors.email}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-rose-800 duration-200 text-sm text-center relative -top-[75px]"
                    />
                  </div>
                  <div className="px-4 mb-1">
                    <Field
                      as={InputText}
                      label="Password"
                      type="password"
                      name="password"
                      error={!!errors.password}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-rose-800 duration-200 text-sm text-center relative -top-[80px]"
                    />
                  </div>

                  <label
                    htmlFor="checkbox"
                    className="inline-flex items-center justify-between cursor-pointer ml-4 my-4"
                  >
                    <Field
                      type="checkbox"
                      name="rememberMe"
                      className="border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-15"
                    />
                    <span className="text-sm font-semibold text-gray-700 ml-1">
                      Log me out after
                    </span>
                  </label>

                  <div className="text-center py-2 px-4">
                    {isValid && (
                      <button
                        className="bg-purple-800 hover:shadow-md  text-white font-bold capitalize py-2 px-4 w-full rounded p-4"
                        type="submit"
                      >
                        Login
                      </button>
                    )}
                  </div>
                  <h5 className=" text-gray-500   fixed left-[94px]">
                    New to Employee?
                    <span className="text-gray-500 pl-1 underline ">
                      <Link to="/admin-register">Sign up</Link>
                    </span>
                  </h5>
                </Form>
              )}
            </Formik>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
