import { dataDemoPromo } from "@/utils/constant";
import { generateRGBA } from "@/utils/helper";
import { Line } from "react-chartjs-2";

const PromoChart = () => {
  const randomRGBA = generateRGBA(dataDemoPromo.length);
  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Promo Chart",
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
          ...dataDemoPromo.map((data, i) => ({
            ...data,
            borderColor: randomRGBA[i],
          })),
        ],
      }}
    />
  );
};

export default PromoChart;
