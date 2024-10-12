import React from "react";
import { useState } from "react";
import { convertPrice } from "@/utils/helper";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Button } from "../ui/button";
import Card from "../ui/card";

type Props = {
  i: number;
  handleTrash: (id: number) => void;
  withAction: boolean;
  handleToCheckout: (index: number) => void;
};

const CardCart = ({ i, handleTrash, withAction, handleToCheckout }: Props) => {
  const [count, setCount] = useState(1);
  return (
    <Card
      className="rounded-md border border-gray-500 group"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Card.Image src="/Background.jpeg" className="h-[300px]" />
      <Card.Description asLink={false} onClick={() => handleToCheckout(i)}>
        <h1>Nike forece Air Jordan 20{i}, SS</h1>
        <p>Price : {convertPrice(10000)}</p>
        <p>variant : Vanilla</p>
      </Card.Description>
      {withAction ? (
        <Card.Footer>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="icon"
              disabled={count === 1}
              onClick={() => setCount((prev) => --prev)}
            >
              <FaMinus />
            </Button>
            <span>{count}</span>
            <Button
              size="sm"
              variant="icon"
              onClick={() => setCount((prev) => ++prev)}
            >
              <FaPlus />
            </Button>
          </div>
          <FaTrash
            className="text-xl cursor-pointer text-red-600"
            onClick={() => handleTrash(i)}
          />
        </Card.Footer>
      ) : null}
    </Card>
  );
};

export default CardCart;
