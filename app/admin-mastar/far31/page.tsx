"use client";

import React, { useEffect, useState } from "react";
import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";
import { supabase } from "../../lib/supabase";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ConstructionIcon from "@mui/icons-material/Construction";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssessmentIcon from "@mui/icons-material/Assessment";

const SALESMEN = ["أحمد محمد", "محمود علي", "كريم سامي"];

type Car = {
  id: string;
  car: string;
  service: string;
  total_price: number;
  paid: number;
  remaining: number;
  status: string;
  salesman: string;
  nameownercar: string;
  phone: string;
  notes: string;
  deliveredat: string;
  created_at: string;
};

export default function Page() {
  const [form, setForm] = useState({
    car: "", owner: "", salesman: "", phone: "", total: "", paid: "",
    remaining: "", deliveryDate: "", status: "جاري العمل عليها",
    service: "", notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setCars(data);
  }

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
        total_price: Number(form.total),
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
      getCars(); // refresh
    }
  };

  // Stats
  const totalRevenue = cars.reduce((a, c) => a + (c.paid ?? 0), 0);
  const totalWorking = cars.filter(c => c.status === "جاري العمل عليها").length;
  const totalDelivered = cars.filter(c => c.status === "تم التسليم").length;

  // Last 4 cars
  const lastCars = cars.slice(0, 4);

  return (
    <>
      <DashboardHeader />
      <Sidebar />

      <div style={{ marginRight: "300px", padding: "30px" }} className="dashboard-content">

        {/* Stats */}
        <div className="flex justify-evenly flex-wrap" style={{ marginBottom: "50px", gap: "20px" }}>
          {[
            { label: "الإيرادات", value: `${totalRevenue.toLocaleString()} ج`, icon: <AccountBalanceWalletIcon style={{ marginRight: "10px" }} /> },
            { label: "قيد التنفيذ", value: totalWorking, icon: <ConstructionIcon style={{ marginRight: "10px" }} /> },
            { label: "تم التسليم", value: totalDelivered, icon: <DirectionsRunIcon style={{ marginRight: "10px" }} /> },
            { label: "إجمالي السيارات", value: cars.length, icon: <AssessmentIcon style={{ marginRight: "10px" }} /> },
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

          {/* Working Cars */}
          <div className="flex flex-col gap-5 border border-primary rounded-[10px]" style={{ padding: "20px", flex: "1 1 280px", minWidth: "280px" }}>
            <div className="text-white text-center text-2xl font-black">العربيات الجاري العمل عليها</div>
            {cars.filter(c => c.status === "جاري العمل عليها").slice(0, 5).length === 0 ? (
              <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", fontSize: "0.9rem" }}>لا توجد سيارات</p>
            ) : (
              cars.filter(c => c.status === "جاري العمل عليها").slice(0, 5).map((car) => (
                <div key={car.id}
                  className="bg-primary-dark text-[16px] font-bold rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300"
                  style={{ padding: "12px" }}
                >
                  {car.car}
                  <span style={{ fontSize: "0.75rem", opacity: 0.6, marginRight: "8px" }}>— {car.salesman}</span>
                </div>
              ))
            )}
          </div>

          {/* Last worked cars */}
          <div className="border border-primary" style={{ borderRadius: "16px", padding: "20px", flex: "1 1 280px", minWidth: "280px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ color: "#fff", textAlign: "center", fontWeight: 900, fontSize: "1.2rem", margin: 0 }}>
              آخر عربيات تم العمل عليها
            </p>
            {lastCars.length === 0 ? (
              <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", fontSize: "0.9rem" }}>لا توجد سيارات</p>
            ) : (
              lastCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-primary-light hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ borderRadius: "14px", padding: "12px", fontWeight: 700, textAlign: "center", color: "#fff", fontSize: "0.95rem" }}
                >
                  {car.car}
                  <span style={{ fontSize: "0.75rem", opacity: 0.7, marginRight: "8px" }}>— {car.salesman}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Add Car Form */}
        <div className="border border-primary rounded-[10px]" style={{ padding: "25px" }}>
          <h2 className="text-2xl font-black text-center text-white" style={{ marginBottom: "25px" }}>
            إضافة سيارة
          </h2>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>

            <div>
              <label className="block font-bold mb-2">اسم السيارة</label>
              <input type="text" name="car" value={form.car} onChange={handleChange}
                placeholder="BMW M4"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            <div>
              <label className="block font-bold mb-2">اسم مالك السيارة</label>
              <input type="text" name="owner" value={form.owner} onChange={handleChange}
                placeholder="محمد أحمد"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            <div>
              <label className="block font-bold mb-2">رقم تليفون المالك</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="01xxxxxxxxx"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            <div>
              <label className="block font-bold mb-2">اسم السيلز مان</label>
              <select name="salesman" value={form.salesman} onChange={handleChange}
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }}
              >
                <option value="">اختر السيلز مان</option>
                {SALESMEN.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

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

            <div>
              <label className="block font-bold mb-2">المبلغ الكلي</label>
              <input type="number" name="total" value={form.total} onChange={handleChange}
                placeholder="5000"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            <div>
              <label className="block font-bold mb-2">المدفوع</label>
              <input type="number" name="paid" value={form.paid} onChange={handleChange}
                placeholder="3000"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            <div>
              <label className="block font-bold mb-2">المتبقي</label>
              <input type="number" name="remaining" value={form.remaining} onChange={handleChange}
                placeholder="2000"
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

            <div>
              <label className="block font-bold mb-2">تاريخ التسليم</label>
              <input type="date" name="deliveryDate" value={form.deliveryDate} onChange={handleChange}
                className="w-full h-12 rounded-xl bg-primary-dark border border-primary outline-none"
                style={{ padding: "10px" }} />
            </div>

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

            <div style={{ gridColumn: "1 / -1" }}>
              <label className="block font-bold mb-2">ملاحظات</label>
              <textarea rows={4} name="notes" value={form.notes} onChange={handleChange}
                placeholder="أي ملاحظات إضافية..."
                className="w-full rounded-xl bg-primary-dark border border-primary outline-none resize-none"
                style={{ padding: "10px" }} />
            </div>

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