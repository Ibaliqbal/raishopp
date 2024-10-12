import StoreLayout from "@/layouts/store-layout";
import StoreProductsView from "@/views/store/store-products-view";

const Page = () => {
  return (
    <StoreLayout>
      <StoreProductsView />
    </StoreLayout>
  );
};

export default Page;
