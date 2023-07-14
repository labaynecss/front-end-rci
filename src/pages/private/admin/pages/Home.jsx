import React, { useEffect } from "react";
import BadgeIcon from "@mui/icons-material/Badge";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { admin } from "../../../api/rolesAdmin";
import { useQuery } from "@tanstack/react-query";
import CustomPieChart from "../../components/custom/CustomPieChart";
import CustomLineChart from "../../components/custom/CustomLineChart";
import ReusableVirtualizedTable from "../../components/table/ReusableVirtualizedTable";
import { TableCell, TableRow } from "@mui/material";

const Home = () => {
  useEffect(() => {
    document.title = "Administration";
  }, []);
  const {
    data: dashboard,
    isLoading,
    isError,
    error,
  } = useQuery(["admin"], admin);

  // Check if data is still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if there's an error
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Check if dashboard data is available
  if (!dashboard) {
    return <div>No data available</div>;
  }

  console.log("respose", dashboard);

  const pieData1 = [{ id: "employees", value: dashboard.employees_total }];

  const pieData2 = [{ id: "enrollees", value: dashboard.enrollees_total }];

  const pieData3 = [{ id: "sections", value: dashboard.section_total }];

  const pieData4 = [{ id: "queue", value: dashboard.queque_total }];

  const totalEmployees = 100;

  function renderHeader() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || false ? "right" : "left"}
            style={{ width: column.width }}
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  function renderRow(index, row) {
    return (
      <>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? "right" : "left"}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </>
    );
  }

  const columns = [
    {
      width: 200,
      label: "Student ID",
      dataKey: "student_id",
      numeric: false,
    },
    { width: 200, label: "Last Name", dataKey: "last_name", numeric: false },
    {
      width: 200,
      label: "First Name",
      dataKey: "first_name",
      numeric: false,
    },
    {
      width: 200,
      label: "Middle Name",
      dataKey: "middle_name",
      numeric: false,
    },
    {
      width: 200,
      label: "Date and Time",
      dataKey: "date_time",
      numeric: false,
    },
  ];

  return (
    <>
      {dashboard && (
        <div className="grid md:grid-cols-4 sm:grid-cols-1  gap-2 ">
          <div className="w-full h-[150px] rounded-lg shadow-md bluring ">
            <div className="flex justify-between px-4 py-4">
              <div className=" flex-col items-center p-2   ">
                <BadgeIcon fontSize="medium" className="text-gray-200  mb-2" />
                <h1 className="text-sm text-gray-200">
                  {dashboard.employees_total}
                </h1>
                <h1 className="text-sm text-gray-200">Employee </h1>
              </div>
              <div className="flex-col items-center  ">
                <CustomPieChart data={pieData1} className="flex-col" />
                <h1 className="text-sm text-gray-200 ">
                  {((dashboard.employees_total / totalEmployees) * 100).toFixed(
                    0
                  )}
                  %
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-[150px] rounded-lg shadow-md bluring ">
            <div className="flex justify-between px-4 py-4">
              <div className=" flex-col items-center p-2   ">
                <PersonAddAlt1Icon
                  fontSize="medium"
                  className="text-gray-200  mb-2"
                />
                <h1 className="text-sm text-gray-200">
                  {dashboard.enrollees_total}
                </h1>
                <h1 className="text-sm text-gray-200">Enrolled </h1>
              </div>
              <div className="flex-col items-center   ">
                <CustomPieChart data={pieData2} className="flex-col " />
                <h1 className="text-sm text-gray-200 ">
                  {((dashboard.enrollees_total / totalEmployees) * 100).toFixed(
                    0
                  )}
                  %
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-[150px] rounded-lg shadow-md bluring ">
            <div className="flex justify-between px-4 py-4">
              <div className=" flex-col items-center p-2   ">
                <GroupAddIcon
                  fontSize="medium"
                  className="text-gray-200  mb-2"
                />
                <h1 className="text-sm text-gray-200">
                  {dashboard.section_total}
                </h1>
                <h1 className="text-sm text-gray-200">Sections </h1>
              </div>
              <div className="flex-col items-center  ">
                <CustomPieChart data={pieData3} className="flex-col" />
                <h1 className="text-sm text-gray-200 ">
                  {((dashboard.section_total / totalEmployees) * 100).toFixed(
                    0
                  )}
                  %
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-[150px] rounded-lg shadow-md bluring ">
            <div className="flex justify-between px-4 py-4">
              <div className=" flex-col items-center p-2   ">
                <TrafficIcon
                  fontSize="medium"
                  className="text-gray-200  mb-2"
                />
                <h1 className="text-sm text-gray-200">
                  {dashboard.queque_total}
                </h1>
                <h1 className="text-sm text-gray-200">Queque pending</h1>
              </div>
              <div className="flex-col items-center  ">
                <CustomPieChart data={pieData4} className="flex-col" />
                <h1 className="text-sm text-gray-200 ">
                  {((dashboard.queque_total / totalEmployees) * 100).toFixed(0)}
                  %
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-2 pt-2 ">
        <div className="col-span-2 w-70 h-[350px] rounded-lg shadow-md bluring">
          <CustomLineChart className="w-full" />
        </div>
        <div className="col-span-1 w-30 h-[350px] rounded-lg shadow-md bluring">
          <ReusableVirtualizedTable
            data={dashboard.students} // Wrap student object in an array since data expects an array of objects
            columns={columns}
            renderHeader={renderHeader}
            renderRow={renderRow}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
