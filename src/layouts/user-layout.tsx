import React, { ComponentPropsWithoutRef } from "react";
import BaseLayout from "./base-layout";
import SidebarUser from "./siderbar/sidebar-user";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"main">;

const UserLayout = ({ children, className, ...rest }: Props) => {
  return (
    <BaseLayout>
      <main
        className={cn(
          "container max-w-[1350px] p-4 grid grid-cols-3 gap-4 relative",
          className
        )}
        {...rest}
      >
        <SidebarUser />
        {children}
      </main>
    </BaseLayout>
  );
};

export default UserLayout;
