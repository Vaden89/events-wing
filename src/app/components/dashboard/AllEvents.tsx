import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AllEvents = () => {
  return (
    <div className="w-full bg-gray-200 h-[50vh] rounded-lg flex flex-col justify-center items-center">
      <Image
        src={"/icons/calender.png"}
        width={150}
        height={150}
        alt="calender-icon"
      />
      <div className="w-fit text-center flex flex-col justify-center items-center gap-2">
        <span className="text-2xl font-medium">You have no events!</span>
        <p className="text-gray-500 ">
          Click on the Add new event button below to create your first event.
        </p>
        <Link href={"/dashboard/create"}>
          <Button className="h-12 w-fit">
            <Plus />
            <span>Add new event</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
