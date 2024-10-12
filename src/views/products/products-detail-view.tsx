import { convertPrice } from "@/utils/helper";
import { Button } from "@/components/ui/button";
import { BsCart, BsBagCheck } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaMinus, FaPlus, FaUser } from "react-icons/fa";
import ProductsListComment from "@/components/products/products-list-comment";
import ProductsListVariant from "@/components/products/products-list-variant";
import { toast } from "sonner";
import ProductsDetailImage from "@/components/products/products-detail-image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Rating } from "@smastrom/react-rating";
import { styleReactRating, variants, VariantT } from "@/utils/constant";
import Link from "next/link";

const ProductsDetailView = () => {
  const [readMore, setReadMore] = useState(false);
  const [count, setCount] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<VariantT>(variants[0]);

  return (
    <section className="w-full flex gap-4 relative">
      <ProductsDetailImage />
      <section className="w-[60%] flex flex-col gap-5">
        <h1 className="text-2xl">Nike forece Air Jordan 200, SS</h1>
        <div className="flex items-end">
          <div className="text-3xl font-bold ">
            {convertPrice(selectedVariant.priceAfterDisc)}
          </div>
          <div className="ml-2 mb-1 text-base text-red-600 line-through">
            {convertPrice(selectedVariant.priceBeforeDisc)}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Rating
            readOnly
            value={4.5}
            style={{
              maxWidth: 120,
              marginBottom: ".5rem",
              marginTop: ".5rem",
            }}
            itemStyles={styleReactRating}
          />
          <p className="text-lg">{(4.5).toFixed(2)}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Variants</h3>
          <ProductsListVariant
            defaultVariant={selectedVariant}
            onChangeVariant={(variant) => setSelectedVariant(variant)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3>Quantity</h3>
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="icon"
              disabled={count === 1}
              onClick={() => setCount((prev) => --prev)}
            >
              <FaMinus />
            </Button>
            <span>{count}</span>
            <Button
              size="icon"
              variant="icon"
              onClick={() => setCount((prev) => ++prev)}
            >
              <FaPlus />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            size="xl"
            className="flex items-center gap-3 text-xl"
          >
            <BsCart /> Add cart
          </Button>
          <Button
            variant="checkout"
            size="xl"
            className="flex items-center gap-3 text-xl"
            onClick={() => toast.success("Success")}
          >
            <BsBagCheck /> Checkout
          </Button>
        </div>
        <div className="flex gap-4 items-center text-lg">
          <div className="flex flex-col gap-3 items-center">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src="/Background.jpeg"
                alt="Avatar"
                className="object-cover object-center"
              />
              <AvatarFallback>
                <FaUser />
              </AvatarFallback>
            </Avatar>
            <Link href={"/store/ibal"} className="font-bold">
              Ibal Store
            </Link>
          </div>
          <div className="self-start flex flex-col gap-3">
            <p>Follower : 200</p>
            <p>Products : 2</p>
          </div>
          <Button className="self-start " size="lg">
            Follow
          </Button>
        </div>
        <ProductsListComment />
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">Description</h3>
          <div className="flex flex-col gap-2">
            <p
              className={cn(
                "transition-all duration-300 ease-linear",
                readMore ? "" : "line-clamp-4"
              )}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus quod nihil accusamus est optio eveniet tempora nemo
              laudantium suscipit numquam. Distinctio exercitationem odio vel
              eum quibusdam fuga? Sed, architecto! Aliquam! Voluptatum deleniti,
              assumenda eos, error obcaecati nobis debitis tempora natus
              necessitatibus vero sapiente voluptate incidunt magni eligendi
              dignissimos quas asperiores esse non at? Facere eius laborum nobis
              eos ab ea? Impedit quisquam nobis repellat veniam laudantium ab
              explicabo, atque deserunt, vel sed nemo at, veritatis rerum.
              Sapiente eius, quo molestiae perspiciatis, cum quaerat fugiat
              delectus, consequatur odio alias quisquam expedita! Minus iste
              voluptate nobis temporibus alias maiores in quos dolorem
              perspiciatis exercitationem possimus veritatis doloremque
              voluptates illo iusto magni deserunt numquam nisi velit, est eaque
              voluptas dicta. Voluptatum, ducimus voluptate. Fuga obcaecati,
              illo laboriosam nobis molestiae rerum ut. Repellat totam corporis
              aliquam ex cupiditate accusantium doloremque ipsum animi maxime
              aliquid. Ex perspiciatis voluptas reprehenderit, quam illum
              asperiores libero dolor accusantium?
            </p>
            <Button
              variant="icon"
              size="sm"
              onClick={() => setReadMore((prev) => !prev)}
            >
              {readMore ? "Close" : "Read more"}
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductsDetailView;
