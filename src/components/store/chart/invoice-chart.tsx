import { convertPrice } from "@/utils/helper";
import React from "react";
import { Line } from "react-chartjs-2";

const InvoiceChart = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">Invoice</h2>
      <p className="text-3xl">{convertPrice(1000000)}</p>
      <Line
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Invoice store for this year",
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
              data: [19, 15, 7, 9, 17, 5],
              borderColor: "rgba(12, 227, 9, 1)",
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};

export default InvoiceChart;
