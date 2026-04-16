import type React from "react";
import Header from "./header";
import SideBar from "./sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#001c10] text-[#001c10] dark:text-white font-sans flex transition-colors duration-500">
      <SideBar />
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
