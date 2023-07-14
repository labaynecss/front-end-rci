import React, { useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useQuery } from "@tanstack/react-query";
import { getcharts } from "../../../api/rolesAdmin";
import useLoginCredZustand from "../../../../store/useLoginCredZustand";
import { Loading } from "../../../../components/loading/Loading";

const BarChart = () => {
  useEffect(() => {
    document.title = "BarChart";
  }, []);
  const { data, isLoading, isError, error } = useQuery(["daily"], getcharts);
  const { isAuthenticated } = useLoginCredZustand();

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

  const chartData = Object.entries(data.enrollments).map(([key, value]) => ({
    id: key,
    [key]: value,
  }));

  const keys = Object.keys(data.enrollments);
  return (
    <>
      <div className="bg-gradient-to-br bluring rounded-md h-screen w-full">
        <ResponsiveBar
          data={chartData}
          keys={keys}
          indexBy="id"
          enableLabel={true}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.55}
          maxValue={50}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          valueFormat=" <+#c"
          colors={{ scheme: "purple_orange" }}
          defs={[
            {
              id: "id",
              type: "patternDots",
              background: "inherit",
              color: "#FF00FF",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "value",
              type: "patternLines",
              background: "inherit",
              color: "#FF00FF",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          borderColor={{ theme: "labels.text.fill" }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "DAY",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total Enrolled",
            legendPosition: "middle",
            legendOffset: -30,
          }}
          enableGridX={true}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", "0"]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "right",
              direction: "column",
              justify: false,
              translateX: 113,
              translateY: 0,
              itemWidth: 100,
              itemHeight: 20,
              itemsSpacing: 2,
              symbolSize: 20,
              itemDirection: "left-to-right",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default BarChart;
