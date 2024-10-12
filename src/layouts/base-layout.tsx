import NavbarBase from "@/components/navbar/navbar-base";
import React, { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = { children: ReactNode } & ComponentPropsWithoutRef<"section">;

const BaseLayout = ({ children, className, ...rest }: Props) => {
  return (
    <section className={className} {...rest}>
      <NavbarBase />
      {children}
    </section>
  );
};

export default BaseLayout;
