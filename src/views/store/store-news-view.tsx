import CardStoreNews from "@/components/card/card-store-news";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const StoreNewsView = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col gap-4 col-span-2">
      <Button
        className="self-start flex items-center gap-3"
        variant="icon"
        onClick={() => router.back()}
      >
        <FaArrowLeft />
        Back
      </Button>
      {Array.from({ length: 3 }).map((_, i) => (
        <CardStoreNews key={i} />
      ))}
    </section>
  );
};

export default StoreNewsView;
