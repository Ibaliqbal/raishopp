import Card from "../ui/card";


const CardComment = () => {
  return (
    <Card className="w-full border border-gray-500 rounded-md group">
      <Card.Image src="/Background.jpeg" className="aspect-[1/.7]" />
      <Card.Description asLink={false}>
        <h1>Nike forece Air Jordan 200, SS</h1>
        <p>variant : Vanilla</p>
      </Card.Description>
    </Card>
  );
};

export default CardComment;
