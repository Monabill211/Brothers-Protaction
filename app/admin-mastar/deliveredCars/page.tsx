"use client";

import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

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

export default function Page() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filter, setFilter] = useState("الكل");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    setLoading(true);
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .eq("status", "تم التسليم")
      .order("created_at", { ascending: false });

    if (!error && data) setCars(data);
    setLoading(false);
  }

  const salesmen = ["الكل", ...Array.from(new Set(cars.map((c) => c.salesman)))];
  const filtered = filter === "الكل" ? cars : cars.filter((c) => c.salesman === filter);
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

        {/* Loading */}
        {loading ? (
          <div className="text-center text-white/60" style={{ padding: "60px" }}>
            جاري التحميل...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-white/40" style={{ padding: "60px", fontSize: "1.1rem" }}>
            لا توجد سيارات مسلمة
          </div>
        ) : (
          <>
            {/* Table — Desktop */}
            <div className="hidden lg:block overflow-x-auto border border-primary rounded-3xl">
              <table className="w-full text-center">
                <thead className="bg-primary">
                  <tr>
                    <th className="py-5">نوع السيارة</th>
                    <th className="py-5">اسم المالك</th>
                    <th className="py-5">رقم المالك</th>
                    <th>الخدمة</th>
                    <th>المبلغ المدفوع</th>
                    <th>السيلز مان</th>
                    <th>تاريخ التسليم</th>
                    <th>الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item) => (
                    <tr key={item.id} className="border-b border-primary/20 hover:bg-primary/10 transition">
                      <td className="py-5 font-bold">{item.car}</td>
                      <td className="py-5 font-bold">{item.nameownercar}</td>
                      <td className="py-5 font-bold">{item.phone}</td>
                      <td>{item.service}</td>
                      <td>{item.paid?.toLocaleString()} ج</td>
                      <td>
                        <span style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626", fontWeight: 700, fontSize: "0.8rem", borderRadius: "20px", padding: "4px 14px" }}>
                          {item.salesman}
                        </span>
                      </td>
                      <td>{item.deliveredat}</td>
                      <td>
                        <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-bold">تم التسليم</span>
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
          </>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          .delivered-content { margin-right: 0 !important; padding: 16px !important; }
        }
      `}</style>
    </>
  );
}