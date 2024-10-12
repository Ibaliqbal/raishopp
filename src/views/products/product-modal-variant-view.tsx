import { AnimatePresence, motion } from "framer-motion";
import Image from "@/components/ui/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const kumpulanImg = ["/Background.jpeg", "/Background2.jpg"];
import { Dispatch, SetStateAction, useState } from "react";
import ProductsVariant from "@/components/products/products-variant";
import { VariantT } from "@/utils/constant";

type Props = {
  selectedVariant: string;
  setSelectedVariant: Dispatch<SetStateAction<string>>;
  variants: VariantT[];
};

const ProductModalVariantView = ({
  selectedVariant,
  setSelectedVariant,
  variants,
}: Props) => {
  const [selectedImage, setSelectedImage] = useState(kumpulanImg[0]);
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 200 }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      exit={{
        opacity: 0,
        translateY: -200,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        type: "tween",
      }}
      className="md:w-[900px] w-[320px] h-[600px] max-h-[600px] flex gap-4 flex-col overflow-auto style-base-modal p-3 custom-vertical-scroll"
    >
      <div className="flex items-center justify-center h-fit">
        <div className="flex gap-3 w-[80%] max-w-[80%] custom-horizontal-scroll items-center justify-center">
          {variants.map((variant, i) => (
            <ProductsVariant
              key={i}
              isSelected={selectedVariant === variant.type}
              variant={variant}
              onClick={(variant: string) => {
                setSelectedVariant(variant);
              }}
            />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.article
          key={selectedVariant}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            type: "tween",
          }}
          className="h-full grow flex gap-4"
        >
          <section className="w-1/2">
            <h4>Variant : {selectedVariant}</h4>
            <p>
              Stock : {variants.find((v) => v.type === selectedVariant)?.stock}
            </p>
          </section>
          <section className="relative w-1/2 h-full group">
            <span
              className="absolute z-[3] text-xl top-1/2 -translate-y-1/2 p-2 py-3  left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-60 cursor-pointer text-white"
              onClick={() =>
                setSelectedImage((prev) => {
                  const index = kumpulanImg.findIndex((img) => img === prev);

                  if (index === 0) {
                    return kumpulanImg[kumpulanImg.length - 1];
                  }

                  return kumpulanImg[index - 1];
                })
              }
            >
              <IoIosArrowBack />
            </span>
            <AnimatePresence mode="wait">
              <Image
                motionProps={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "tween",
                  },
                }}
                key={selectedImage}
                src={selectedImage}
                alt="Bg"
                width={200}
                height={200}
                figureClassName="w-full h-full relative rounded-lg overflow-hidden"
                className="w-full h-full absolute inset-0 rounded-lg object-cover object-ccnter group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </AnimatePresence>
            <span
              className="absolute z-[3] text-xl top-1/2 -translate-y-1/2 p-2 py-3  right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-60 cursor-pointer text-white"
              onClick={() =>
                setSelectedImage((prev) => {
                  const index = kumpulanImg.findIndex((img) => img === prev);

                  if (index === kumpulanImg.length - 1) {
                    return kumpulanImg[0];
                  }

                  return kumpulanImg[index + 1];
                })
              }
            >
              <IoIosArrowForward />
            </span>
          </section>
        </motion.article>
      </AnimatePresence>
    </motion.section>
  );
};

export default ProductModalVariantView;
