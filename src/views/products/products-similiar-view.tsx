import CardProduct from "@/components/card/card-product";
import React from "react";

const ProductsRelatedView = () => {
  return (
    <section className="w-full">
      <h1 className="text-xl">Related Products</h1>
      <div className="w-full grid grid-cols-4 gap-4 mt-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <CardProduct key={i} i={i} />
        ))}
      </div>
    </section>
  );
};

export default ProductsRelatedView;
