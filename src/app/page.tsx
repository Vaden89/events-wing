import { Button } from "@/components/ui/button";
import { Navbar } from "./components/Navbar";
import { events } from "@/resources/dummyData";
import { EventCard } from "./components/EventCard";
import { ArrowRight, CreditCard, Lock, Ticket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <section className="w-full h-screen landing-img flex flex-col justify-center items-center text-center  ">
        <Navbar />
        <div className="h-full px-5 sm:px-24 text-white flex flex-col justify-center items-center gap-4 bg-[#00000040]">
          <h1 className=" text-4xl sm:text-6xl font-semibold">
            Welcome to{" "}
            <span className="text-primary font-bold italic">EventWing</span>{" "}
            Your Ultimate Event Hub For AFIT!
          </h1>
          <span className="hidden sm:flex w-2/3 text-lg">
            Discover, host, and attend the hottest events on campus. Whether
            you&apos;re planning an unforgettable party, a club hangout, or
            looking to grab tickets to the next big event — you&apos;re in the
            right place.
          </span>
          <Button className="text-2xl h-14 w-fit">Get Started</Button>
        </div>
      </section>
      <section className="mt-10 px-5 sm:px-20">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl sm:text-3xl font-bold text-primary">
            Upcoming Events
          </h2>
          <Link href={"/discover"}>
            <button className="flex items-center gap-2 text-sm">
              <span>View more</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
          {events.map((item) => {
            return (
              <EventCard
                key={item._id}
                _id={item._id}
                date={item.date}
                img_url={item.img_url}
                location={item.location}
                name={item.name}
                prices={item.prices}
              />
            );
          })}
        </div>
      </section>
      <section className="mt-20 px-5 sm:px-20">
        <div className="w-full border rounded-xl shadow-md flex flex-col gap-10 sm:gap-20 p-10">
          <div className="w-full flex flex-col sm:flex-row lg:gap-40 justify-between">
            <div className="sm:w-2/3">
              <span className="text-primary text-lg font-medium">
                Host Events{" "}
              </span>
              <h2 className="text-4xl font-medium">
                Host event, Create moments that move AFIT.
              </h2>
            </div>
            <p className="hidden sm:flex w-2/3 text-left text-gray-400">
              Our launchpad for student-led events. <br /> From idea to
              execution, we give you the tools to create, promote, and manage
              your events with ease whether it&apos;s a small gathering or a
              major campus show.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="flex flex-col gap-5 text-primary">
              <CreditCard size={64} />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Free event hosting</h3>
                <span className="text-black">
                  Let your ideas shine without worrying about cost. Hosting free
                  events comes at no charge just set it up and go live.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-[#F62F63]">
              <Ticket size={64} />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Ticket management</h3>
                <span className="text-black">
                  Easily create, manage, and verify event tickets. Our system
                  ensures smooth check-ins and real-time attendee tracking.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-[#38CCB2]">
              <Lock size={64} />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Built-in security</h3>
                <span className="text-black">
                  All transactions and tickets are securely encrypted. With
                  admin-level permissions and real-time monitoring, you stay in
                  control.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
