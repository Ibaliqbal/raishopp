import React, { ReactNode } from "react";
import BaseLayout from "./base-layout";
import ProfileStore from "@/components/store/profile-store";
import TabNavigationStore from "@/components/store/tab-navigation-store";

type Props = {
  children: ReactNode;
};

const StoreLayout = ({ children }: Props) => {
  return (
    <BaseLayout>
      <main className="wrapper-page flex flex-col gap-4">
        <ProfileStore />
        <TabNavigationStore />
        {children}
      </main>
    </BaseLayout>
  );
};

export default StoreLayout;
