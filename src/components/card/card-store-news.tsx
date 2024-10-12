import Card from "@/components/ui/card";
import { BiCommentDots, BiShareAlt } from "react-icons/bi";

const CardStoreNews = () => {
  const totalImg = 3;
  return (
    <Card>
      <section className="h-[400px] grid grid-cols-2 gap-3">
        {totalImg === 3 ? (
          <>
            <Card.Image src="/Banner4.png" className="h-full" />
            <div className="flex flex-col gap-4">
              <Card.Image src="/Banner4.png" className="h-full" />
              <Card.Image src="/Banner4.png" className="h-full" />
            </div>
          </>
        ) : (
          <>
            <Card.Image src="/Banner4.png" className="h-full" />
            <Card.Image src="/Banner4.png" className="h-full" />
            <Card.Image src="/Banner4.png" className="h-full" />
            <Card.Image src="/Banner4.png" className="h-full" />
          </>
        )}
      </section>
      <Card.Description
        asLink={false}
        className="pb-4 border-b border-gray-500"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat
          laudantium esse corrupti maiores blanditiis ducimus aspernatur.
          Voluptas iusto saepe dolorum, id ex, placeat necessitatibus dicta,
          laborum similique perferendis libero. Ducimus consequatur soluta
          exercitationem dolor modi cum ut nam error. Laboriosam tenetur
          voluptates, ab, nobis vero ex tempore quod iure blanditiis a omnis
          doloremque maxime delectus dolores dolorum voluptas commodi! Quod
          mollitia accusamus saepe sint asperiores sequi ex exercitationem quia
          maiores. Quisquam porro consectetur, eum quod eaque est nisi aliquid
          tempore blanditiis tenetur, aut provident quos assumenda alias ipsum
          rerum. Pariatur sit hic molestias, aliquid facilis possimus, magni
          perferendis ipsa dolorum, iure eligendi perspiciatis quod harum minima
          omnis. Facere placeat dolores ab officia voluptatibus ut natus sequi
          assumenda veritatis quos?
        </p>
      </Card.Description>
      <Card.Footer>
        <BiCommentDots className="text-2xl " />
        <BiShareAlt className="text-2xl cursor-pointer" />
      </Card.Footer>
    </Card>
  );
};

export default CardStoreNews;
