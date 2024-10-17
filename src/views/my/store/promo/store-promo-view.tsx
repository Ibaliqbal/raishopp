import CardPromo from "@/components/card/card-promo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import PromoChart from "@/components/store/chart/promo-chart";
import { dataDemoPromo } from "@/utils/constant";

ChartJs.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const StorePromoView = () => {
  return (
    <section className="col-span-2 flex flex-col gap-4 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Promo</h1>
        <Button asChild>
          <Link href={"/my/store/promo/new"}>Create new promo</Link>
        </Button>
      </div>
      <PromoChart />
      <div className="grid grid-cols-3 gap-4">
        {dataDemoPromo.map((promo) => (
          <CardPromo key={promo.label} />
        ))}
      </div>
    </section>
  );
};

export default StorePromoView;
