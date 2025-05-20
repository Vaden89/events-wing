"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { LandingMenu } from "@/resources/MenuItems";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="w-full h-14 p-5 sm:px-20 py-10 flex items-center justify-between absolute top-0 text-left ">
      <span className="text-2xl text-white font-semibold">EventWing</span>
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <Menu
        className="sm:hidden text-white"
        onClick={() => setIsMobileMenuOpen(true)}
      />
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: "40%" }}
            className="w-full h-screen bg-black fixed inset-0"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.nav
            initial={{ width: 0, x: 100 }}
            animate={{ width: "70%", x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-2/3 h-screen bg-white fixed right-0 top-0 flex flex-col gap-4 p-5"
          >
            <div className="flex justify-end">
              <X onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <ul className="flex flex-col gap-4">
              {LandingMenu.map((item, index) => {
                return (
                  <Link className="font-medium" key={index} href={item.link}>
                    {item.title}
                  </Link>
                );
              })}
            </ul>
            {/* <Button variant="destructive">Logout</Button> */}
            <Button variant="default">Get Started</Button>
          </motion.nav>
        </>
      )}
    </>
  );
};

const DesktopMenu = () => {
  return (
    <nav className="sm:flex hidden items-center gap-5">
      <ul className="flex items-center gap-8 text-white">
        {LandingMenu.map((item, index) => {
          return (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{ scale: 1.1 }}
              className="font-medium text-lg hover:text-primary"
            >
              {item.title}
            </motion.a>
          );
        })}
        <Button className="text-lg">Get Started</Button>
      </ul>
    </nav>
  );
};
