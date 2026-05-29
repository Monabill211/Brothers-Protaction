"use client";

import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";

export default function DashboardHeader() {
  return (
    <header
      className="bg-[#111111] border-b border-white/10 flex items-center justify-between"
      style={{
        height: "90px",
        padding: "0 35px",
      }}
    >
      {/* Left */}
      <div style={{marginRight:"300px"}}>
        <h1
          className="font-black text-white"
          style={{
            fontSize: "32px",
            marginBottom: "6px",
          }}
        >
          مرحبًا بك في لوحة التحكم 👋
        </h1>

        <p className="text-white/50">
          يمكنك إدارة الفروع والخدمات والإعدادات من هنا.
        </p>
      </div>

      {/* Right */}
      <Link href="/">
        <button
          className="bg-primary hover:scale-105 text-white font-bold transition-all duration-300 flex items-center justify-center gap-3"
          style={{
            width: "220px",
            height: "58px",
            borderRadius: "18px",
            fontSize: "16px",
          }}
        >
          الذهاب إلى الموقع
          <LanguageIcon />
        </button>
      </Link>
    </header>
  );
}