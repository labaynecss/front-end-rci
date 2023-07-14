import React, { useEffect } from "react";
import { getstudentbooks } from "../api/studentInfo";
import { useQuery } from "@tanstack/react-query";
import Table from "../../components/table/Table";

function Books() {
  useEffect(() => {
    document.title = "Books";
  }, []);
  const { data, isLoading, isError, error } = useQuery(
    ["books"],
    getstudentbooks
  );

  const columns = [
    { id: "book_code", label: "Book Code", width: 150 },
    { id: "book_description", label: "Book Description", width: 150 },
    { id: "book_cost", label: "Book Cost", width: 150 },
    { id: "course_code", label: "Course Code", width: 150 },
    { id: "school_year_code", label: "School Year Code", width: 150 },
    { id: "year_level", label: "Year Level", width: 150 },
    { id: "sem_no", label: "Semester Number", width: 150 },
  ];

  const rows = data || [];

  console.log("data", rows);

  return (
    <div className="h-auto w-full">
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

export default Books;
