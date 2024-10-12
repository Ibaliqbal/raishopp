import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import FormUpdateUser from "@/layouts/form/form-update-user";
import { FaUser } from "react-icons/fa";

const StoreSettingsView = () => {
  return (
    <section className="col-span-2 flex flex-col gap-5">
      <div className="border-2 border-gray-500 rounded-md p-3 flex flex-col gap-4">
        <h1 className="text-2xl">Profile</h1>
        <div className="flex flex-col gap-3 w-fit items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="/Background.jpeg"
              alt="Avatar"
              className="object-cover object-center"
            />
            <AvatarFallback>
              <FaUser />
            </AvatarFallback>
          </Avatar>
          <Button size="lg" variant="primary">
            Change
          </Button>
        </div>
        <FormUpdateUser />
      </div>
    </section>
  );
};

export default StoreSettingsView;
