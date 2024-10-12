import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { Button } from "../ui/button";
import Image from "../ui/image";

const ProfileStore = () => {
  return (
    <section className="flex flex-col gap-4 pb-4 border-b border-gray-500">
      <Image
        figureClassName="w-full h-[300px] relative"
        width={500}
        height={500}
        className="w-full h-full absolute inset-0 object-cover object-center"
        alt={`Banner`}
        src={"/Banner4.png"}
      />
      <div className="flex flex-col gap-4 px-3 -mt-24">
        <div className="w-36 h-36 p-2 bg-white z-[2] rounded-full dark:bg-[#121212]">
          <Avatar className="w-full h-full">
            <AvatarImage
              src="/Background.jpeg"
              alt="Avatar"
              className="object-cover object-center"
            />
            <AvatarFallback>
              <FaUser />
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl">Ibal Store</h1>
            <Button size="lg">Follow</Button>
          </div>
          <div className="flex items-center gap-4">
            <p>
              Location : <span>Jakarta, Indonesia</span>
            </p>
            <p>Follower : 10000</p>
            <p>Products : 10</p>
          </div>
        </div>
        <p className="italic">No description about this store</p>
      </div>
    </section>
  );
};

export default ProfileStore;
