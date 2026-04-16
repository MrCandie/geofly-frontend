import type React from "react";

export default function AuthLayout({
  title,
  badge,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  badge: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#001c10] flex items-center justify-center p-4 font-sans selection:bg-[#e6b810] selection:text-[#001c10] transition-colors duration-500">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#e6b810]/10 dark:bg-[#e6b810]/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-gray-200 dark:bg-transparent blur-[100px] rounded-full opacity-50" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-[#001c10] dark:text-white tracking-tighter italic uppercase leading-none">
            {title}
            <span className="text-[#e6b810]">{badge}</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm tracking-wide uppercase font-medium">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
