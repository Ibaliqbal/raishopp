import UserLayout from "@/layouts/user-layout";
import StoreProductsView from "@/views/my/store/products/store-products-view";

const Page = () => {
  return (
    <UserLayout>
      <StoreProductsView />
    </UserLayout>
  );
};

export default Page;
