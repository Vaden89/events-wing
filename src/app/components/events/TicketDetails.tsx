import Image from "next/image";
import { AddTicket } from "./AddTicket";

export const TicketDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      <p className="w-full p-4 font-medium rounded-md bg-gray-200 text-primary">
        We don&apos;t charge a fee for free tickets. For paid tickets, we charge
        a small transaction fee that&apos;s a percentage of the ticket value.
      </p>
      <div className="w-full h-[50vh] max-h-[350px] bg-gray-200 flex flex-col justify-center items-center">
        <Image
          src={"/icons/tickets.png"}
          width={100}
          height={100}
          alt="tickets-image"
        />
        <span className="text-lg font-medium">Let&apos; create tickets</span>
        <p className="text-gray-500">
          You don&apos;t have any tickets created yet, create your first ticket
          - it will only take 1 minute
        </p>
        <AddTicket />
      </div>
    </div>
  );
};
