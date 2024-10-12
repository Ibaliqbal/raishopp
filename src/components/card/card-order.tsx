import CardCart from "./card-cart";
import { format } from "date-fns";
import { FaEye } from "react-icons/fa";
import { Badge } from "../ui/badge";
import Card from "../ui/card";

const CardOrder = () => {
  return (
    <>
      <Card className="border border-gray-500 rounded-md">
        <Card.Description asLink={false}>
          <h1>Code Transaction : TRX-2nnin42-1noin9hNn2</h1>
          <p>Tanggal : {format(new Date(), "dd MM, yyyy")}</p>
        </Card.Description>
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <CardCart
              key={i}
              i={i}
              handleTrash={(id: number) => {}}
              withAction={false}
              handleToCheckout={() => {}}
            />
          ))}
        </div>
        <Card.Footer>
          <Badge size="md" variant="success">Success</Badge>
          <FaEye
            className="text-xl cursor-pointer"
            //   onClick={() => setOpen(true)}
          />
        </Card.Footer>
      </Card>
    </>
  );
};

export default CardOrder;
