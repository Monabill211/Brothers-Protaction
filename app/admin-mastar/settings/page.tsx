"use client";

import { useState } from "react";
import LockResetIcon from "@mui/icons-material/LockReset";
import SaveIcon from "@mui/icons-material/Save";
import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";

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
    <div>
    <DashboardHeader />
    <Sidebar />
    <section
      dir="rtl"
      className="min-h-screen bg-[#0a0a0a] text-white"
      style={{
        padding: "40px",
      }}
    >
      {/* Header */}
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
              marginRight:"300px"
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
        className=""
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
              marginRight:"300px",
              marginBottom:"30px"
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
              value={passwords[item.name as keyof typeof passwords]}
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
    </section>

   </div>
  );
}