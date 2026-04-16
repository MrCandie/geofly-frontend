import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import AppLayout from "../../layout/layout";
import Overview from "./components/overview";
import Matches from "./components/matches";
import FlightAccomodation from "./components/flight-accomodation";
import { useAuth } from "../../context/auth";
import { useTheme } from "../../context/theme";

export interface Match {
  id: number | string;
  teams: string;
  date: string;
  stadium: string;
  price: string;
}

export interface Flight {
  id: string | number;
  route: string;
  type: string;
  price: string;
}

const Home = () => {
  const { user } = useAuth();
  const { hash } = useLocation();
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  const matches: Match[] = [
    {
      id: 1,
      teams: "Arsenal vs Man City",
      date: "Apr 24, 2026",
      stadium: "Emirates Stadium",
      price: "£120",
    },
    {
      id: 2,
      teams: "Real Madrid vs Barcelona",
      date: "May 02, 2026",
      stadium: "Santiago Bernabéu",
      price: "€250",
    },
  ];

  const flights: Flight[] = [
    {
      id: 1,
      route: "Lagos → London",
      type: "Matchday Special",
      price: "₦850,000",
    },
    {
      id: 2,
      route: "Lagos → Madrid",
      type: "Business Class",
      price: "₦1,200,000",
    },
  ];

  const getActiveStyles = (id: string) => {
    const isActive = hash === `#${id}`;
    const offsetColor =
      theme === "dark" ? "ring-offset-[#001c10]" : "ring-offset-white";

    return isActive
      ? `ring-2 ring-[#e6b810] ring-offset-8 ${offsetColor} rounded-2xl transition-all duration-500 shadow-[0_0_40px_rgba(230,184,16,0.15)]`
      : "transition-all duration-500";
  };

  return (
    <AppLayout>
      <div className="p-8 max-w-7xl w-full mx-auto space-y-20 transition-colors duration-500">
        <section id="overview" className={getActiveStyles("overview")}>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter dark:text-white text-[#001c10]">
                Welcome back, {user?.fullName} 👋
              </h2>
              <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">
                Your next matchday is in 4 days
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-[#002516] dark:bg-white/5 border border-white/10 text-[#e6b810] hover:scale-110 transition-all active:scale-95 shadow-lg"
            >
              {theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} className="text-[#001c10]" />
              )}
            </button>
          </div>
          <Overview />
        </section>

        <section id="tickets" className={getActiveStyles("tickets")}>
          <Matches matches={matches} />
        </section>

        <section>
          <FlightAccomodation
            getActiveStyles={getActiveStyles}
            flights={flights}
          />
        </section>
      </div>
    </AppLayout>
  );
};

export default Home;
