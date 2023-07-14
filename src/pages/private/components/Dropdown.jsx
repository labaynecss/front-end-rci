import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/rolesAdmin';
import { motion } from 'framer-motion';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';

const Dropdown = () => {
  const navigate = useNavigate();
  const logoutMutation = useMutation(logout, {
    onSuccess: () => {
      // Clear the token or perform any other necessary cleanup
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      // Navigate to the login page
      navigate('/admin-login');
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <motion.div
      className=" absolute top-[6px] right-[6px] z-[9999]"
      initial={{ opacity: 0, y: '-50%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0, y: '-50%', transition: { duration: 1 } }}
      transition={{ type: 'spring', stiffness: 100, duration: 0.75 }}>
      <ul className="pt-2 rounded-md bg-gray-100 w-[120px]">
        <li className="hover:bg-slate-200 flex items-center justify-start  px-2 py-2">
          <PersonOutlineIcon className="mr-2 text-gray-500" />
          <h1 className="text-sm text-gray-500">Profile</h1>
        </li>
        <li className="hover:bg-slate-200 flex items-center justify-start  px-2 py-2">
          <TuneIcon className="mr-2 text-gray-500" />
          <h1 className="text-sm text-gray-500"> Settings</h1>
        </li>
        <li className="hover:bg-slate-200 flex items-center justify-start  px-2 py-2">
          <button onClick={handleLogout} className="flex items-center">
            <LogoutIcon className="mr-2 text-gray-500" />
            <h1 className="text-sm text-gray-500">Log out</h1>
          </button>
        </li>
      </ul>
    </motion.div>
  );
};

export default Dropdown;
