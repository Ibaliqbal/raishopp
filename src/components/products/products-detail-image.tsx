import Image from "@/components/ui/image";
import Carousel from "../ui/carousel";

const kumpulanImg = ["/Background.jpeg", "/Background2.jpg"];

const ProductsDetailImage = () => {
  return (
    <div className="sticky top-3 w-[40%] h-[600px]">
      <Carousel thumb={false} pagination={false} effect="fade">
        {kumpulanImg.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={`Bg ${i}`}
            width={200}
            height={200}
            figureClassName="w-full h-full relative rounded-lg overflow-hidden"
            className="w-full h-full absolute inset-0 rounded-lg object-cover object-ccnter group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsDetailImage;
