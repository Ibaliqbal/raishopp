import BaseLayout from "@/layouts/base-layout";
import ProductsView from "@/views/products/products-view";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <BaseLayout>
      <ProductsView />
    </BaseLayout>
  );
};

export default Page;
