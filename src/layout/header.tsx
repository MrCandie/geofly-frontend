import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#001c10]/80 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <Search size={18} className="text-gray-500" />
        <input
          className="bg-transparent border-none outline-none text-sm placeholder:text-gray-600 w-64"
          placeholder="Search matches or cities..."
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer text-gray-400 hover:text-[#e6b810]">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#e6b810] rounded-full border-2 border-[#001c10]" />
        </div>
        <div className="flex items-center gap-3 border-l border-white/10 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black uppercase tracking-widest text-[#e6b810]">
              Akinwumi A.
            </p>
            <p className="text-[10px] text-gray-500 uppercase font-bold">
              Gold Member
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e6b810] to-[#ffcc14] p-[2px]">
            <div className="w-full h-full rounded-full bg-[#001c10] flex items-center justify-center font-black text-[#e6b810] text-sm">
              AA
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
