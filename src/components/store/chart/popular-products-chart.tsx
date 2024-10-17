import FilterPopularProducts from "@/components/filter/filter-popular-products";
import { filterPopularProducts } from "@/utils/constant";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const PopularProductsChart = () => {
  const [selectChartProducts, setSelectChartProducts] = useState("selling");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Popular products (mosts purchased)</h2>
        <FilterPopularProducts
          lists={filterPopularProducts}
          onChange={(val: string) => setSelectChartProducts(val)}
          value={selectChartProducts}
        />
      </div>
      <Bar
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Three popular products (most purchased) per month for this year",
              position: "bottom",
              fullSize: true,
            },
            legend: {
              display: false,
            },
            tooltip: {
              mode: "point",
              intersect: false,
            },
          },
        }}
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Sales",
              data: [12, 19, 4, 5, 20, 3, 9, 20, 33, 25, 10, 26],
              backgroundColor: "rgba(75, 192, 192, 0.4)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
            {
              label: "Sales",
              data: [19, 15, 7, 9, 17, 5, 20, 44, 35, 20, 28, 19],
              backgroundColor: "rgba(12, 227, 9, 0.4)",
              borderColor: "rgba(12, 227, 9, 1)",
              borderWidth: 1,
            },
            {
              label: "Sales",
              data: [4, 10, 17, 12, 15, 7, 15, 20, 35, 28, 30, 25],
              backgroundColor: "rgba(245, 109, 39, 0.4)",
              borderColor: "rgba(245, 109, 39, 1)",
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default PopularProductsChart;
