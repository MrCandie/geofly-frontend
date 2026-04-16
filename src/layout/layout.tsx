import type React from "react";
import Header from "./header";
import SideBar from "./sidebar";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useEffect } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  const token = searchParam.get("token");
  const email = searchParam.get("email");
  const name = searchParam.get("name");

  useEffect(() => {
    if (token && email && name) {
      login({ email, fullName: name }, token);

      navigate(window.location.pathname, { replace: true });
    }
  }, [name, email, token, login, navigate]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#001c10] text-[#001c10] dark:text-white font-sans flex transition-colors duration-500">
      <SideBar />
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
