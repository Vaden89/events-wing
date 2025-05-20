"use client";
import { dashboardMenu } from "@/resources/MenuItems";
import { BadgeHelp, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Sidenav = () => {
  const [url, setUrl] = useState("discover");

  useEffect(() => {
    const path = window.location.href.split("/");
    setUrl(path[path.length - 1]);
  }, []);

  return (
    <nav className="w-1/5 h-screen flex flex-col justify-between p-10 py-4 shadow bg-gray-50">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-primary">EventsWing</h1>
        <ul className="flex flex-col gap-4 mt-10">
          {dashboardMenu.map((item, index) => {
            const IconComponent = item.icon;
            let path: string[] | boolean = item.link.split("/");
            path = path[path.length - 1] === url;

            return (
              <div
                key={index}
                className={`flex items-center gap-2 text-lg hover:text-primary py-0.5 px-2 rounded-md  ${
                  path && "bg-primary text-white"
                }`}
              >
                <IconComponent size={18} />
                <a href={item.link}>{item.title}</a>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col mb-10 items-start gap-4">
        <Link href={"#"} className="flex items-center gap-2">
          <BadgeHelp size={20} />
          Help
        </Link>
        <button className="flex items-center text-red-500 gap-2">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </nav>
  );
};
