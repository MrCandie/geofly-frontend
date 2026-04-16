import { ChevronRight, Ticket } from "lucide-react";

export default function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[#e6b810] p-6 rounded-2xl text-[#001c10] relative overflow-hidden group cursor-pointer">
        <Ticket className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform" />
        <p className="font-bold uppercase text-[10px] tracking-[0.2em] mb-4">
          Active Bookings
        </p>
        <h3 className="text-4xl font-black italic">03</h3>
        <p className="text-sm font-bold mt-2 flex items-center gap-1 uppercase">
          View Tickets <ChevronRight size={14} />
        </p>
      </div>
      <div className="bg-[#002516] p-6 rounded-2xl border border-white/5 hover:border-[#e6b810]/30 transition-all">
        <p className="text-[#e6b810] font-bold uppercase text-[10px] tracking-[0.2em] mb-4">
          Travel Wallet
        </p>
        <h3 className="text-4xl font-black italic tracking-tighter">₦4.2M</h3>
        <p className="text-gray-500 text-xs mt-2 uppercase font-bold">
          Ready for booking
        </p>
      </div>
      <div className="bg-[#002516] p-6 rounded-2xl border border-white/5">
        <p className="text-[#e6b810] font-bold uppercase text-[10px] tracking-[0.2em] mb-4">
          Loyalty Points
        </p>
        <h3 className="text-4xl font-black italic tracking-tighter">12,450</h3>
        <p className="text-gray-500 text-xs mt-2 uppercase font-bold">
          Level: Elite Scout
        </p>
      </div>
    </div>
  );
}
