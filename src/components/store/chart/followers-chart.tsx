import React from "react";
import { Line } from "react-chartjs-2";

const FollowersChart = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">Followers</h2>
      <p>Total : 200</p>
      <Line
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Your followers store for this year",
              position: "bottom",
              fullSize: true,
            },
            legend: {
              display: false,
            },
            tooltip: {
              mode: "nearest",
              intersect: false,
            },
          },
        }}
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Sales",
              data: [19, 15, 18, 22, 25, 13],
              borderColor: "rgba(39, 243, 245, 1)",
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};

export default FollowersChart;
