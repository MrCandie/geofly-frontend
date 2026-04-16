import { useNavigate } from "react-router-dom";
import { Ghost, Home } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#001c10] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        <Ghost className="w-24 h-24 text-[#e6b810]/20 animate-bounce" />
        <h1 className="absolute inset-0 flex items-center justify-center text-8xl font-black text-[#e6b810] italic tracking-tighter opacity-90">
          404
        </h1>
      </div>

      <h2 className="text-2xl font-black text-white uppercase italic tracking-tight mb-2">
        You're Offsides
      </h2>

      <p className="text-gray-500 text-sm max-w-xs mb-10 uppercase tracking-widest font-bold leading-relaxed">
        The page you are looking for has been moved or doesn't exist on this
        pitch.
      </p>

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-3 bg-[#e6b810] text-[#001c10] px-8 py-4 rounded-xl font-black uppercase tracking-tighter hover:bg-[#ffcc14] transition-all active:scale-95 shadow-[0_10px_30px_rgba(230,184,16,0.2)]"
      >
        <Home size={18} />
        Return to Home
      </button>

      <div className="mt-12">
        <div className="h-[1px] w-12 bg-white/10 mx-auto" />
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold mt-4">
          StadiumPass Security Protocol
        </p>
      </div>
    </div>
  );
}
