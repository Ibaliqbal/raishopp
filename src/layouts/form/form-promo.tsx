import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { promoSchema, PromoSchemaT } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubmitButton from "./submit-button";
import { AiOutlinePercentage } from "react-icons/ai";
import CardProduct from "@/components/card/card-product";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const FormPromo = () => {
  const form = useForm<PromoSchemaT>({
    resolver: zodResolver(promoSchema),
    defaultValues: {
      code: "",
      amount: 0,
      allowedProducts: [],
    },
  });

  const handleSubmit = (data: PromoSchemaT) => {
    console.log(data);
    // You can send the data to your API here.
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3">
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={form.formState.isSubmitting}
                  className="text-base py-7 border border-slate-700"
                  placeholder="Enter promo code..."
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Please enter your code for set promo store
              </FormDescription>
            </FormItem>
          )}
        />
        <section className="grid grid-cols-2 gap-4 items-center">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel>Total discount</FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    <Input
                      {...field}
                      disabled={form.formState.isSubmitting}
                      className="text-base py-7 border border-slate-700 grow"
                      placeholder="Enter total amount..."
                    />
                    <div className="p-4 flex items-center justify-center border dark:border-gray-800 border-gray-200 rounded-md">
                      <AiOutlinePercentage className="text-xl" />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Please enter your total discount for set promo store
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expireAt"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel>Expiretation</FormLabel>
                <Popover>
                  <PopoverTrigger
                    asChild
                    disabled={form.formState.isSubmitting}
                  >
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 py-7 text-left font-normal text-base",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <FaCalendarAlt className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="flex w-auto flex-col space-y-2 p-2"
                    align="center"
                  >
                    <Select
                      onValueChange={(value) =>
                        field.onChange(addDays(new Date(), parseInt(value)))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="0">Today</SelectItem>
                        <SelectItem value="1">Tomorrow</SelectItem>
                        <SelectItem value="3">In 3 days</SelectItem>
                        <SelectItem value="7">In a week</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="rounded-md border border-gray-500">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        disabled={(date) =>
                          date <= new Date() || date < new Date("1900-01-01")
                        }
                      />
                    </div>
                  </PopoverContent>
                </Popover>
                <FormMessage />
                <FormDescription className="text-sm text-gray-500">
                  When do you want this task to be completed? Pick a date!
                </FormDescription>{" "}
              </FormItem>
            )}
          />
        </section>
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2>Allowed products</h2>
            <div className="flex items-center gap-3">
              <div className="flex space-x-2">
                <Checkbox id="select all products" />
                <Label
                  htmlFor="select all products"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Select all products
                </Label>
              </div>
              <p>0 / 1000</p>
            </div>
          </div>
          <div className="max-h-[600px] overflow-auto custom-vertical-scroll w-full grid grid-cols-3 pb-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <CardProduct key={i} i={i} />
            ))}
          </div>
        </section>
        <SubmitButton<PromoSchemaT>
          formHook={form}
          textBtn="Create"
          className="self-end"
        />
      </form>
    </Form>
  );
};

export default FormPromo;
