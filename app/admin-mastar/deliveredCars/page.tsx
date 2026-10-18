"use client";

import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";
import { useState } from "react";

type Car = {
  id: string;
  car: string;
  service: string;
  paid: number;
  total_price: number;
  remaining: number;
  deliveredat: string;
  status: string;
  salesman: string;
  nameownercar: string;
  phone: string;
  notes: string;
  created_at: string;
};

const MOCK_CARS: Car[] = [
  { id: "1", car: "BMW X5 2022", service: "PPF كامل", paid: 15000, total_price: 15000, remaining: 0, deliveredat: "2024-10-01", status: "تم التسليم", salesman: "أحمد محمد", nameownercar: "كريم عبدالله", phone: "01012345678", notes: "", created_at: "2024-09-28" },
  { id: "2", car: "Mercedes GLE 2023", service: "نانو سيراميك", paid: 8000, total_price: 9000, remaining: 1000, deliveredat: "2024-10-03", status: "تم التسليم", salesman: "محمود علي", nameownercar: "سامي حسن", phone: "01098765432", notes: "عميل VIP", created_at: "2024-10-01" },
  { id: "3", car: "Toyota Land Cruiser 2021", service: "تلميع + PPF جزئي", paid: 12000, total_price: 12000, remaining: 0, deliveredat: "2024-10-05", status: "تم التسليم", salesman: "كريم سامي", nameownercar: "محمد الشافعي", phone: "01155443322", notes: "", created_at: "2024-10-03" },
  { id: "4", car: "Porsche Cayenne 2023", service: "PPF كامل + تلميع", paid: 22000, total_price: 22000, remaining: 0, deliveredat: "2024-10-07", status: "تم التسليم", salesman: "أحمد محمد", nameownercar: "يوسف منصور", phone: "01223344556", notes: "", created_at: "2024-10-05" },
  { id: "5", car: "Range Rover Vogue 2022", service: "عزل حراري كامل", paid: 6500, total_price: 7000, remaining: 500, deliveredat: "2024-10-09", status: "تم التسليم", salesman: "محمود علي", nameownercar: "هاني إبراهيم", phone: "01567891234", notes: "تسليم متأخر", created_at: "2024-10-07" },
  { id: "6", car: "Audi Q8 2023", service: "نانو سيراميك + تلميع", paid: 9500, total_price: 9500, remaining: 0, deliveredat: "2024-10-11", status: "تم التسليم", salesman: "كريم سامي", nameownercar: "عمر فاروق", phone: "01334455667", notes: "", created_at: "2024-10-09" },
  { id: "7", car: "Lexus LX600 2023", service: "PPF جزئي", paid: 7000, total_price: 8000, remaining: 1000, deliveredat: "2024-10-13", status: "تم التسليم", salesman: "أحمد محمد", nameownercar: "طارق رضا", phone: "01445566778", notes: "", created_at: "2024-10-11" },
  { id: "8", car: "Chevrolet Tahoe 2022", service: "تلميع احترافي", paid: 3500, total_price: 3500, remaining: 0, deliveredat: "2024-10-14", status: "تم التسليم", salesman: "محمود علي", nameownercar: "أحمد السيد", phone: "01678912345", notes: "عميل جديد", created_at: "2024-10-12" },
];

export default function Page() {
  const [filter, setFilter] = useState("الكل");

  const salesmen = ["الكل", ...Array.from(new Set(MOCK_CARS.map((c) => c.salesman)))];
  const filtered = filter === "الكل" ? MOCK_CARS : MOCK_CARS.filter((c) => c.salesman === filter);
  const totalRevenue = filtered.reduce((acc, item) => acc + (item.paid ?? 0), 0);

  return (
    <>
      <DashboardHeader />
      <Sidebar />

      <div className="delivered-content" style={{ marginRight: "300px", padding: "30px" }}>

        {/* Title */}
        <div className="bg-primary-dark border border-primary rounded-3xl" style={{ padding: "25px", marginBottom: "30px" }}>
          <h1 className="text-3xl md:text-4xl font-black text-center">السيارات التي تم تسليمها</h1>
          <p className="text-center text-white/60 mt-3">جميع السيارات التي انتهى العمل عليها وتم تسليمها للعملاء</p>
        </div>

        {/* Filter */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
          {salesmen.map((s) => (
            <button key={s} onClick={() => setFilter(s)} style={{
              padding: "9px 20px", borderRadius: "12px", border: "none",
              cursor: "pointer", fontWeight: 700, fontSize: "0.85rem", transition: "all 0.2s",
              background: filter === s ? "linear-gradient(135deg,#DC2626,#F97316)" : "rgba(255,255,255,0.08)",
              color: filter === s ? "#fff" : "rgba(255,255,255,0.6)",
            }}>{s}</button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "20px", marginBottom: "30px" }}>
          <div className="bg-primary rounded-3xl text-center" style={{ padding: "25px" }}>
            <h2 className="text-4xl font-black">{filtered.length}</h2>
            <p className="font-bold mt-2">عدد السيارات المسلمة</p>
          </div>
          <div className="border border-primary rounded-3xl text-center" style={{ padding: "25px" }}>
            <h2 className="text-4xl font-black text-primary">{totalRevenue.toLocaleString()} ج</h2>
            <p className="font-bold mt-2">إجمالي الإيرادات</p>
          </div>
          <div className="border border-primary/40 rounded-3xl text-center" style={{ padding: "25px" }}>
            <h2 className="text-4xl font-black text-white/80">
              {filter === "الكل" ? salesmen.length - 1 : 1}
            </h2>
            <p className="font-bold mt-2 text-white/60">
              {filter === "الكل" ? "عدد السيلز مانز" : `سيلز: ${filter}`}
            </p>
          </div>
        </div>

        {/* Table — Desktop */}
        <div className="hidden lg:block border border-primary rounded-3xl" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", minWidth: "900px", borderCollapse: "collapse", textAlign: "center", tableLayout: "fixed" }}>
            <thead className="bg-primary">
              <tr>
                {["نوع السيارة","اسم المالك","رقم المالك","الخدمة","المبلغ المدفوع","السيلز مان","تاريخ التسليم","الحالة"].map((h) => (
                  <th key={h} style={{ padding: "16px 10px", fontWeight: 700, fontSize: "0.85rem", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid rgba(220,38,38,0.15)" }} className="hover:bg-primary/10 transition">
                  <td style={{ padding: "14px 10px", fontWeight: 700, whiteSpace: "nowrap" }}>{item.car}</td>
                  <td style={{ padding: "14px 10px", fontWeight: 700, whiteSpace: "nowrap" }}>{item.nameownercar}</td>
                  <td style={{ padding: "14px 10px", whiteSpace: "nowrap" }}>{item.phone}</td>
                  <td style={{ padding: "14px 10px", whiteSpace: "nowrap" }}>{item.service}</td>
                  <td style={{ padding: "14px 10px", whiteSpace: "nowrap" }}>{item.paid?.toLocaleString()} ج</td>
                  <td style={{ padding: "14px 10px" }}>
                    <span style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626", fontWeight: 700, fontSize: "0.8rem", borderRadius: "20px", padding: "4px 14px", whiteSpace: "nowrap" }}>
                      {item.salesman}
                    </span>
                  </td>
                  <td style={{ padding: "14px 10px", whiteSpace: "nowrap" }}>{item.deliveredat}</td>
                  <td style={{ padding: "14px 10px" }}>
                    <span className="bg-green-500 text-white text-sm font-bold" style={{ borderRadius: "20px", padding: "5px 14px", whiteSpace: "nowrap" }}>تم التسليم</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards — Mobile */}
        <div className="lg:hidden flex flex-col gap-4">
          {filtered.map((item) => (
            <div key={item.id} className="bg-[#111111] border border-primary/20 rounded-3xl" style={{ padding: "20px" }}>
              <h3 className="text-xl font-black" style={{ marginBottom: "16px" }}>{item.car}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
                <p><span style={{ color: "#DC2626", fontWeight: 700 }}>اسم المالك: </span>{item.nameownercar}</p>
                <p><span style={{ color: "#DC2626", fontWeight: 700 }}>رقم المالك: </span>{item.phone}</p>
                <p><span style={{ color: "#DC2626", fontWeight: 700 }}>الخدمة: </span>{item.service}</p>
                <p><span style={{ color: "#DC2626", fontWeight: 700 }}>المبلغ: </span>{item.paid?.toLocaleString()} ج</p>
                <p>
                  <span style={{ color: "#DC2626", fontWeight: 700 }}>السيلز مان: </span>
                  <span style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626", fontWeight: 700, fontSize: "0.8rem", borderRadius: "20px", padding: "3px 12px" }}>
                    {item.salesman}
                  </span>
                </p>
                <p><span style={{ color: "#DC2626", fontWeight: 700 }}>تاريخ التسليم: </span>{item.deliveredat}</p>
                {item.notes && <p><span style={{ color: "#DC2626", fontWeight: 700 }}>ملاحظات: </span>{item.notes}</p>}
                <div style={{ paddingTop: "8px" }}>
                  <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-bold">تم التسليم</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .delivered-content { margin-right: 0 !important; padding: 16px !important; }
        }
      `}</style>
    </>
  );
}