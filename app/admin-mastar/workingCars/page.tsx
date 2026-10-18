"use client";

import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";
import { useState } from "react";

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

const INITIAL_CARS: Car[] = [
  { id: "1",  car: "BMW X5 2022",             service: "PPF كامل",              total_price: 15000, paid: 10000, remaining: 5000, deliveredat: "2024-10-20", status: "جاري العمل عليها", salesman: "أحمد محمد",  nameownercar: "كريم عبدالله",  phone: "01012345678", notes: "" },
  { id: "2",  car: "Mercedes GLE 2023",        service: "نانو سيراميك",          total_price: 9000,  paid: 8000,  remaining: 1000, deliveredat: "2024-10-18", status: "جاري العمل عليها", salesman: "محمود علي",  nameownercar: "سامي حسن",      phone: "01098765432", notes: "عميل VIP" },
  { id: "3",  car: "Toyota Land Cruiser 2021", service: "تلميع + PPF جزئي",     total_price: 12000, paid: 6000,  remaining: 6000, deliveredat: "2024-10-22", status: "جاري العمل عليها", salesman: "كريم سامي",  nameownercar: "محمد الشافعي",  phone: "01155443322", notes: "" },
  { id: "4",  car: "Range Rover Vogue 2022",   service: "عزل حراري كامل",       total_price: 7000,  paid: 6500,  remaining: 500,  deliveredat: "2024-10-19", status: "جاري العمل عليها", salesman: "محمود علي",  nameownercar: "هاني إبراهيم",  phone: "01567891234", notes: "تسليم عاجل" },
  { id: "5",  car: "Lexus LX600 2023",         service: "PPF جزئي",              total_price: 8000,  paid: 7000,  remaining: 1000, deliveredat: "2024-10-21", status: "جاري العمل عليها", salesman: "أحمد محمد",  nameownercar: "طارق رضا",      phone: "01445566778", notes: "" },
  { id: "6",  car: "Hyundai Palisade 2022",    service: "عزل حراري",             total_price: 5000,  paid: 2500,  remaining: 2500, deliveredat: "2024-10-23", status: "جاري العمل عليها", salesman: "كريم سامي",  nameownercar: "رامي خالد",     phone: "01890123456", notes: "يحتاج مواد إضافية" },
];

export default function Page() {
  const [cars, setCars] = useState<Car[]>(INITIAL_CARS);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  function markAsDelivered(car: Car) {
    setUpdatingId(car.id);
    setTimeout(() => {
      setCars((prev) => prev.filter((c) => c.id !== car.id));
      setUpdatingId(null);
    }, 800);
  }

  const totalPaid   = cars.reduce((acc, item) => acc + (item.paid ?? 0), 0);
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

        {/* Empty */}
        {cars.length === 0 ? (
          <div className="text-center text-white/40" style={{ padding: "60px", fontSize: "1.1rem" }}>
            لا توجد سيارات قيد التنفيذ
          </div>
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

                <div style={{ marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                  <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-bold">جاري العمل</span>
                  <button
                    onClick={() => markAsDelivered(car)}
                    disabled={updatingId === car.id}
                    style={{
                      flex: 1, padding: "10px", borderRadius: "12px", border: "none",
                      cursor: updatingId === car.id ? "not-allowed" : "pointer",
                      fontWeight: 700, fontSize: "0.85rem", color: "#fff",
                      background: updatingId === car.id ? "rgba(34,197,94,0.4)" : "#22c55e",
                      transition: "background 0.2s",
                    }}
                  >
                    {updatingId === car.id ? "جاري التحديث..." : "✓ تم التسليم"}
                  </button>
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