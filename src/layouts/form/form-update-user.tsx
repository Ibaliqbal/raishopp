import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { updateProfileSchema, UpdateProfileT } from "@/types/user";
import SubmitButton from "./submit-button";

const FormUpdateUser = () => {
  const form = useForm<UpdateProfileT>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: "",
      email: "iqbalmuthahhary@gmail.com",
      phone: undefined,
    },
  });

  const onSubmit = async (data: UpdateProfileT) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <section className="grid grid-cols-2 gap-x-4 gap-y-2">
          {" "}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Name</FormLabel>
                <FormControl>
                  <Input
                    className="text-base py-7 border border-slate-700"
                    placeholder="Enter your name..."
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Please enter your full name.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Phone</FormLabel>
                <FormControl>
                  <Input
                    className="text-base py-7 border border-slate-700"
                    placeholder="Enter your phone..."
                    {...field}
                    value={field.value === undefined ? "" : field.value}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? undefined : value);
                    }}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Please provide a valid phone number for contact purposes.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <Input
                    className="text-base py-7 border border-slate-700"
                    placeholder="Enter your email..."
                    {...field}
                    disabled
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Your email address will be used for account-related
                  communications.
                </FormDescription>
              </FormItem>
            )}
          />
        </section>
        <SubmitButton<UpdateProfileT>
          formHook={form}
          textBtn="Submit"
          className="self-start"
        />
      </form>
    </Form>
  );
};

export default FormUpdateUser;
