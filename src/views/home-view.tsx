import CardProduct from "@/components/card/card-product";
import ProductCategories from "@/components/products/product-categories";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Carousel from "@/components/ui/carousel";
import { myBanners } from "@/utils/constant";
import Image from "@/components/ui/image";

const HomeView = () => {
  return (
    <main className="flex flex-col gap-4 wrapper-page">
      <div className="h-[500px]">
        <Carousel thumb={false} effect="slideAndOpacity">
          {myBanners.map((banner) => (
            <Image
              figureClassName="w-full h-full relative rounded-xl"
              width={500}
              height={500}
              className="w-full h-full absolute inset-0 rounded-xl object-cover object-center"
              alt={`Banner`}
              src={banner}
              key={banner}
            />
          ))}
        </Carousel>
      </div>
      <ProductCategories />
      <section className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Recomandation</h1>
        <div className="w-full grid grid-cols-4 gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <CardProduct key={i} i={i} />
          ))}
        </div>
        <Button
          asChild
          className="w-fit self-center"
          variant="outline"
          size="lg"
        >
          <Link href={"/products"}>More products</Link>
        </Button>
      </section>
    </main>
  );
};

export default HomeView;
