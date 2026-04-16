import React, { useState } from "react";
import { Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layout/auth-layout";
import { usePost } from "../../hooks/usePost";
import { API_URL } from "../../utils/http";
import { useAuth } from "../../context/auth";
import GoogleAuth from "../../component/google-auth";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginHandler = usePost({
    url: `${API_URL}/v1/auth/login`,
    title: "Login Successful",
    onSuccess: (data) => {
      login(data?.data?.user, data?.token);
      navigate("/");
    },
    queryKey: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginHandler.mutate({ email, password });
  };

  const isEmailValid = (val: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  return (
    <AuthLayout badge="PASS" title="STADIUM" subtitle="Authentication Portal">
      <div className="bg-white dark:bg-[#002516] border border-black/5 dark:border-white/5 p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500">
        <form onSubmit={handleSubmit} className="space-y-6">
          <GoogleAuth />

          <div className="flex items-center gap-4 py-2">
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/5" />
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest">
              OR
            </span>
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/5" />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6b810] mb-2 px-1">
              Player Email
            </label>
            <div className="relative group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 dark:bg-[#001c10] border border-black/5 dark:border-white/10 rounded-xl px-4 py-4 text-[#001c10] dark:text-white focus:outline-none focus:border-[#e6b810] transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-600"
                placeholder="e.g. akin@stadium.com"
              />
              {isEmailValid(email) && (
                <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5 animate-in zoom-in" />
              )}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2 px-1">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6b810]">
                Security Key
              </label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 dark:bg-[#001c10] border border-black/5 dark:border-white/10 rounded-xl px-4 py-4 text-[#001c10] dark:text-white focus:outline-none focus:border-[#e6b810] transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-600"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-400 hover:text-[#e6b810] transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loginHandler.isPending}
            className="group relative w-full bg-[#e6b810] text-[#001c10] font-black py-5 rounded-xl uppercase tracking-tighter hover:bg-[#ffcc14] active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-70 overflow-hidden shadow-[0_10px_30px_rgba(230,184,16,0.2)]"
          >
            <span
              className={`flex items-center gap-2 ${
                loginHandler.isPending ? "opacity-0" : "opacity-100"
              }`}
            >
              Enter Stadium
            </span>
            {loginHandler.isPending && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="animate-spin w-6 h-6" />
              </div>
            )}
          </button>

          <div className="pt-4 flex flex-col gap-4 items-center">
            <div className="h-[1px] w-12 bg-black/5 dark:bg-white/10" />
            <Link
              to="/register"
              className="text-xs text-gray-500 dark:text-gray-400"
            >
              New scout?{" "}
              <span className="text-[#e6b810] cursor-pointer hover:underline font-bold">
                Create Account
              </span>
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
