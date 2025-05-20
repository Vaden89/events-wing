"use client";
import { useState } from "react";
import { EventDetails } from "@/app/components/events/EventDetails";
import { TicketDetails } from "@/app/components/events/TicketDetails";

export default function CreatePage() {
  const [step, setStep] = useState("ticket");

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        {/* <button className="flex items-center gap-2 cursor-pointer">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button> */}
        <span className="font-medium text-gray-500">
          Let&apos;s set up your event, It&apos;ll only take a few minutes
        </span>
        <span className="text-xl font-medium">
          {step === "event" ? "Events" : "Ticket"} Details
        </span>
      </div>
      {step === "event" ? <EventDetails next={setStep} /> : <TicketDetails />}
    </div>
  );
}
