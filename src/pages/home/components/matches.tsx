import { Calendar, MapPin } from "lucide-react";
import type { Match } from "../home";

export default function Matches({ matches }: { matches: Match[] }) {
  return (
    <section id="tickets">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-black uppercase italic tracking-tighter dark:text-white text-[#001c10]">
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
            className="bg-white dark:bg-[#002516] border border-black/5 dark:border-white/5 rounded-2xl p-6 flex items-center justify-between group hover:border-[#e6b810]/30 dark:hover:bg-[#00301d] transition-all cursor-pointer shadow-sm dark:shadow-none"
          >
            <div className="space-y-3">
              <h4 className="text-xl font-black uppercase tracking-tight italic text-[#001c10] dark:text-white group-hover:text-[#e6b810] transition-colors">
                {match.teams}
              </h4>
              <div className="flex gap-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
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
              <span className="text-[10px] text-gray-400 dark:text-gray-600 font-bold uppercase">
                Starting from
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
