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
import { Button } from "@/components/ui/button";
import CardStoreNews from "@/components/card/card-store-news";
import Link from "next/link";
import FollowersChart from "@/components/store/chart/followers-chart";
import InvoiceChart from "@/components/store/chart/invoice-chart";
import PopularProductsChart from "@/components/store/chart/popular-products-chart";

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
  return (
    <section className="col-span-2 flex flex-col gap-4 pb-16">
      <h1 className="text-3xl">👋 Welcome back Ibal</h1>
      <InvoiceChart />
      <PopularProductsChart />
      <FollowersChart />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Your latest news</h2>
          <Button asChild>
            <Link href={"/my/store/news/create"}>Create news</Link>
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
