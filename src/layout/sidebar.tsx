import { Hotel, LayoutDashboard, LogOut, Plane, Ticket } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function SideBar() {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <aside className="w-64 border-r border-white/5 bg-[#001c10] hidden lg:flex flex-col p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-black italic tracking-tighter uppercase">
          STADIUM<span className="text-[#e6b810]">PASS</span>
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {[
          { id: "/overview", icon: LayoutDashboard, label: "Overview" },
          { id: "/tickets", icon: Ticket, label: "Match Tickets" },
          { id: "/flights", icon: Plane, label: "Travel & Flights" },
          { id: "/hotels", icon: Hotel, label: "Accommodations" },
        ].map((item) => {
          return (
            <Link
              to={item?.id}
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm tracking-wide uppercase ${
                location.pathname === item.id
                  ? "bg-[#e6b810] text-[#001c10]"
                  : "text-gray-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-white/5">
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-400 transition-colors font-bold text-sm uppercase"
        >
          <LogOut size={18} />
          Exit System
        </button>
      </div>
    </aside>
  );
}
