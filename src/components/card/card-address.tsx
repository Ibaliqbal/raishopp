import { FaEye } from "react-icons/fa";
import Card from "../ui/card";

type Props = {
  i: number;
};

const CardAddress = ({ i }: Props) => {
  return (
    <Card
      className="rounded-md border border-gray-500"
      layoutId={`card-address-${i}`}
    >
      <Card.Description asLink={false}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus nostrum facere sint doloremque possimus repellendus
          reprehenderit a molestias obcaecati in.
        </p>
      </Card.Description>
      <Card.Footer>
        <FaEye className="text-xl cursor-pointer" />
      </Card.Footer>
    </Card>
  );
};

export default CardAddress;
