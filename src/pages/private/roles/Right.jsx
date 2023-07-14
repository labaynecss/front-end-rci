import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';
export const RightComponent = ({ data }) => {
  const getCredLinkPath = (cred_id) => {
    switch (cred_id) {
      case 101:
        return '/private/admin-registration';
      case 102:
        return '/admin-setup';
      case 103:
        return '/admin-ched';
      case 104:
        return '/admin-shs';
      case 105:
        return '/private/admin-dashboard';
      default:
        return '';
    }
  };
  const links = data.cred_roles.map((cred_role, index) => {
    const cred_id = data.cred_id[index];
    const linkPath = getCredLinkPath(cred_id);

    return (
      <Link to={linkPath} key={cred_id}>
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ duration: 0.2 }}
          className="h-[85px] w-[95px] bg-fuchsia-700 rounded-md flex flex-col items-center pt-5">
          <AdminPanelSettingsIcon
            sx={{ fontSize: 30 }}
            className="text-fuchsia-400"
          />
          <h1 className="font-semibold text-[12px] text-fuchsia-200">
            {cred_role}
          </h1>
        </motion.div>
      </Link>
    );
  });

  return (
    <>
      <motion.div className="h-[550px] w-[35%] bg-white rounded-r-xl">
        {links.length > 0 ? (
          <div className="flex flex-col pb-4 p-10">
            <h2 className="text-left gap-1 font-bold text-xl">
              Select Dashboard
            </h2>
            <h1 className="text-left text-slate-400 text-base">
              Lor ipsum dolor sit, amet consectetur
            </h1>
            <div className="items-center justify-center flex md:pt-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {links}
              </div>
            </div>
          </div>
        ) : (
          <div className=" inset-0 flex items-center p-10 ">
            <h1 className="text-lg font-semibold justify-center">
              {' '}
              No Roles available. Please wait for the admin to accept your
              roles.
            </h1>
          </div>
        )}
      </motion.div>
    </>
  );
};
