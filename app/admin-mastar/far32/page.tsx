"use client";

import React, { useState } from "react";
import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";
import { supabase } from "../../lib/supabase";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ConstructionIcon from "@mui/icons-material/Construction";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function Page() {
  const [form, setForm] = useState({
    car: "", owner: "", salesman: "", phone: "", total: "", paid: "",
    remaining: "", deliveryDate: "", status: "جاري العمل عليها",
    service: "", notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

   const { error } = await supabase
  .from("cars")
  .insert([{
    car: form.car,
    service: form.service,
    total_price: Number(form.total),  // ← هنا
    paid: Number(form.paid),
    remaining: Number(form.remaining),
    status: form.status,
    notes: form.notes,
    deliveredat: form.deliveryDate || null,
    salesman: form.salesman,
    nameownercar: form.owner,
    phone: form.phone,
  }]);

    setLoading(false);

    if (error) {
      alert("حصل خطأ: " + error.message);
    } else {
      alert("تم إضافة السيارة بنجاح ✅");
      setForm({ car: "", owner: "", salesman: "", phone: "", total: "", paid: "", remaining: "", deliveryDate: "", status: "جاري العمل عليها", service: "", notes: "" });
    }
  };

  return (
    <>
      <DashboardHeader />
      <Sidebar />

      <div style={{ marginRight: "300px", padding: "30px" }} className="dashboard-content">

        {/* Stats */}
        <div className="flex justify-evenly flex-wrap" style={{ marginBottom: "50px", gap: "20px" }}>
          {[
            { label: "الإيرادات", value: "$1,250", icon: <AccountBalanceWalletIcon style={{ marginRight: "10px" }} /> },
            { label: "الخدمات", value: "35", icon: <ConstructionIcon style={{ marginRight: "10px" }} /> },
            { label: "الزيارات", value: "120", icon: <DirectionsRunIcon style={{ marginRight: "10px" }} /> },
            { label: "التقارير", value: "8", icon: <AssessmentIcon style={{ marginRight: "10px" }} /> },
          ].map((s, i) => (
            <div key={i}
              className="bg-primary text-white rounded-3xl flex items-center justify-center flex-col gap-3 shadow-lg"
              style={{ padding: "20px", minWidth: "160px", flex: "1 1 160px", maxWidth: "200px" }}
            >
              <span className="text-xl font-bold">{s.label}{s.icon}</span>
              <span className="text-2xl font-black">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Cars Sections */}
        <div className="flex justify-center flex-wrap" style={{ gap: "30px", marginBottom: "40px" }}>
          <div className="flex flex-col gap-5 border border-primary rounded-[10px]" style={{ padding: "20px", flex: "1 1 280px", minWidth: "280px" }}>
            <div className="text-white text-center text-2xl font-black">العربيات القادمة</div>
            {["BMW M4 - غدًا", "Mercedes C200 - الأحد", "Audi RS5 - الإثنين", "Toyota Corolla - الثلاثاء"].map((car, i) => (
              <div key={i} className="bg-primary-dark text-[18px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300" style={{ padding: "12px" }}>{car}</div>
            ))}
          </div>
          <div className="flex flex-col gap-5 border border-primary rounded-[10px]" style={{ padding: "20px", flex: "1 1 280px", minWidth: "280px" }}>
            <div className="text-white text-center text-2xl font-black">آخر عربيات تم العمل عليها</div>
            {["BMW M5", "Audi A6", "Mercedes E200", "Hyundai Elantra"].map((car, i) => (
              <div key={i} className="bg-primary-light text-[18px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300" style={{ padding: "12px" }}>{car}</div>
            ))}
          </div>
        </div>

        {/* Add Car Form */}
        <div className="border border-primary rounded-[10px]" style={{ padding: "25px" }}>
          <h2 className="text-2xl font-black text-center text-white" style={{ marginBottom: "25px" }}>
            إضافة سيارة
          </h2>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>

            {/* اسم السيارة */}
            <div>
              <label className="block font-bold mb-2">اسم السيارة</label>
              <input type="text" name="car" value={form.car} onChange={handleChange}
                placeholder="BMW M4"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            {/* اسم المالك */}
            <div>
              <label className="block font-bold mb-2">اسم مالك السيارة</label>
              <input type="text" name="owner" value={form.owner} onChange={handleChange}
                placeholder="محمد أحمد"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            {/* رقم الهاتف */}
            <div>
              <label className="block font-bold mb-2">رقم تليفون المالك</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="01xxxxxxxxx"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            {/* اسم السيلز مان */}
            <div>
              <label className="block font-bold mb-2">اسم السيلز مان</label>
              <input type="text" name="salesman" value={form.salesman} onChange={handleChange}
                placeholder="أحمد خالد"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            {/* نوع الخدمة */}
            <div>
              <label className="block font-bold mb-2">نوع الخدمة</label>
              <select name="service" value={form.service} onChange={handleChange}
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }}
              >
                <option value="">اختر الخدمة</option>
                <option>أفلام حماية PPF</option>
                <option>عزل حراري</option>
                <option>نانو سيراميك</option>
                <option>تلميع سيارات</option>
              </select>
            </div>

            {/* المبلغ الكلي */}
            <div>
              <label className="block font-bold mb-2">المبلغ الكلي</label>
              <input type="number" name="total" value={form.total} onChange={handleChange}
                placeholder="5000"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            {/* المدفوع */}
            <div>
              <label className="block font-bold mb-2">المدفوع</label>
              <input type="number" name="paid" value={form.paid} onChange={handleChange}
                placeholder="3000"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            {/* المتبقي */}
            <div>
              <label className="block font-bold mb-2">المتبقي</label>
              <input type="number" name="remaining" value={form.remaining} onChange={handleChange}
                placeholder="2000"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            {/* تاريخ التسليم */}
            <div>
              <label className="block font-bold mb-2">تاريخ التسليم</label>
              <input type="date" name="deliveryDate" value={form.deliveryDate} onChange={handleChange}
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            {/* حالة السيارة */}
            <div>
              <label className="block font-bold mb-2">حالة السيارة</label>
              <select name="status" value={form.status} onChange={handleChange}
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }}
              >
                <option>جاري العمل عليها</option>
                <option>تم التسليم</option>
              </select>
            </div>

            {/* ملاحظات */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label className="block font-bold mb-2">ملاحظات</label>
              <textarea rows={4} name="notes" value={form.notes} onChange={handleChange}
                placeholder="أي ملاحظات إضافية..."
                className="w-full rounded-xl bg-primary-dark border border-primary outline-none resize-none"
                style={{ padding: "10px" }} />
            </div>

            {/* زر الحفظ */}
            <button
              type="submit"
              disabled={loading}
              style={{ gridColumn: "1 / -1" }}
              className="bg-primary h-14 rounded-2xl text-xl font-black hover:scale-105 transition-all duration-300 w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "جاري الإضافة..." : "إضافة السيارة"}
            </button>
          </form>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .dashboard-content { margin-right: 0 !important; padding: 16px !important; }
        }
      `}</style>
    </>
  );
}