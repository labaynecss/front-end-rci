import React from "react";

function StudentInfo() {
  return (
    <div>
      <div className="h-screen w-full bg-slate-500">
        <div className="w-auto bg-red-400 flex justify-center ">
          <table className=" outline">
            <thead className="bg-white outline">
              <tr className=" ">
                <th className="py-4">course</th>
                <th className="px-6 py-4">last_name</th>
                <th className="px-6 py-4">first_name</th>
                <th className="px-6 py-4">middle_name</th>
                <th className="px-6 py-4">extension_name</th>
                <th className="px-6 py-4">gender</th>
                <th className="px-6 py-4">birthday</th>
                <th className="px-6 py-4">Contact_no.</th>
              </tr>{" "}
            </thead>
            <tbody className="bg-white outline ">
              <tr className="">
                <th className="px-6 py-4">BSIS</th>
                <td className="px-6 py-4">CLACIO</td>
                <td className="px-6 py-4">CHRISTIAN</td>
                <td className="px-6 py-4">TESORERO</td>
                <td className="px-6 py-4">NONE</td>
                <td className="px-6 py-4">MALE</td>
                <td className="px-6 py-4">AUGUST 01</td>
                <td className="px-6 py-4">092245612378</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
