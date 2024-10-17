import { newsSchema, NewsSchemaT } from "@/types/store";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "./submit-button";

const FormNews = () => {
  const form = useForm<NewsSchemaT>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      description: "",
      medias: [],
    },
  });

  const handleSubmit = (data: NewsSchemaT) => {
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
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={form.formState.isSubmitting}
                  className="resize-none h-64 p-3"
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Please enter a brief description of your news article.
              </FormDescription>
            </FormItem>
          )}
        />
        <SubmitButton<NewsSchemaT>
          className="self-end"
          formHook={form}
          textBtn="Submit"
        />
      </form>
    </Form>
  );
};

export default FormNews;
