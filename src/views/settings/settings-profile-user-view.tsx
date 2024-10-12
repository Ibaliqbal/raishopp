import ButtonSetLocation from "@/components/button/button-setlocation";
import CardAddress from "@/components/card/card-address";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import FormUpdateUser from "@/layouts/form/form-update-user";
import { useTheme } from "next-themes";
import SelectTheme from "@/components/settings/select-theme";
import FormChangePassword from "@/layouts/form/form-change-password";

const SettingProfileUserView = () => {
  const { setTheme, theme } = useTheme();
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
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Address</h2>
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <CardAddress key={i} i={i} />
            ))}
          </div>
          <ButtonSetLocation />
        </div>
      </div>
      <div className="border-2 border-gray-500 rounded-md p-3 flex flex-col gap-4">
        <h1 className="text-2xl">General Settings</h1>
        <div className="mt-2 flex flex-col gap-3">
          <h3>Theme</h3>

          <SelectTheme
            value={theme || "system"}
            onChnage={(value) => setTheme(value)}
          />
        </div>

        <FormChangePassword />
      </div>
    </section>
  );
};

export default SettingProfileUserView;
