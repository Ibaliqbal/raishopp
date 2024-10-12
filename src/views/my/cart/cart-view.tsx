import CardCart from "@/components/card/card-cart";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const CartView = () => {
  const [total, setTotal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [myCheckout, setMyCheckout] = useState<number[]>([]);
  
  return (
    <section className="col-span-2 grid grid-cols-3 gap-4">
      <AnimatePresence mode="popLayout">
        {total.map((data: number) => (
          <motion.div key={data} layout className="relative cursor-pointer">
            {myCheckout.find((val) => val === data) ? (
              <div
                className="absolute w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-[2]"
                onClick={() =>
                  setMyCheckout((prev) => prev.filter((val) => val !== data))
                }
              >
                <FaCheck className="text-white text-5xl" />
              </div>
            ) : null}
            <CardCart
              i={data}
              handleTrash={(id: number) => {
                setTotal((prev) => prev.filter((val) => val !== id));
              }}
              handleToCheckout={() => setMyCheckout((prev) => [...prev, data])}
              withAction
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default CartView;
