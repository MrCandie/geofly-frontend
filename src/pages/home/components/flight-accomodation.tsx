import { Hotel, Plane, Star } from "lucide-react";
import type { Flight } from "../home";

export default function FlightAccomodation({
  flights,
  getActiveStyles,
}: {
  flights: Flight[];
  getActiveStyles: (id: string) => string;
}) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-10">
      {/* Flights Column */}
      <div className={getActiveStyles("flights")} id="flights">
        <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-2 text-[#001c10] dark:text-white">
          <Plane className="text-[#e6b810]" size={20} /> Plan Your Next Away
          Game
        </h3>
        <div className="bg-white dark:bg-[#002516] border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm dark:shadow-none">
          {flights.map((flight, idx) => (
            <div
              key={idx}
              className={`p-5 flex items-center justify-between transition-colors hover:bg-gray-50 dark:hover:bg-white/5 ${
                idx !== flights.length - 1
                  ? "border-b border-black/5 dark:border-white/5"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-[#001c10] rounded-lg flex items-center justify-center text-[#e6b810]">
                  <Plane size={20} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase text-[#001c10] dark:text-white">
                    {flight.route}
                  </p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase">
                    {flight.type}
                  </p>
                </div>
              </div>
              <p className="font-black text-[#e6b810]">{flight.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hotels Column */}
      <div className={getActiveStyles("hotels")} id="hotels">
        <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-2 text-[#001c10] dark:text-white">
          <Hotel className="text-[#e6b810]" size={20} /> Nearby Luxury Stays
        </h3>
        <div className="bg-white dark:bg-[#002516] border border-black/5 dark:border-white/5 rounded-2xl p-4 flex gap-4 group cursor-pointer shadow-sm dark:shadow-none hover:border-[#e6b810]/30 transition-all">
          <div className="w-24 h-24 bg-gray-200 dark:bg-[#001c10] rounded-xl flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="flex-1 py-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-black uppercase text-sm text-[#001c10] dark:text-white group-hover:text-[#e6b810] transition-colors">
                  The Ritz-Carlton
                </h4>
                <div className="flex text-[#e6b810]">
                  <Star size={10} fill="#e6b810" />
                  <Star size={10} fill="#e6b810" />
                  <Star size={10} fill="#e6b810" />
                </div>
              </div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase mt-1">
                0.5 miles from Stadium
              </p>
            </div>
            <p className="text-sm font-black text-[#e6b810]">
              £450{" "}
              <span className="text-[10px] text-gray-400 dark:text-gray-600">
                / NIGHT
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
