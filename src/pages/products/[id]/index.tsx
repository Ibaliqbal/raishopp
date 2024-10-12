import BaseLayout from "@/layouts/base-layout";
import ProductsDetailView from "@/views/products/products-detail-view";
import ProductsRelatedView from "@/views/products/products-similiar-view";
// import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

// fetching in server side

// export const getServerSideProps = (async ({ query, params }) => {
//   console.log({ params });
//   console.log({ query });
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }) satisfies GetServerSideProps<{
//   data: {
//     id: number;
//     title: string;
//     price: string;
//     category: string;
//     description: string;
//     image: string;
//   }[];
// }>;

const Page = () => {
  return (
    <BaseLayout>
      <main className="flex flex-col gap-5 container xl:max-w-[1400px] max-w-7xl p-4 pb-10">
        <ProductsDetailView />
        <ProductsRelatedView />
      </main>
    </BaseLayout>
  );
};

export default Page;
