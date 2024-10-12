import StoreLayout from "@/layouts/store-layout";
import StoreNewsView from "@/views/store/store-news-view";
// import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  // const router = useRouter();
  return (
    <StoreLayout>
      <StoreNewsView />
    </StoreLayout>
  );
};

export default Page;
