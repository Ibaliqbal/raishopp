import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import Modal from "@/components/ui/modal";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "@/components/ui/image";
import Link from "next/link";
import Card from "../ui/card";

type Props = {
  i: number;
};

const CardProduct = ({ i }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        className="rounded-md border border-gray-500 group"
        layoutId={`card-${i}`}
      >
        <Card.Image src="/Background.jpeg" layoutId={`card-${i}-image`} className="h-[300px]" />
        <Card.Description href="/products/23" asLink>
          <h1>Nike forece Air Jordan 20{i}, SS</h1>
        </Card.Description>
        <Card.Footer>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>4.2</span>
          </div>
          <FaEye
            className="text-xl cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </Card.Footer>
      </Card>
      <Modal open={open} setOpen={setOpen}>
        <motion.article
          layoutId={`card-${i}`}
          className="md:w-[900px] w-[320px] h-[500px] flex gap-4 overflow-auto style-base-modal p-3"
        >
          <Image
            motionProps={{
              layoutId: `card-${i}-image`,
            }}
            src="/Background.jpeg"
            alt="Product Image"
            width={200}
            height={200}
            figureClassName="w-1/2 h-full relative rounded-md overflow-hidden"
            className="w-full h-full absolute inset-0 rounded-md object-cover object-ccnter group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <section className="w-1/2 max-h-full h-full overflow-auto custom-vertical-scroll flex flex-col gap-2 relative pr-2">
            <h1 className="text-xl blur-background">
              Nike forece Air Jordan 20{i}, SS
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              laudantium ex, velit maiores ad necessitatibus, saepe tenetur
              tempore neque molestiae excepturi inventore. Quis dolorem nemo qui
              eaque, repellendus illum eos! Ipsam impedit eos unde voluptatem
              possimus. Similique nemo expedita, consequuntur error iusto itaque
              nisi. Modi delectus aspernatur, ipsam ratione asperiores voluptas,
              odit laborum ullam doloribus iste reiciendis beatae, provident
              incidunt. Saepe neque, porro debitis doloremque nam quod,
              exercitationem alias beatae quaerat maxime voluptatum odit, soluta
              rem atque. Necessitatibus numquam porro hic nihil sequi. Deserunt
              possimus harum, eum non accusantium id? Deserunt recusandae eum
              velit fugit voluptatibus inventore sequi consequatur saepe.
              Tempora exercitationem, inventore quo eveniet quisquam nobis iste
              rerum quaerat illo temporibus eaque blanditiis perspiciatis
              doloribus modi aperiam laudantium sint. Voluptatum in praesentium,
              atque ducimus rem eos officia placeat velit repellat facere?
              Quaerat odio reprehenderit, sapiente excepturi iste accusantium
              nulla aspernatur eligendi, odit et rerum debitis ipsa accusamus
              explicabo quo.
            </p>
            <Link href={"/"} className="self-end hover:underline">
              More detail
            </Link>
          </section>
        </motion.article>
      </Modal>
    </>
  );
};

export default CardProduct;
