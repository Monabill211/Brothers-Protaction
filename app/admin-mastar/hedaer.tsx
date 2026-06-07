"use client";

import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";

export default function DashboardHeader() {
  return (
    <header
      className="bg-[#111111] border-b border-white/10"
      style={{
        padding: "20px",
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:mr-[300px]">

        {/* Title */}
        <div>
          <h1
            className="font-black text-white"
            style={{
              fontSize: "clamp(22px,5vw,32px)",
              marginBottom: "6px",
            }}
          >
            مرحبًا بك في لوحة التحكم 👋
          </h1>

          <p
            className="text-white/50"
            style={{
              fontSize: "14px",
            }}
          >
            يمكنك إدارة الفروع والخدمات والإعدادات من هنا.
          </p>
        </div>

        {/* Button */}
        <Link
          href="/"
          className="w-full lg:w-auto"
        >
          <button
            className="bg-primary hover:scale-105 text-white font-bold transition-all duration-300 flex items-center justify-center gap-3 w-full lg:w-[220px]"
            style={{
              height: "58px",
              borderRadius: "18px",
              fontSize: "16px",
            }}
          >
            الذهاب إلى الموقع
            <LanguageIcon />
          </button>
        </Link>

      </div>
    </header>
  );
}