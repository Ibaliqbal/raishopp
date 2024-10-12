import UserLayout from "@/layouts/user-layout";
import StoreSettingsView from "@/views/my/store/settings/store-settings-view";
import React from "react";

const Page = () => {
  return (
    <UserLayout>
      <StoreSettingsView />
    </UserLayout>
  );
};

export default Page;
