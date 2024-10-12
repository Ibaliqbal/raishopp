import Link from "next/link";
import React from "react";
import ProductsComments from "./products-comment";

const ProductsListComment = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl">Comments</h3>
      <div className="flex flex-col gap-4 divide-y-2 divide-gray-500">
        {Array.from({ length: 3 }).map((_, i) => (
          <ProductsComments key={i} />
        ))}
      </div>
      <Link
        href={"/products/23/comments"}
        className="self-center hover:underline text-blue-600"
      >
        More Comments
      </Link>
    </div>
  );
};

export default ProductsListComment;
