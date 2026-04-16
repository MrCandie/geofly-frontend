import { Calendar, MapPin } from "lucide-react";
import type { Match } from "../home";

export default function Matches({ matches }: { matches: Match[] }) {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-black uppercase italic tracking-tighter">
          Upcoming Matches
        </h3>
        <button className="text-[#e6b810] text-xs font-bold uppercase tracking-widest hover:underline">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-[#002516] border border-white/5 rounded-2xl p-6 flex items-center justify-between group hover:bg-[#00301d] transition-all cursor-pointer"
          >
            <div className="space-y-3">
              <h4 className="text-xl font-black uppercase tracking-tight italic group-hover:text-[#e6b810] transition-colors">
                {match.teams}
              </h4>
              <div className="flex gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {match.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {match.stadium}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-[#e6b810] italic leading-none">
                {match.price}
              </p>
              <span className="text-[10px] text-gray-600 font-bold uppercase">
                Starting from
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
