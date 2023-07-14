import React from "react";
import { Modal } from "../../components/modal/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../../../components/form/textfield/Input";
import ContainedButton from "../../../../components/buttons/ContainedButton";
import { postlistofsubject } from "../../../api/rolesAdmin";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";

const validationSchema = Yup.object().shape({
  CURRICULUM_CODE: Yup.string().required("Curriculum Code is required"),
  system_code: Yup.string().required("System Code is required"),
  subject_id: Yup.string().required("Subject ID is required"),
  subject_code: Yup.string().required("Subject Code is required"),
  subject_name: Yup.string().required("Subject Name is required"),

  school_year_code: Yup.string().required("School Year Code is required"),
  year_level: Yup.string().required("Year Level is required"),
  cost_per_unit: Yup.string().required("Cost per Unit is required"),
  sem_no: Yup.string().required("Sem No is required"),
  units: Yup.string().required("Units is required"),
  course_code: Yup.string().required("Course Code is required"),
});

const CreateSubject = ({ onClick }) => {
  const { mutate } = useMutation(postlistofsubject);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      mutate({
        curriculumCode: values.CURRICULUM_CODE,
        systemCode: values.system_code,
        subjectId: values.subject_id,
        subjectCode: values.subject_code,
        subjectName: values.subject_name,
        units: values.units,
        prereqId: values.prereq_id,
        courseCode: values.course_code,
        schoolYearCode: values.school_year_code,
        yearLevel: values.year_level,
        costPerUnit: values.cost_per_unit,
        semNo: values.sem_no,
      });
      toast.success("Subject has been Created !");
      setTimeout(() => {
        // Code to execute after the timeout
        onClick();
      }, 3000);
      setSubmitting(false);
      // Additional actions after successful mutation
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Modal onClose={onClick}>
        <div className="h-full w-full p-10 ">
          <div className="mx-20">
            <h1 className="text-3xl font-bold text-center border-b  border-primary mb-6">
              Add New Subject
            </h1>
            <Formik
              initialValues={{
                CURRICULUM_CODE: "",
                system_code: "",
                subject_id: "",
                subject_code: "",
                subject_name: "",

                school_year_code: "",
                year_level: "",
                cost_per_unit: "",
                sem_no: "",
                units: "",
                course_code: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, isSubmitting }) => (
                <Form>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <Input
                        label="Curriculum Code"
                        name="CURRICULUM_CODE"
                        value={values.CURRICULUM_CODE}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="CURRICULUM_CODE"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="Subject ID"
                        name="subject_id"
                        value={values.subject_id}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="subject_id"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="System Code"
                        name="system_code"
                        value={values.system_code}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="system_code"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="Units"
                        name="units"
                        value={values.units}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="subject_id"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="Subject Code"
                        name="subject_code"
                        value={values.subject_code}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="subject_code"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="Subject Name"
                        name="subject_name"
                        value={values.subject_name}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="subject_name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="Pre-req ID"
                        name="prereq_id"
                        value={values.prereq_id}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="prereq_id"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="School Year Code"
                        name="school_year_code"
                        value={values.school_year_code}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="school_year_code"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1 grid-cols-1">
                      <Input
                        label="Year Level"
                        name="year_level"
                        value={values.year_level}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="year_level"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="Cost per Unit"
                        name="cost_per_unit"
                        value={values.cost_per_unit}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="cost_per_unit"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="Sem No"
                        name="sem_no"
                        value={values.sem_no}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="sem_no"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        label="Course Code"
                        name="course_code"
                        value={values.course_code}
                        type="text"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="course_code"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-1 flex gap-4">
                      <ContainedButton
                        label="Save"
                        type="submit"
                        disabled={isSubmitting}
                      />
                      <ContainedButton
                        label="Cancel"
                        onClick={onClick}
                        bgColor="red"
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateSubject;
