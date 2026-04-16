import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
  User,
  Mail,
  ShieldCheck,
} from "lucide-react";
import AuthLayout from "../../layout/auth-layout";
import { usePost } from "../../hooks/usePost";
import { API_URL } from "../../utils/http";
import { useAuth } from "../../context/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleAuth from "../../component/google-auth";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const passwordStrength = (() => {
    let strength = 0;
    if (formData.password.length > 7) strength++;
    if (/[A-Z]/.test(formData.password)) strength++;
    if (/[0-9]/.test(formData.password)) strength++;
    if (/[!@#$%^&*]/.test(formData.password)) strength++;
    return strength;
  })();

  const isEmailValid = (val: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  console.log(passwordStrength);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signupHandler = usePost({
    url: `${API_URL}/v1/auth/signup`,
    title: "Signup Successful",
    onSuccess: (data) => {
      login(data?.data?.user, data?.token);
      navigate("/");
    },
    queryKey: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email)
      return toast.error("Name and email are required");
    if (!isEmailValid(formData.email))
      return toast.error("Invalid email format");
    if (formData.password !== formData.confirmPassword)
      return toast.error("Passwords do not match");

    if (passwordStrength === 0)
      return toast.error("Password cannot be less than 7 characters");
    if (passwordStrength === 1)
      return toast.error(
        "Password must contain uppercase and lowercase character",
      );
    if (passwordStrength === 2)
      return toast.error("Password must contain at least 1 number");

    if (passwordStrength === 3)
      return toast.error("Password must contain at least 1 special character");

    signupHandler.mutate(formData);
  };

  return (
    <AuthLayout
      badge="CLUB"
      title="JOIN THE"
      subtitle="Create your player profile"
    >
      <div className="bg-[#002516] border border-white/5 p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <form onSubmit={handleSubmit} className="space-y-5">
          <GoogleAuth />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6b810] mb-2 px-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-4 text-gray-600 w-5 h-5" />
                <input
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#001c10] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-[#e6b810] transition-all placeholder:text-gray-700"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6b810] mb-2 px-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-600 w-5 h-5" />
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#001c10] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-[#e6b810] transition-all placeholder:text-gray-700"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6b810] mb-2 px-1">
              Create Password
            </label>
            <div className="relative">
              <ShieldCheck className="absolute left-4 top-4 text-gray-600 w-5 h-5" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#001c10] border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white focus:outline-none focus:border-[#e6b810] transition-all placeholder:text-gray-700"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500 hover:text-[#e6b810]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex gap-1.5 mt-3 px-1">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                    passwordStrength >= step ? "bg-[#e6b810]" : "bg-white/5"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6b810] mb-2 px-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-[#001c10] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#e6b810] transition-all placeholder:text-gray-700"
                placeholder="••••••••"
              />
              {formData.confirmPassword &&
                formData.password === formData.confirmPassword && (
                  <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />
                )}
            </div>
          </div>

          <button
            type="submit"
            disabled={signupHandler.isPending}
            className="w-full bg-[#e6b810] text-[#001c10] font-black py-5 rounded-xl uppercase tracking-tighter hover:bg-[#ffcc14] active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-70 mt-4"
          >
            {signupHandler.isPending ? (
              <Loader2 className="animate-spin w-6 h-6" />
            ) : (
              "Sign Up Now"
            )}
          </button>

          <Link to="/login" className="text-center text-xs text-gray-500 mt-6">
            Already have an account?
            <span className="text-[#e6b810] cursor-pointer hover:underline font-bold ml-1">
              Login
            </span>
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
