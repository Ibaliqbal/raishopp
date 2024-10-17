import Card from "@/components/ui/card";
import { FaEye, FaTrash } from "react-icons/fa";
import { Button } from "../ui/button";

const CardPromo = () => {
  return (
    <Card className="border border-gray-500 rounded-xl">
      <Card.Icon src="/icon/discount-voucher-icon.png" className="h-[150px]" />
      <Card.Description asLink={false}>
        <h2>Code Promo : DIS-2022-1234</h2>
        <p>Expire : 31 Desember 2022</p>
        <p>Uses : 20</p>
      </Card.Description>
      <Card.Footer>
        <Button variant="icon" size="sm" className="text-xl">
          <FaEye />
        </Button>
        <Button variant="icon" size="sm" className="text-xl ">
          <FaTrash className="text-red-600" />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardPromo;
