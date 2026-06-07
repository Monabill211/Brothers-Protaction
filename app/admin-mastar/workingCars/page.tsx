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
  deliveredat: string;
  status: string;
  salesman: string;
  nameownercar: string;
  phone: string;
  notes: string;
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
      .eq("status", "جاري العمل عليها")
      .order("created_at", { ascending: false });

    if (!error && data) setCars(data);
    setLoading(false);
  }

  const totalPaid = cars.reduce((acc, item) => acc + (item.paid ?? 0), 0);
  const totalRemain = cars.reduce((acc, item) => acc + (item.remaining ?? 0), 0);

  return (
    <>
      <DashboardHeader />
      <Sidebar />

      <div className="working-content" style={{ marginRight: "300px", padding: "30px" }}>

        {/* Header */}
        <div className="bg-primary-dark border border-primary rounded-3xl" style={{ padding: "24px", marginBottom: "30px" }}>
          <h1 className="text-3xl md:text-4xl font-black text-center">السيارات الجاري العمل عليها</h1>
          <p className="text-center text-white/60 mt-3">جميع السيارات الموجودة حاليًا داخل المركز</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "20px", marginBottom: "30px" }}>
          <div className="bg-primary rounded-3xl text-center" style={{ padding: "24px" }}>
            <h2 className="text-4xl font-black">{cars.length}</h2>
            <p className="font-bold mt-2">سيارات قيد التنفيذ</p>
          </div>
          <div className="border border-primary rounded-3xl text-center" style={{ padding: "24px" }}>
            <h2 className="text-4xl font-black text-primary">{totalPaid.toLocaleString()} ج</h2>
            <p className="font-bold mt-2">المدفوع</p>
          </div>
          <div className="border border-primary rounded-3xl text-center" style={{ padding: "24px" }}>
            <h2 className="text-4xl font-black text-primary">{totalRemain.toLocaleString()} ج</h2>
            <p className="font-bold mt-2">المتبقي</p>
          </div>
        </div>

        {/* Loading / Empty */}
        {loading ? (
          <div className="text-center text-white/60" style={{ padding: "60px" }}>جاري التحميل...</div>
        ) : cars.length === 0 ? (
          <div className="text-center text-white/40" style={{ padding: "60px", fontSize: "1.1rem" }}>لا توجد سيارات قيد التنفيذ</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" style={{ gap: "20px" }}>
            {cars.map((car) => (
              <div key={car.id} className="border border-primary rounded-3xl bg-primary-dark" style={{ padding: "24px" }}>
                <h2 className="text-2xl font-black" style={{ marginBottom: "16px" }}>{car.car}</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
                  <p><span className="font-bold text-primary">المالك: </span>{car.nameownercar}</p>
                  <p><span className="font-bold text-primary">الهاتف: </span>{car.phone}</p>
                  <p><span className="font-bold text-primary">الخدمة: </span>{car.service}</p>
                  <p><span className="font-bold text-primary">السيلز مان: </span>{car.salesman}</p>
                  <p><span className="font-bold text-primary">إجمالي السعر: </span>{car.total_price?.toLocaleString()} ج</p>

                  {/* Paid / Remain */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "4px" }}>
                    <div style={{ background: "rgba(34,197,94,0.1)", borderRadius: "12px", padding: "10px", textAlign: "center" }}>
                      <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "0.75rem", marginBottom: "4px" }}>المدفوع</p>
                      <p style={{ fontWeight: 900, fontSize: "1rem" }}>{car.paid?.toLocaleString()} ج</p>
                    </div>
                    <div style={{ background: "rgba(220,38,38,0.1)", borderRadius: "12px", padding: "10px", textAlign: "center" }}>
                      <p style={{ color: "#DC2626", fontWeight: 700, fontSize: "0.75rem", marginBottom: "4px" }}>المتبقي</p>
                      <p style={{ fontWeight: 900, fontSize: "1rem" }}>{car.remaining?.toLocaleString()} ج</p>
                    </div>
                  </div>

                  <p><span className="font-bold text-primary">التسليم المتوقع: </span>{car.deliveredat ?? "—"}</p>
                  {car.notes && <p><span className="font-bold text-primary">ملاحظات: </span>{car.notes}</p>}
                </div>

                {/* Status */}
                <div style={{ marginTop: "16px" }}>
                  <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-bold">جاري العمل</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          .working-content { margin-right: 0 !important; padding: 16px !important; }
        }
      `}</style>
    </>
  );
}