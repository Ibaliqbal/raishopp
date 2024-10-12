import CardProduct from "@/components/card/card-product";
import FilterBySelect from "@/components/filter/filter-by-select";
import { categories } from "@/utils/constant";
import React from "react";

const StoreProductsView = () => {
  return (
    <section className="flex flex-col gap-4">
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
      <div className="w-full grid grid-cols-4 gap-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <CardProduct key={i} i={i} />
        ))}
      </div>
    </section>
  );
};

export default StoreProductsView;
