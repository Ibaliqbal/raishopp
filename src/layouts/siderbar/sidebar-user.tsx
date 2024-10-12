import {
  BsGear,
  BsGearFill,
  BsBag,
  BsBagFill,
  BsCart,
  BsCartFill,
} from "react-icons/bs";
import { RiBillLine, RiBillFill } from "react-icons/ri";

import SideLink from "@/components/side-link";
import SideListsStore from "@/components/store/side-lists";

const SidebarUser = () => {
  return (
    <aside className="col-span-1 flex flex-col gap-3 p-3 text-xl h-fit sticky top-3 border border-gray-500 rounded-md first:rounded-t-md">
      <SideLink
        href="/settings"
        iconActive={<BsGearFill />}
        iconNonActive={<BsGear />}
        text="Settings"
      />
      <SideLink
        href="/my/order"
        iconActive={<BsBagFill />}
        iconNonActive={<BsBag />}
        text="Order"
      />
      <SideLink
        href="/my/cart"
        iconActive={<BsCartFill />}
        iconNonActive={<BsCart />}
        text="Cart"
      />
      <SideLink
        href="/my/transaction"
        iconActive={<RiBillFill />}
        iconNonActive={<RiBillLine />}
        text="Transaction"
      />
      <SideListsStore />
    </aside>
  );
};

export default SidebarUser;
