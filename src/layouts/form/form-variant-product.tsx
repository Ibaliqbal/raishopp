import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VariantSchemaT } from "@/types/product";
import { useState } from "react";

function ErrorMessage({ error }: { error: string }) {
  return error && <p className="text-sm text-red-600">{error}</p>;
}

const FormVariantProduct = () => {
  const [variants, setVariants] = useState<VariantSchemaT>({
    name_variant: "",
    price: 0,
    stock: 0,
    medias: [],
  });
  const [errors, setErrors] = useState<{
    name_variant: string;
    price: string;
    stock: string;
  }>({
    name_variant: "",
    price: "",
    stock: "",
  });

  const isFormValid = () => {
    return (
      variants.name_variant !== "" &&
      variants.price !== 0 &&
      variants.stock !== 0 &&
      Object.values(errors).every((error) => error === "")
    );
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name_variant" className="text-lg">
          Variant Name
        </Label>
        <Input
          className="text-base py-7 border border-slate-700"
          placeholder="Enter your product name..."
          id="name_variant"
          name="name_variant"
          onChange={(e) =>
            setVariants(
              (prev) =>
                ({
                  ...prev,
                  [e.target.name]: e.target.value as string,
                } as VariantSchemaT)
            )
          }
        />
        <ErrorMessage error={errors.name_variant} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label className="text-lg" htmlFor="price">
            Price
          </Label>
          <Input
            className="text-base py-7 border border-slate-700"
            placeholder="Enter your product name..."
            // {...field}
            // value={field.value === undefined ? "" : field.value}
            // onChange={(e) => {
            //   const value = e.target.value;
            //   field.onChange(value === "" ? undefined : value);
            // }}
            id="price"
            name="price"
            onChange={(e) => {
              setErrors((prev) => ({
                ...prev,
                [e.target.name]: "",
              }));
              if (isNaN(Number(e.target.value))) {
                setErrors((prev) => ({
                  ...prev,
                  [e.target.name]: "Price must be a number",
                }));
              } else {
                setVariants(
                  (prev) =>
                    ({
                      ...prev,
                      [e.target.name]: Number(e.target.value) as number,
                    } as VariantSchemaT)
                );
              }
            }}
          />
          <ErrorMessage error={errors.price} />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-lg" htmlFor="stock">
            Stock
          </Label>
          <Input
            className="text-base py-7 border border-slate-700"
            placeholder="Enter your product name..."
            id="stock"
            name="stock"
            onChange={(e) => {
              setErrors((prev) => ({
                ...prev,
                [e.target.name]: "",
              }));
              if (isNaN(Number(e.target.value))) {
                setErrors((prev) => ({
                  ...prev,
                  [e.target.name]: "Stock must be a number",
                }));
              } else {
                setVariants(
                  (prev) =>
                    ({
                      ...prev,
                      [e.target.name]: Number(e.target.value) as number,
                    } as VariantSchemaT)
                );
              }
            }}
          />
          <ErrorMessage error={errors.stock} />
        </div>
      </div>
      <Button
        type="button"
        className="self-end "
        variant="primary"
        size="lg"
        disabled={!isFormValid()}
        onClick={() => {
          console.log(variants);
        }}
      >
        Add
      </Button>
    </section>
  );
};

export default FormVariantProduct;
