"use client";

import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsIcon from "@mui/icons-material/Settings";

const links = [
  {
    title: "الرئيسية",
    href: "/admin-mastar/mainpage",
    icon: <DashboardIcon />,
  },

  {
    title: "الفرع الأول",
    href: "/admin-mastar/far31",
    icon: <StorefrontIcon />,
  },

  {
    title: "الفرع الثاني",
    href: "/admin-mastar/far32",
    icon: <StorefrontIcon />,
  },

  {
    title: "الفرع الثالث",
        href: "/admin-mastar/far33",
    icon: <StorefrontIcon />,
  },

  {
    title: "الإعدادات",
    href: "/admin-mastar/settings",
    icon: <SettingsIcon />,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="h-screen bg-[#0d0d0d] border-l border-white/10 text-white fixed top-0 right-0"
      style={{
        width: "290px",
        padding: "30px 20px",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3"
        style={{
          marginBottom: "50px",
        }}
      >
        <div
          className="bg-primary flex items-center justify-center font-black"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "18px",
            fontSize: "20px",
          }}
        >
          BP
        </div>

        <div>
          <h2
            className="font-black text-2xl"
            style={{
              marginBottom: "4px",
            }}
          >
            BROTHERS
          </h2>

          <p className="text-white/50 text-sm">
            Dashboard Panel
          </p>
        </div>
      </div>

      {/* Links */}
      <div
        className="flex flex-col"
        style={{
          gap: "12px",
        }}
      >
        {links.map((item, index) => (
          <Link key={index} href={item.href}>
            <div
              className="group flex items-center justify-between bg-white/0 hover:bg-primary transition-all duration-300 border border-white/10 hover:border-primary cursor-pointer"
              style={{
                padding: "18px 20px",
                borderRadius: "20px",
              }}
            >
              <span
                className="font-bold text-lg"
              >
                {item.title}
              </span>

              <div
                className="bg-white/5 group-hover:bg-white/10 flex items-center justify-center"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "14px",
                  fontSize: "24px",
                }}
              >
                {item.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom */}
      <div
        className="absolute bottom-6 right-0 left-0 text-center"
      >
        <p className="text-white/30 text-sm">
          BROTHERS PROTACTION © 2026
        </p>
      </div>
    </aside>
  );
}