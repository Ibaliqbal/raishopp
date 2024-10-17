import FormPromo from "@/layouts/form/form-promo";
import React from "react";

const StoreCreatePromoView = () => {
  return (
    <section className="col-span-2 flex flex-col gap-4">
      <h1 className="text-xl self-center">Craete discount for your products</h1>
      <FormPromo />
    </section>
  );
};

export default StoreCreatePromoView;
