import { Button } from "@/components/ui/button";
import FormProduct from "@/layouts/form/form-product";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const StoreProductUpdateView = () => {
  const router = useRouter();
  return (
    <main className="container max-w-7xl p-4 flex flex-col gap-4 pb-10">
      <Button
        className="flex items-center gap-3 w-fit"
        variant="icon"
        onClick={() => router.back()}
      >
        <FaArrowLeft />
        Back
      </Button>
      <FormProduct
        title="Update your product"
        textBtn="Update"
        onSubmit={() => {}}
      />
    </main>
  );
};

export default StoreProductUpdateView;
