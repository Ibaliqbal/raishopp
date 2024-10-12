import CardProduct from "@/components/card/card-product";
import FilterBySelect from "@/components/filter/filter-by-select";
import FilterBySearch from "@/components/filter/filter-by-search";
import { categories } from "@/utils/constant";

const ProductsView = () => {
  return (
    <main className="flex flex-col gap-4 wrapper-page">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FilterBySelect
            filterBy="category"
            lists={categories.map((category) => category.name.toLowerCase())}
          />
          <FilterBySelect
            filterBy="rating"
            lists={categories.map((category) => category.name.toLowerCase())}
          />
        </div>
        <div>
          <FilterBySearch />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <CardProduct key={i} i={i} />
        ))}
      </div>
    </main>
  );
};

export default ProductsView;
