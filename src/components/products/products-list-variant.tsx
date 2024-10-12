import React, { useState } from "react";
import ProductsVariant from "./products-variant";
import ProductModalVariantView from "@/views/products/product-modal-variant-view";
import Modal from "../ui/modal";
import { variants, VariantT } from "@/utils/constant";

type Props = {
  defaultVariant?: VariantT;
  onChangeVariant: (variant: VariantT) => void;
};

const ProductsListVariant = ({ onChangeVariant, defaultVariant }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(
    defaultVariant ? defaultVariant.type : ""
  );

  return (
    <>
      <div className="flex gap-3 flex-wrap">
        {variants.map((variant, i) => (
          <ProductsVariant
            key={i}
            isSelected={variant.type === selectedVariant}
            variant={variant}
            onClick={(v: string) => {
              setOpen(true);
              setSelectedVariant(v);
              onChangeVariant(variants.find((va) => va.type === v) as VariantT);
            }}
          />
        ))}
      </div>
      <Modal open={open} setOpen={setOpen}>
        <ProductModalVariantView
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
          variants={variants}
        />
      </Modal>
    </>
  );
};

export default ProductsListVariant;
