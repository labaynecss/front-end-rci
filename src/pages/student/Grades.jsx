import React, { useEffect } from "react";

function Grades() {
  useEffect(() => {
    document.title = "Grades";
  }, []);
  return (
    <div className=" w-full flex justify-center">
      <table className="capitalize h-full w-fit">
        <thead className="text-center">
          <tr className=" outline">
            <th className="px-2 py-1">Grade_id</th>
            <th className="px-2 py-1">grade</th>
            <th className="px-2 py-1 inline-grid">grade_classification</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className=" capitalize">
            <td className="px-2 py-1">none</td>
            <td className="px-2 py-1">none</td>
            <td className="px-2 py-1">none</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Grades;
