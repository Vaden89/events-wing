import { dateFormatter } from "@/lib/dateFormatter";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  _id: string;
  img_url: string;
  name: string;
  date: string;
  location: string;
  prices: {
    regular: number;
    vip?: number;
    vvip?: number;
  };
}

export const EventCard = ({
  _id,
  prices,
  img_url,
  name,
  date,
  location,
}: EventCardProps) => {
  return (
    <div
      key={_id}
      className="w-full p-5 sm:p-2 flex flex-col bg-white shadow-md border rounded-xl"
    >
      <Image
        src={img_url}
        width={100}
        height={100}
        alt={name}
        className="rounded-lg w-full aspect-square"
      />
      <div className="flex flex-col gap-3 mt-2 sm:ml-2">
        <h3 className="text-xl font-medium truncate">{name}</h3>
        <div className="flex -center gap-2 text-sm text-gray-600">
          <CalendarDays />
          <span>{dateFormatter(date)}</span>
        </div>
        <div className="flex -center gap-2 text-sm text-gray-600">
          <MapPin />
          <span className="truncate">{location}</span>
        </div>
        {prices.regular > 0 ? (
          <span className="text-primary text-lg font-medium">
            ₦ {prices.regular}
          </span>
        ) : (
          <span className="text-primary text-lg font-medium">Free Entry</span>
        )}
      </div>
    </div>
  );
};
