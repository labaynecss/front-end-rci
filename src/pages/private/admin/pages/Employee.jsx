import React, { useEffect, useState } from "react";
import { getallusers } from "../../../api/rolesAdmin";
import { useQuery } from "@tanstack/react-query";
import StickyHeadTable from "../../components/table/StickyHeadTable";
import AddRoles from "./AddRoles";

const Employee = () => {
  useEffect(() => {
    document.title = "Employee";
  }, []);
  const { data, isLoading, isError, error } = useQuery(
    ["getallemployees"],
    getallusers
  );

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const columns = [
    { id: "user_employee_id", label: "Employee ID", minWidth: 170 },
    { id: "user_name", label: "Name", minWidth: 170 },
    { id: "user_email", label: "Email", minWidth: 170 },
    { id: "user_department", label: "Department", minWidth: 170 },
    {
      id: "user_roles",
      label: "Roles",
      minWidth: 100,
      align: "center",
    },
  ];

  const rows = data || [];

  console.log("data", rows);

  return (
    <>
      <div className="w-full h-full rounded-lg shadow-lg bluring  ">
        <StickyHeadTable columns={columns} rows={rows} onClick={handleClick} />
      </div>
      {showModal && <AddRoles onClose={closeModal} />}
    </>
  );
};

export default Employee;
