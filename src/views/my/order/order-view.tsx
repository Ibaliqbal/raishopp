import FilterOrder from "@/components/filter/filter-order";
import CardOrder from "@/components/card/card-order";

const OrderView = () => {
  return (
    <section className="col-span-2 flex flex-col gap-4">
      <FilterOrder lists={[]} />
      {Array.from({ length: 4 }).map((_, i) => (
        <CardOrder key={i} />
      ))}
    </section>
  );
};

export default OrderView;
