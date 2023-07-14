import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../../../../components/form/textfield/Input';
import ContainedButton from '../../../../components/buttons/ContainedButton';
import {
  getemployeebyid,
  getcredroles,
  postcredroles,
} from '../../../api/rolesAdmin';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import MultipleSelectChip from '../../components/select/MultipleSelectChip';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddRoles = ({ onClose }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const { id } = useParams();
  const {
    data: employeeData,
    isLoading,
    isError,
    error,
  } = useQuery(['employeeId', id], () => getemployeebyid(id));
  const { data: employeeCred } = useQuery(['credroles'], getcredroles);
  const { mutate, onSuccess } = useMutation(postcredroles);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleSelectChange = (values) => {
    setSelectedValues(values);
  };

  const handleSubmit = async () => {
    try {
      const data = {
        user_employee_id: employeeData.Employee.user_employee_id,
        data: selectedValues.map((cred_id) => ({ cred_id })),
      };
      mutate(data);
      console.log(data);
      toast.success('Roles added successfully!');
      setTimeout(() => {
        // Code to execute after the timeout
        onClose();
      }, 3000);
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          className=" min-w-auto -h-auto flex flex-col items-center bg-[#FFFFEB] rounded-lg overflow-y-auto "
          animate={{ scale: [0, 1.5, 1] }}
          transition={{
            duration: 1.4,
            ease: 'easeInOut',
          }}>
          <div className="w-full h-[5vh] bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-t-lg"></div>
          <div className="w-[120px] absolute -mt-[3rem] "></div>
          <div className="text-center p-10 gap-4 ">
            <h2 className=" text-[20px] font-semibold  text-left pb-5">
              Employee Details
            </h2>
            {employeeData && (
              <div className="grid grid-cols-2 gap-4 ">
                <div className="col-span-1">
                  <Input
                    id="employeeId"
                    defaultValue={employeeData.Employee.user_employee_id}
                    label="Employee ID"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    id="username"
                    label="Username"
                    defaultValue={employeeData.Employee.user_name}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="col-span-2">
                  <Input
                    id="email"
                    label="Email"
                    defaultValue={employeeData.Employee.user_email}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="col-span-2">
                  <Input
                    id="department"
                    label="Department"
                    defaultValue={employeeData.Employee.user_department}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="col-span-2">
                  {employeeData.roles.length > 0 ? (
                    <Input
                      id="roles"
                      label="Roles"
                      defaultValue={employeeData.roles}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  ) : (
                    <div>Empty Roles</div>
                  )}
                </div>
                <div className="col-span-2">
                  <MultipleSelectChip
                    label="Select-Roles"
                    options={
                      employeeCred
                        ? employeeCred.map((cred) => cred.cred_id)
                        : []
                    }
                    value={selectedValues}
                    onChange={handleSelectChange}
                  />
                  <p>Selected Values: {selectedValues.join(', ')}</p>
                </div>
              </div>
            )}
            <div className=" pt-6 grid rounded-md col-span-2">
              <ContainedButton
                label="Save"
                bgColor="#833AB4"
                onClick={handleSubmit}
                s
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AddRoles;
