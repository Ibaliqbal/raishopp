import CardStoreNews from "@/components/card/card-store-news";

const StoreNewsView = () => {
  return (
    <section className="flex flex-col gap-4 col-span-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <CardStoreNews key={i} />
      ))}
    </section>
  );
};

export default StoreNewsView;
