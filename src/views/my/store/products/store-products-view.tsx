import CardProduct from "@/components/card/card-product";
import FilterBySelect from "@/components/filter/filter-by-select";
import { Button } from "@/components/ui/button";
import { categories } from "@/utils/constant";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const StoreProductsView = () => {
  return (
    <section className="col-span-2 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <FilterBySelect
          filterBy="category"
          lists={categories.map((category) => category.name.toLowerCase())}
        />
        <Button variant="primary" asChild>
          <Link
            className="flex items-center gap-3"
            href={"/my/store/products/create"}
          >
            <FaPlus />
            Create product
          </Link>
        </Button>
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <CardProduct key={i} i={i} hisMine />
        ))}
      </div>
    </section>
  );
};

export default StoreProductsView;
