import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useQuery } from "@tanstack/react-query";
import { linecharts } from "../../../api/rolesAdmin";
import { Loading } from "../../../../components/loading/Loading";

const LineChart = () => {
  const { data, isLoading, isError, error } = useQuery(["monthly"], linecharts);

  if (isLoading) {
    return (
      <h2>
        <Loading />
      </h2>
    );
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  console.log(data);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const chartData = data.map((item, index) => {
    const month = Object.keys(item)[0];
    const value = Object.values(item)[0];
    const formattedMonth = monthNames[index]; // Retrieve the month name from the array
    return { x: formattedMonth, y: value };
  });
  return (
    <>
      <ResponsiveLine
        data={[{ id: "enrolled", data: chartData }]}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendOffset: 36,
          legendPosition: "middle",
          format: (value) => value,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "purples" }}
        pointSize={8}
        pointColor={{ theme: "grid.line.stroke" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
      />
    </>
  );
};

export default LineChart;
