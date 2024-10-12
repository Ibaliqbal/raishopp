import { cn } from "@/lib/utils";
import { VariantT } from "@/utils/constant";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  isSelected: boolean;
  variant: VariantT;
  onClick: (variant: string) => void;
};

const ProductsVariant = ({ isSelected, variant, onClick }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <p
            onClick={() => onClick(variant.type)}
            className={cn(
              "py-3 px-4 rounded-md cursor-pointer text-center",
              isSelected
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border border-gray-500"
            )}
          >
            {variant.type}
          </p>
        </TooltipTrigger>
        <TooltipContent>
          <p>Stock : {variant.stock}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProductsVariant;
