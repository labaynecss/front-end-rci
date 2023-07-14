import React, { useState } from "react";
// import AddTaskIcon from "@mui/icons-material/AddTask";
import { getsAllbooks } from "../api/studentInfo";
import { useQuery } from "@tanstack/react-query";
import Table from "../../components/table/Table";
// import { Input } from "@mui/material";

function AddBooks() {
  const { data, isLoading, isError, error } = useQuery(["books"], getsAllbooks);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const columns = [
    { id: "book_code", label: "Book Code", width: 150, align: "center" },
    {
      id: "book_description",
      label: "Book Description",
      width: 150,
      align: "center",
    },
    { id: "book_cost", label: "Book Cost", width: 150, align: "center" },
    { id: "course_code", label: "Course Code", width: 150, align: "center" },
    {
      id: "school_year_code",
      label: "School Year Code",
      width: 150,
      align: "center",
    },
    { id: "year_level", label: "Year Level", width: 150, align: "center" },
    { id: "sem_no", label: "Semester Number", width: 150, align: "center" },
    {
      id: "",
      label: "Change",
      minWidth: 100,
      align: "center",
    },
  ];

  const rows = data || [];

  console.log("data", rows);

  return (
    <div className="h-full w-full">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <Table columns={columns} rows={rows} />
      )}
    </div>
  );
}

export default AddBooks;
