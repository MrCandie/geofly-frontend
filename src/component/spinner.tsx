import { Loader2 } from "lucide-react";

export default function Spinner() {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#001c10]/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-[#e6b810] animate-spin" />
        <span className="text-[#e6b810] text-xs font-black uppercase tracking-[0.3em] animate-pulse">
          Loading Stadium...
        </span>
      </div>
    </div>
  );
}
