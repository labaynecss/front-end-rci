import React, { useState } from 'react';
import { listsubject } from '../../../api/rolesAdmin';
import { useQuery } from '@tanstack/react-query';
import MUITable from '../../../../components/table/Table';
import ContainedButton from '../../../../components/buttons/ContainedButton';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CreateSubject from './CreateSubject';

const Subject = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, isError, error } = useQuery(
    ['listofsubjects'],
    listsubject,
  );

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const columns = [
    { id: 'CURRICULUM_CODE', label: 'Curriculum Code', minWidth: 150 },
    { id: 'subject_id', label: 'Subject ID', minWidth: 150 },
    { id: 'subject_name', label: 'Subject Name', minWidth: 150 },
    { id: 'units', label: 'Units', minWidth: 150 },
    { id: 'system_code', label: 'System Code', minWidth: 150 },
    { id: 'prereq_id', label: 'Pre-req ID', minWidth: 170 },
    { id: 'date_time', label: 'Date', minWidth: 150 },
    {
      id: 'action',
      label: 'Action',
      minWidth: 100,
      align: 'center',
    },
  ];

  const rows = data || [];

  console.log('newdata', data);
  return (
    <>
      <div className="w-full md:w-[1080px]   h-full rounded-lg ">
        <div className=" flex gap-4 py-4 ">
          <h1 className="text-4xl font-bold">
            {' '}
            List of Subjects per Course/Year
          </h1>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }}>
            <ContainedButton label="+ Add" onClick={handleClick} />
          </motion.div>
        </div>
        <MUITable columns={columns} rows={rows}></MUITable>
        {showModal && <CreateSubject onClick={closeModal} />}
      </div>
    </>
  );
};

export default Subject;
