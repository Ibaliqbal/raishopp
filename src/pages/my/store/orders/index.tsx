import UserLayout from "@/layouts/user-layout";
import StoreOrdersView from "@/views/my/store/orders/store-orders-view";
import React from "react";

const Page = () => {
  return (
    <UserLayout>
      <StoreOrdersView />
    </UserLayout>
  );
};

export default Page;
