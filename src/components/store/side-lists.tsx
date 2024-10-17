import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import {
  BsBagPlusFill,
  BsBagPlus,
  BsGearFill,
  BsGear,
  BsBag,
  BsBagFill,
} from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useRouter } from "next/router";
import { IoStorefront, IoStorefrontOutline } from "react-icons/io5";
import { RiCoupon3Line, RiCoupon3Fill } from "react-icons/ri";
import SideLink from "../side-link";

const SideListsStore = () => {
  const { pathname } = useRouter();
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="list-navigation-store">
        <AccordionTrigger className="p-2 py-3">
          <h3 className="flex gap-3 items-center text-xl">
            {pathname.includes("store") ? (
              <IoStorefront />
            ) : (
              <IoStorefrontOutline />
            )}{" "}
            Store
          </h3>
        </AccordionTrigger>
        <AccordionContent className="pl-3 flex flex-col gap-1">
          <SideLink
            href="/my/store"
            text="Dashboard"
            iconActive={<MdDashboard />}
            iconNonActive={<MdOutlineDashboard />}
            className="text-xl"
          />
          <SideLink
            href="/my/store/products"
            text="Products"
            iconActive={<BsBagPlusFill />}
            iconNonActive={<BsBagPlus />}
            className="text-xl"
          />
          <SideLink
            href="/my/store/promo"
            text="Promo"
            iconActive={<RiCoupon3Fill />}
            iconNonActive={<RiCoupon3Line />}
            className="text-xl"
          />
          <SideLink
            href="/my/store/orders"
            text="Orders"
            iconActive={<BsBagFill />}
            iconNonActive={<BsBag />}
            className="text-xl"
          />
          <SideLink
            href="/my/store/settings"
            iconActive={<BsGearFill />}
            iconNonActive={<BsGear />}
            text="Settings"
            className="text-xl"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SideListsStore;
