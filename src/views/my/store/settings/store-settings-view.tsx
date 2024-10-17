import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import FormUpdateUser from "@/layouts/form/form-update-user";

const StoreSettingsView = () => {
  return (
    <section className="col-span-2 flex flex-col gap-5">
      <div className="border-2 border-gray-500 rounded-md p-3 flex flex-col gap-4">
        <h1 className="text-2xl">Profile</h1>
        <div className="relative w-full h-[300px] group">
          <Image
            alt="Header photo"
            src={"/Banner1.png"}
            figureClassName="w-full h-full relative rounded-xl"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
            width={500}
            height={300}
          />
          <div className="w-full h-full absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-300 ease-linear flex items-center justify-center">
            <Button variant="icon" className="bg-gray-500 bg-opacity-60">
              Upload
            </Button>
          </div>
        </div>
        <FormUpdateUser />
      </div>
    </section>
  );
};

export default StoreSettingsView;
