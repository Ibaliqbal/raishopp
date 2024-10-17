import CardOrder from "@/components/card/card-order";
import React from "react";

const StoreOrdersView = () => {
  return (
    <section className="col-span-2 flex flex-col gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <CardOrder key={i} />
      ))}
    </section>
  );
};

export default StoreOrdersView;
