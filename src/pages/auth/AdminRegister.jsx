import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import InputText from "../../components/form/textfield/Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { registerAdmin } from "../api/registerAdmin";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/images/admin.png";
import { motion } from "framer-motion";

const AdminRegister = () => {
  useEffect(() => {
    document.title = "Admin Register";
  }, []);
  const { mutate, isLoading, data } = useMutation(registerAdmin);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      mutate({
        user_employee_id: values.employeeId,
        user_name: values.username,
        user_password: values.password,
        user_email: values.email,
        user_first_name: values.firstname,
        user_middle_name: values.middlename,
        user_last_name: values.lastname,
        user_department: values.department,
      });
    } catch (error) {
      // Throw an error to display it in the mutation's status
      console.log(error);
    }
  };
  useEffect(() => {
    if (data) {
      toast.info(data.message);
      navigate("/admin-login");
    }
  }, [data, navigate]);

  const validationSchema = Yup.object({
    employeeId: Yup.number().required("Employee ID is required *"),
    username: Yup.string().required("Username is required *"),
    password: Yup.string().required("Password is required *"),
    email: Yup.string()
      .email("Invalid email format *")
      .required("Email is required *"),
    firstname: Yup.string().required("Firstname is required *"),
    middlename: Yup.string().required("Middlename is required *"),
    lastname: Yup.string().required("Lastname is required *"),
    department: Yup.string().required("Department is required *"),
  });
  return (
    <>
      <div className=" min-h-screen  relative ">
        <div className=" w-full h-full top-0 object-fit z-[-1] opacity-10 absolute">
          <img src={heroBg} alt="" className="w-full h-full object-fit " />
        </div>
        <div className="absolute top-0 w-full h-full bg-primary mix-blend-overlay z-[-1]"></div>

        <Formik
          initialValues={{
            employeeId: "",
            username: "",
            password: "",
            email: "",
            firstname: "",
            middlename: "",
            lastname: "",
            department: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, errors }) => (
            <Form className="flex flex-grow justify-center p-4 md:p-16">
              <motion.div
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-wrap flex   overflow-hidden"
              >
                <div className="h-[530px] w-full md:w-[400px] bg-gray-100 rounded-l-md">
                  <h1 className="text-3xl pl-[1.875rem] mt-8 mb-[26px] text-fuchsia-900 flex gap-2">
                    <span className="hidden sm:hidden md:block lg:block">
                      Employee
                    </span>
                    Registration
                  </h1>
                  <div className="pl-4">
                    <hr />
                  </div>
                  <ToastContainer />
                  <div className="mt-4">
                    <div className="p-3 px-8">
                      <Field
                        as={InputText}
                        label="Employee ID"
                        type="number"
                        name="employeeId"
                        error={!!errors.employeeId}
                      />
                      <ErrorMessage
                        name="employeeId"
                        component="div"
                        className="text-red-600 text-sm font-medium"
                      />
                    </div>
                    <div className="p-3 px-8">
                      <Field
                        as={InputText}
                        label="Username"
                        type="text"
                        name="username"
                        error={!!errors.username}
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red-600 text-sm font-medium"
                      />
                    </div>
                    <div className="p-3 px-8">
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
                        className="text-red-600 text-sm font-medium"
                      />
                    </div>
                    <div className="p-3 px-8">
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
                        className="text-red-600 text-sm font-medium"
                      />
                    </div>
                  </div>
                  <div className="pl-4">
                    <hr />
                  </div>
                </div>
                <div className="h-[530px] w-full md:w-[400px] rounded-r-md bg-gray-100">
                  <div className="flex justify-center p-4 mb-[62px]"></div>
                  <div className="pr-4">
                    <hr />
                  </div>
                  <div className="mt-4">
                    <div className="p-3 px-8">
                      <Field
                        as={InputText}
                        label="First Name"
                        type="text"
                        name="firstname"
                        error={!!errors.firstname}
                      />
                      <ErrorMessage
                        name="firstname"
                        component="div"
                        className="text-red-600 text-sm font-medium"
                      />
                    </div>
                    <div className="p-3 px-8">
                      <Field
                        as={InputText}
                        label="Middle Name"
                        type="text"
                        name="middlename"
                        error={!!errors.middlename}
                      />
                      <ErrorMessage
                        name="middlename"
                        component="div"
                        className="text-red-600 text-sm font-medium"
                      />
                    </div>
                    <div className="p-3 px-8">
                      <Field
                        as={InputText}
                        label="Last Name"
                        type="text"
                        name="lastname"
                        error={!!errors.lastname}
                      />
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="text-red-600 text-sm font-medium"
                      />
                    </div>
                    <div className="p-3 px-8">
                      <Field
                        as={InputText}
                        label="Department"
                        type="text"
                        name="department"
                        error={!!errors.department}
                      />
                      <ErrorMessage
                        name="department"
                        component="div"
                        className="text-red-600 text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="pr-4 mb-5">
                    <hr />
                  </div>

                  <div className="px-[2.5rem] duration-200">
                    {isValid && (
                      <button
                        className="bg-[#833AB4] hover:shadow-md text-white font-bold capitalize py-2 w-full rounded-md"
                        disabled={isLoading}
                        type="submit"
                      >
                        {isLoading ? "Loading..." : "Register"}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AdminRegister;
