import { useState, useEffect } from "react";
import {
  Hotel,
  LayoutDashboard,
  LogOut,
  Plane,
  Ticket,
  X,
  Menu,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const isActive = (id: string) => location.hash === `#${id}`;

  useEffect(() => {
    setIsOpen(false);
  }, [location.hash]);

  const navItems = [
    { id: "overview", icon: LayoutDashboard, label: "Overview" },
    { id: "tickets", icon: Ticket, label: "Match Tickets" },
    { id: "flights", icon: Plane, label: "Travel & Flights" },
    { id: "hotels", icon: Hotel, label: "Accommodations" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#e6b810] text-[#001c10] p-4 rounded-full shadow-xl active:scale-90 transition-transform"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
        fixed inset-y-0 left-0 z-[70] w-72 bg-white dark:bg-[#001c10] p-6 flex flex-col transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:w-64 lg:z-auto lg:border-r lg:border-black/5 lg:dark:border-white/5
        ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-2xl font-black italic tracking-tighter uppercase text-[#001c10] dark:text-white">
            STADIUM<span className="text-[#e6b810]">PASS</span>
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-400"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const active = isActive(item.id);
            return (
              <Link
                to={{ hash: `#${item.id}` }}
                key={item.id}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm tracking-wide uppercase ${
                  active
                    ? "bg-[#e6b810] text-[#001c10] shadow-[0_4px_20px_rgba(230,184,16,0.3)]"
                    : "text-gray-400 hover:text-[#001c10] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-black/5 dark:border-white/5">
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-500 transition-colors font-bold text-sm uppercase"
          >
            <LogOut size={18} />
            Exit System
          </button>
        </div>
      </aside>
    </>
  );
}
