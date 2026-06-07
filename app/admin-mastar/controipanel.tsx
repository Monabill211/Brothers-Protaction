"use client";

import Link from "next/link";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { title: "الرئيسية", href: "/admin-mastar/mainpage", icon: <DashboardIcon /> },
  { title: "الفرع الأول", href: "/admin-mastar/far31", icon: <StorefrontIcon /> },
  // { title: "الفرع الثاني", href: "/admin-mastar/far32", icon: <StorefrontIcon /> },
  // { title: "الفرع الثالث", href: "/admin-mastar/far33", icon: <StorefrontIcon /> },
  { title: "الإعدادات", href: "/admin-mastar/settings", icon: <SettingsIcon /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ══ Mobile Toggle Button ══ */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 right-4 z-[60] bg-primary text-white"
        style={{ width: "44px", height: "44px", borderRadius: "12px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* ══ Overlay (mobile) ══ */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ══ Sidebar ══ */}
      <aside
        className="h-screen bg-[#0d0d0d] border-l border-white/10 text-white fixed top-0 right-0 z-50"
        style={{
          width: "290px",
          padding: "30px 20px",
          transition: "transform 0.3s ease",
          transform: open ? "translateX(0)" : undefined,
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3" style={{ marginBottom: "50px" }}>
          <div
            className="bg-primary flex items-center justify-center font-black"
            style={{ width: "55px", height: "55px", borderRadius: "18px", fontSize: "20px", flexShrink: 0 }}
          >
            BP
          </div>
          <div>
            <h2 className="font-black text-2xl" style={{ marginBottom: "4px" }}>BROTHERS</h2>
            <p className="text-white/50 text-sm">Dashboard Panel</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col" style={{ gap: "12px" }}>
          {links.map((item, index) => (
            <Link key={index} href={item.href} onClick={() => setOpen(false)}>
              <div
                className="group flex items-center justify-between bg-white/0 hover:bg-primary transition-all duration-300 border border-white/10 hover:border-primary cursor-pointer"
                style={{ padding: "18px 20px", borderRadius: "20px" }}
              >
                <span className="font-bold text-lg">{item.title}</span>
                <div
                  className="bg-white/5 group-hover:bg-white/10 flex items-center justify-center"
                  style={{ width: "45px", height: "45px", borderRadius: "14px", fontSize: "24px", flexShrink: 0 }}
                >
                  {item.icon}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="absolute bottom-6 right-0 left-0 text-center">
          <p className="text-white/30 text-sm">BROTHERS PROTACTION © 2026</p>
        </div>
      </aside>

      <style>{`
        @media (max-width: 768px) {
          aside {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}