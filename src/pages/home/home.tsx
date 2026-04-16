import AppLayout from "../../layout/layout";
import Overview from "./components/overview";
import Matches from "./components/matches";
import FlightAccomodation from "./components/flight-accomodation";

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

  return (
    <AppLayout>
      <div className="p-8 max-w-7xl w-full mx-auto space-y-10">
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">
                Welcome back, Akin 👋
              </h2>
              <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">
                Your next matchday is in 4 days
              </p>
            </div>
          </div>

          <Overview />
        </section>

        <Matches matches={matches} />

        <FlightAccomodation flights={flights} />
      </div>
    </AppLayout>
  );
};

export default Home;
