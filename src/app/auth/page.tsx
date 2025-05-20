"use client";

import { useState } from "react";
import { Signup } from "../components/auth/Signup";
import { Signin } from "../components/auth/Signin";

export default function AuthPage() {
  const [activeSection, setActiveSection] = useState("sign-up");

  return (
    <main className="w-full h-screen ">
      <div className="w-full flex sm:justify-end h-14 top-5 absolute">
        <h1 className="text-3xl font-medium px-10 sm:px-20  text-primary">
          EventsWing
        </h1>
      </div>
      <div className="w-full h-full flex">
        <div className="w-1/2 hidden sm:flex auth-img" />
        {activeSection === "sign-up" ? (
          <Signup swapActiveSection={setActiveSection} />
        ) : (
          <Signin swapActiveSection={setActiveSection} />
        )}
      </div>
    </main>
  );
}
