import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  ArcElement,
} from "chart.js";
import { convertPrice } from "@/utils/helper";
import { Button } from "@/components/ui/button";
import CardStoreNews from "@/components/card/card-store-news";
import Link from "next/link";
import FilterPopularProducts from "@/components/filter/filter-popular-products";
import { useState } from "react";
import { filterPopularProducts } from "@/utils/constant";

ChartJs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const StoreDashboardView = () => {
  const [selectChartProducts, setSelectChartProducts] = useState("selling");
  return (
    <section className="col-span-2 flex flex-col gap-4 pb-16">
      <h1 className="text-3xl">👋 Welcome back Ibal</h1>
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
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Your latest news</h2>
          <Button asChild>
            <Link href={"/"}>Create news</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <CardStoreNews key={i} />
          ))}
          <Button asChild variant="link">
            <Link href={"/my/store/news"}>More news</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoreDashboardView;
