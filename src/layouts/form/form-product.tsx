import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { productSchema, ProductSchemaT } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import ProductsListVariant from "@/components/products/products-list-variant";
import FormVariantProduct from "./form-variant-product";
import { categories } from "@/utils/constant";
import SubmitButton from "./submit-button";

type Props = {
  onSubmit: (data: ProductSchemaT) => void;
  title: string;
  textBtn: string;
};

const FormProduct = ({ title, textBtn }: Props) => {
  const form = useForm<ProductSchemaT>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      variant: [],
    },
  });

  const onSubmit = (data: ProductSchemaT) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          id="form-product"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base py-7 border border-slate-700"
                      placeholder="Enter your product name..."
                      {...field}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please enter your name product.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Category</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(value) => field.onChange(value)}
                      disabled={form.formState.isSubmitting}
                    >
                      <SelectTrigger className="py-7 text-base">
                        <SelectValue placeholder="Select your category product..." />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem
                            value={category.name}
                            key={category.name}
                            className="capitalize"
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please enter your name product.
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3>Variants</h3>
            <ProductsListVariant onChangeVariant={() => {}} />
            <FormVariantProduct />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel className="text-lg">Description</FormLabel>
                  <p>{field.value?.length ?? 0}/1500</p>
                </div>
                <FormControl>
                  <Textarea
                    className="border border-slate-700 resize-none h-56 text-base"
                    placeholder="Enter your product name..."
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Please describe your product</FormDescription>
              </FormItem>
            )}
          />
          <SubmitButton<ProductSchemaT> formHook={form} textBtn={textBtn} />
        </form>
      </Form>
    </section>
  );
};

export default FormProduct;
