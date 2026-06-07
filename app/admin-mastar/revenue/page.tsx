"use client";

import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

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
};

export default function Page() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    setLoading(true);
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setCars(data);
    setLoading(false);
  }

  const totalRevenue = cars.reduce((acc, item) => acc + (item.paid ?? 0), 0);
  const totalRemain = cars.reduce((acc, item) => acc + (item.remaining ?? 0), 0);
  const totalCars = cars.length;

  return (
    <>
      <DashboardHeader />
      <Sidebar />

      <div className="revenue-content" style={{ marginRight: "300px", padding: "30px" }}>

        {/* Title */}
        <div className="border border-primary rounded-3xl bg-primary-dark" style={{ padding: "25px", marginBottom: "30px" }}>
          <h1 className="text-3xl md:text-4xl font-black text-center">تفاصيل الإيرادات</h1>
          <p className="text-center text-white/60 mt-3">متابعة إيرادات الفروع والمدفوعات</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 xl:grid-cols-4" style={{ gap: "16px", marginBottom: "30px" }}>
          <div className="bg-primary rounded-3xl text-center" style={{ padding: "22px" }}>
            <h3 className="text-3xl font-black">{totalRevenue.toLocaleString()} ج</h3>
            <p className="font-bold mt-2 text-sm">إجمالي الإيرادات</p>
          </div>
          <div className="bg-primary-dark border border-primary rounded-3xl text-center" style={{ padding: "22px" }}>
            <h3 className="text-3xl font-black">{totalRemain.toLocaleString()} ج</h3>
            <p className="font-bold mt-2 text-sm">المبالغ المتبقية</p>
          </div>
          <div className="bg-primary-dark border border-primary rounded-3xl text-center" style={{ padding: "22px" }}>
            <h3 className="text-3xl font-black">{totalCars}</h3>
            <p className="font-bold mt-2 text-sm">عدد السيارات</p>
          </div>
          <div className="bg-primary-dark border border-primary rounded-3xl text-center" style={{ padding: "22px" }}>
            <h3 className="text-3xl font-black">
              {cars.filter(c => c.status === "تم التسليم").length}
            </h3>
            <p className="font-bold mt-2 text-sm">تم تسليمها</p>
          </div>
        </div>

        {/* Loading / Empty */}
        {loading ? (
          <div className="text-center text-white/60" style={{ padding: "60px" }}>جاري التحميل...</div>
        ) : cars.length === 0 ? (
          <div className="text-center text-white/40" style={{ padding: "60px", fontSize: "1.1rem" }}>لا توجد بيانات</div>
        ) : (
          <>
            {/* Table — Desktop */}
            <div className="hidden lg:block overflow-x-auto border border-primary rounded-3xl">
              <table className="w-full text-center">
                <thead className="bg-primary">
                  <tr>
                    <th className="py-5">السيارة</th>
                    <th>المالك</th>
                    <th>الهاتف</th>
                    <th>الخدمة</th>
                    <th>السيلز مان</th>
                    <th>السعر الكلي</th>
                    <th>المدفوع</th>
                    <th>المتبقي</th>
                    <th>الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((item) => (
                    <tr key={item.id} className="border-b border-primary/20 hover:bg-primary/10 transition">
                      <td className="py-5 font-bold">{item.car}</td>
                      <td>{item.nameownercar}</td>
                      <td>{item.phone}</td>
                      <td>{item.service}</td>
                      <td>
                        <span style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626", fontWeight: 700, fontSize: "0.8rem", borderRadius: "20px", padding: "4px 14px" }}>
                          {item.salesman}
                        </span>
                      </td>
                      <td>{item.total_price?.toLocaleString()} ج</td>
                      <td style={{ color: "#22c55e", fontWeight: 700 }}>{item.paid?.toLocaleString()} ج</td>
                      <td style={{ color: (item.remaining ?? 0) > 0 ? "#DC2626" : "#22c55e", fontWeight: 700 }}>
                        {item.remaining?.toLocaleString()} ج
                      </td>
                      <td>
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${item.status === "تم التسليم" ? "bg-green-500" : "bg-yellow-500"}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards — Mobile */}
            <div className="lg:hidden flex flex-col gap-4">
              {cars.map((item) => (
                <div key={item.id} className="bg-[#111111] border border-primary/20 rounded-3xl" style={{ padding: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <h3 className="text-xl font-black">{item.car}</h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${item.status === "تم التسليم" ? "bg-green-500" : "bg-yellow-500"}`}>
                      {item.status}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
                    <p><span style={{ color: "#DC2626", fontWeight: 700 }}>المالك: </span>{item.nameownercar}</p>
                    <p><span style={{ color: "#DC2626", fontWeight: 700 }}>الهاتف: </span>{item.phone}</p>
                    <p><span style={{ color: "#DC2626", fontWeight: 700 }}>الخدمة: </span>{item.service}</p>
                    <p>
                      <span style={{ color: "#DC2626", fontWeight: 700 }}>السيلز مان: </span>
                      <span style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626", fontWeight: 700, fontSize: "0.8rem", borderRadius: "20px", padding: "3px 12px" }}>
                        {item.salesman}
                      </span>
                    </p>
                    <p><span style={{ color: "#DC2626", fontWeight: 700 }}>السعر الكلي: </span>{item.total_price?.toLocaleString()} ج</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "4px" }}>
                      <div style={{ background: "rgba(34,197,94,0.1)", borderRadius: "12px", padding: "10px", textAlign: "center" }}>
                        <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "0.75rem", marginBottom: "4px" }}>المدفوع</p>
                        <p style={{ fontWeight: 900 }}>{item.paid?.toLocaleString()} ج</p>
                      </div>
                      <div style={{ background: (item.remaining ?? 0) > 0 ? "rgba(220,38,38,0.1)" : "rgba(34,197,94,0.1)", borderRadius: "12px", padding: "10px", textAlign: "center" }}>
                        <p style={{ color: (item.remaining ?? 0) > 0 ? "#DC2626" : "#22c55e", fontWeight: 700, fontSize: "0.75rem", marginBottom: "4px" }}>المتبقي</p>
                        <p style={{ fontWeight: 900 }}>{item.remaining?.toLocaleString()} ج</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Export */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <button
            className="bg-primary hover:scale-105 transition-all duration-300 font-bold rounded-2xl"
            style={{ padding: "15px 40px" }}
          >
            تصدير Excel
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .revenue-content { margin-right: 0 !important; padding: 16px !important; }
        }
      `}</style>
    </>
  );
}