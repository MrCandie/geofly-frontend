import { Bell, Search } from "lucide-react";
import { useAuth } from "../context/auth";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="h-20 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-8 bg-white/80 dark:bg-[#001c10]/80 backdrop-blur-md sticky top-0 z-20 transition-colors duration-500">
      {/* Search Bar */}
      <div className="flex items-center gap-4 bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-full border border-black/5 dark:border-white/5">
        <Search size={18} className="text-gray-400 dark:text-gray-500" />
        <input
          className="bg-transparent border-none outline-none text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600 w-64 text-[#001c10] dark:text-white"
          placeholder="Search matches or cities..."
        />
      </div>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative cursor-pointer text-gray-400 hover:text-[#e6b810] transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#e6b810] rounded-full border-2 border-white dark:border-[#001c10]" />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-black/10 dark:border-white/10 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black uppercase tracking-widest text-[#e6b810]">
              {user?.fullName}
            </p>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold">
              Gold Member
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e6b810] to-[#ffcc14] p-[2px] shadow-sm">
            <div className="w-full h-full rounded-full bg-white dark:bg-[#001c10] flex items-center justify-center font-black text-[#e6b810] text-sm transition-colors duration-500">
              {user?.fullName
                ?.split(" ")
                .map((n) => n[0])
                .join("") || "AA"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
