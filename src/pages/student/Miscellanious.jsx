import React, { useEffect } from "react";
import { getstudentMiscellaneous } from "../api/studentInfo";
import { useQuery } from "@tanstack/react-query";
import Table from "../../components/table/Table";

function Miscellaneous() {
  useEffect(() => {
    document.title = "Miscellaneous";
  }, []);
  const { data, isLoading, isError, error } = useQuery(
    ["Miscellaneous"],
    getstudentMiscellaneous
  );
  const columns = [
    { id: "misc_code", label: "Misc Code", width: 150 },
    { id: "misc_description", label: "Misc Description", width: 200 },
    { id: "misc_cost", label: "Misc Cost", width: 150 },
    { id: "course_code", label: "Course Code", width: 150 },
    { id: "school_year_code", label: "School Year Code", width: 150 },
    { id: "year_level", label: "Year Level", width: 150 },
    { id: "sem_no", label: "Sem Number", width: 150 },
  ];

  const rows = data || [];

  console.log("data", rows);

  return (
    <div className=" h-auto w-full">
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

export default Miscellaneous;
