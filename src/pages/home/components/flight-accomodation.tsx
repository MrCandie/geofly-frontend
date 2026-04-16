import { Hotel, Plane, Star } from "lucide-react";
import type { Flight } from "../home";

export default function FlightAccomodation({ flights }: { flights: Flight[] }) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div>
        <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-2">
          <Plane className="text-[#e6b810]" size={20} /> Plan Your Next Away
          Game
        </h3>
        <div className="bg-[#002516] border border-white/5 rounded-2xl overflow-hidden">
          {flights.map((flight, idx) => (
            <div
              key={idx}
              className={`p-5 flex items-center justify-between ${idx !== flights.length - 1 ? "border-b border-white/5" : ""}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#001c10] rounded-lg flex items-center justify-center text-[#e6b810]">
                  <Plane size={20} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase">{flight.route}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">
                    {flight.type}
                  </p>
                </div>
              </div>
              <p className="font-black text-[#e6b810]">{flight.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-2">
          <Hotel className="text-[#e6b810]" size={20} /> Nearby Luxury Stays
        </h3>
        <div className="bg-[#002516] border border-white/5 rounded-2xl p-4 flex gap-4 group cursor-pointer">
          <div className="w-24 h-24 bg-[#001c10] rounded-xl flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="flex-1 py-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-black uppercase text-sm group-hover:text-[#e6b810]">
                  The Ritz-Carlton
                </h4>
                <div className="flex text-[#e6b810]">
                  <Star size={10} fill="#e6b810" />{" "}
                  <Star size={10} fill="#e6b810" />{" "}
                  <Star size={10} fill="#e6b810" />
                </div>
              </div>
              <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">
                0.5 miles from Stadium
              </p>
            </div>
            <p className="text-sm font-black text-[#e6b810]">
              £450 <span className="text-[10px] text-gray-600">/ NIGHT</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
