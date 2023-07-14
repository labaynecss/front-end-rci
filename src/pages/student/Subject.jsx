import React, { useEffect } from "react";
import { getsAllSubjects } from "../api/studentInfo";
import { useQuery } from "@tanstack/react-query";
import Table from "../../components/table/Table";
function Subject() {
  useEffect(() => {
    document.title = "Subject";
  }, []);
  const { data, isLoading, isError, error } = useQuery(
    ["Subjects"],
    getsAllSubjects
  );
  const columns = [
    { id: "CURRICULUM_CODE", label: "CURRICULUM CODE", width: 150 },
    { id: "system_code", label: "System Code", width: 150 },
    { id: "subject_id", label: "Subject Id", width: 150 },
    { id: "subject_code", label: "Subject Code", width: 150 },
    { id: "subject_name", label: "Subject Name", width: 150 },
    { id: "units", label: "Unit", width: 150 },
    { id: "prereq_id", label: "Prereq Id", width: 150 },
    { id: "cost_per_unit", label: "Subject Cost", width: 150 },
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

export default Subject;
