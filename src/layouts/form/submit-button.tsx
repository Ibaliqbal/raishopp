import { Button } from "@/components/ui/button";
import React, { ComponentPropsWithoutRef } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

type Props<T extends FieldValues> = {
  formHook: UseFormReturn<T, unknown, undefined>;
  textBtn: string;
} & ComponentPropsWithoutRef<"button">;

const SubmitButton = <T extends FieldValues>({
  formHook,
  textBtn,
  ...rest
}: Props<T>) => {
  return (
    <Button
      disabled={formHook.formState.isSubmitting}
      type="submit"
      variant="primary"
      size="lg"
      {...rest}
    >
      {textBtn}
    </Button>
  );
};

export default SubmitButton;
