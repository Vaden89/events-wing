import { Bell } from "lucide-react";
import { Sidenav } from "./Sidenav";

export const Sidebar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-full flex">
      <Sidenav />
      <div className="w-4/5 h-screen flex flex-col ">
        <div className="w-full h-20 px-5  shadow flex justify-between items-center">
          <h2 className="text-xl">Welcome back, Isaac</h2>
          <Bell size={20} />
        </div>
        <div className="p-10 overflow-y-auto ">{children}</div>
      </div>
    </div>
  );
};
