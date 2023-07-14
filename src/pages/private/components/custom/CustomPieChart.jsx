import { ResponsivePie } from "@nivo/pie";
import React from "react";

const CustomPieChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const updatedData = data.map((item) => ({
    ...item,
    value: (item.value / total) * 100,
  }));

  return (
    <div className="w-full h-[60px]">
      <ResponsivePie
        data={updatedData}
        margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={5}
        borderColor={{ theme: "grid.line.stroke" }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        colors={{ scheme: "purpleRed_green" }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
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
          { match: { id: "dots" }, id: "lines" },
          { match: { id: "dots" }, id: "lines" },
        ]}
        legends={[]}
      />
    </div>
  );
};

export default CustomPieChart;
