"use client";

import { useState } from "react";
import Link from "next/link";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import LockResetIcon from "@mui/icons-material/LockReset";
import SaveIcon from "@mui/icons-material/Save";

export default function SettingsPage() {
  const [passwords, setPasswords] = useState({
    admin: "",
    branch1: "",
    branch2: "",
    branch3: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const links = [
    {
      title: "الرئيسية",
      href: "/dashboard",
      icon: <DashboardIcon />,
    },

    {
      title: "الفرع الأول",
      href: "/dashboard/branch-1",
      icon: <StorefrontIcon />,
    },

    {
      title: "الفرع الثاني",
      href: "/dashboard/branch-2",
      icon: <DirectionsCarIcon />,
    },

    {
      title: "الفرع الثالث",
      href: "/dashboard/branch-3",
      icon: <AutoAwesomeIcon />,
    },

    {
      title: "الإعدادات",
      href: "/dashboard/settings",
      icon: <SettingsIcon />,
    },
  ];

  const settingsCards = [
    {
      title: "باسورد لوحة التحكم الرئيسية",
      name: "admin",
      placeholder: "ادخل الباسورد الجديد",
    },

    {
      title: "باسورد الفرع الأول",
      name: "branch1",
      placeholder: "ادخل الباسورد الجديد",
    },

    {
      title: "باسورد الفرع الثاني",
      name: "branch2",
      placeholder: "ادخل الباسورد الجديد",
    },

    {
      title: "باسورد الفرع الثالث",
      name: "branch3",
      placeholder: "ادخل الباسورد الجديد",
    },
  ];

  return (
    <section
      dir="rtl"
      className="bg-[#0a0a0a] text-white min-h-screen flex"
    >
      {/* Sidebar */}
      <aside
        className="h-screen bg-[#0d0d0d] border-l border-white/10 fixed top-0 right-0"
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
                className={`group flex items-center justify-between border transition-all duration-300 cursor-pointer ${
                  item.title === "الإعدادات"
                    ? "bg-primary border-primary"
                    : "bg-white/0 border-white/10 hover:bg-primary hover:border-primary"
                }`}
                style={{
                  padding: "18px 20px",
                  borderRadius: "20px",
                }}
              >
                <span className="font-bold text-lg">
                  {item.title}
                </span>

                <div
                  className="bg-white/10 flex items-center justify-center"
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

      {/* Main */}
      <div
        className="flex-1"
        style={{
          marginRight: "290px",
        }}
      >
        {/* Header */}
        <header
          className="bg-[#111111] border-b border-white/10 flex items-center justify-between"
          style={{
            height: "90px",
            padding: "0 35px",
          }}
        >
          {/* Left */}
          <div>
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

        {/* Content */}
        <div
          style={{
            padding: "40px",
          }}
        >
          {/* Page Header */}
          <div
            className="flex items-center justify-between flex-wrap"
            style={{
              marginBottom: "40px",
              gap: "20px",
            }}
          >
            <div>
              <p className="text-primary text-sm font-bold tracking-[3px]">
                SETTINGS
              </p>

              <h1
                className="text-4xl font-black"
                style={{
                  marginTop: "10px",
                }}
              >
                إعدادات لوحة التحكم
              </h1>
            </div>

            <button
              className="bg-primary hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-bold"
              style={{
                height: "52px",
                padding: "0 24px",
                borderRadius: "16px",
              }}
            >
              حفظ جميع التعديلات
              <SaveIcon />
            </button>
          </div>

          {/* Settings Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{
              gap: "25px",
            }}
          >
            {settingsCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-white/10 hover:border-primary/40 transition-all duration-300"
                style={{
                  borderRadius: "28px",
                  padding: "30px",
                }}
              >
                {/* Icon */}
                <div
                  className="bg-primary/10 text-primary flex items-center justify-center"
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "18px",
                    marginBottom: "24px",
                  }}
                >
                  <LockResetIcon
                    style={{
                      fontSize: "32px",
                    }}
                  />
                </div>

                {/* Title */}
                <h2
                  className="text-2xl font-black"
                  style={{
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  className="text-white/50 text-sm leading-7"
                  style={{
                    marginBottom: "24px",
                  }}
                >
                  يمكنك تغيير كلمة المرور الخاصة بهذا القسم من هنا.
                </p>

                {/* Input */}
                <input
                  type="password"
                  name={item.name}
                  value={
                    passwords[
                      item.name as keyof typeof passwords
                    ]
                  }
                  onChange={handleChange}
                  placeholder={item.placeholder}
                  className="w-full bg-[#0d0d0d] border border-white/10 focus:border-primary outline-none transition-all duration-300"
                  style={{
                    height: "56px",
                    borderRadius: "18px",
                    padding: "0 20px",
                    marginBottom: "20px",
                  }}
                />

                {/* Button */}
                <button
                  className="w-full bg-primary text-white font-bold hover:scale-[1.02] transition-all duration-300"
                  style={{
                    height: "52px",
                    borderRadius: "18px",
                  }}
                >
                  حفظ الباسورد
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}