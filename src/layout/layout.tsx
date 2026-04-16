import type React from "react";
import Header from "./header";
import SideBar from "./sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#001c10] text-white font-sans flex">
      <SideBar />
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        {children}
      </main>
    </div>
  );
}
