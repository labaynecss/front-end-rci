import React, { useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { useQuery } from "@tanstack/react-query";
import { piecharts } from "../../../api/rolesAdmin";
import { Loading } from "../../../../components/loading/Loading";

const PieChart = () => {
  useEffect(() => {
    document.title = "PieChart";
  }, []);
  const { data, isLoading, isError, error } = useQuery(["yearly"], piecharts);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    console.log(error.message);
  }

  console.log(data);

  const chartData = data.map((item) => ({
    id: Object.keys(item)[0],
    value: item[Object.keys(item)[0]],
  }));

  return (
    <div className=" flex justify-center">
      <div className="bg-gradient-to-br bluring rounded-md h-[500px] w-[600px]">
        <ResponsivePie
          data={chartData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          startAngle={-151}
          endAngle={233}
          innerRadius={0.55}
          padAngle={3}
          cornerRadius={3}
          activeInnerRadiusOffset={17}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "pink_yellowGreen" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", "2.2"]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#5e227c"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsRadiusOffset={0.6}
          arcLabelsSkipAngle={4}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", "1.4"]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "dots",
              },
              value: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 17,
              translateY: 57,
              itemsSpacing: 16,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 22,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PieChart;
