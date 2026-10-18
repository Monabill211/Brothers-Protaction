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
  status: string;
  salesman: string;
  nameownercar: string;
  phone: string;
};

const MOCK_CARS: Car[] = [
  { id: "1",  car: "BMW X5 2022",             service: "PPF كامل",           total_price: 15000, paid: 15000, remaining: 0,    status: "تم التسليم", salesman: "أحمد محمد",  nameownercar: "كريم عبدالله",   phone: "01012345678" },
  { id: "2",  car: "Mercedes GLE 2023",        service: "نانو سيراميك",       total_price: 9000,  paid: 8000,  remaining: 1000, status: "جاري",       salesman: "محمود علي",  nameownercar: "سامي حسن",       phone: "01098765432" },
  { id: "3",  car: "Toyota Land Cruiser 2021", service: "تلميع + PPF جزئي",  total_price: 12000, paid: 12000, remaining: 0,    status: "تم التسليم", salesman: "كريم سامي",  nameownercar: "محمد الشافعي",   phone: "01155443322" },
  { id: "4",  car: "Porsche Cayenne 2023",     service: "PPF كامل + تلميع",  total_price: 22000, paid: 22000, remaining: 0,    status: "تم التسليم", salesman: "أحمد محمد",  nameownercar: "يوسف منصور",     phone: "01223344556" },
  { id: "5",  car: "Range Rover Vogue 2022",   service: "عزل حراري كامل",    total_price: 7000,  paid: 6500,  remaining: 500,  status: "جاري",       salesman: "محمود علي",  nameownercar: "هاني إبراهيم",   phone: "01567891234" },
  { id: "6",  car: "Audi Q8 2023",             service: "نانو سيراميك + تلميع", total_price: 9500, paid: 9500, remaining: 0,   status: "تم التسليم", salesman: "كريم سامي",  nameownercar: "عمر فاروق",      phone: "01334455667" },
  { id: "7",  car: "Lexus LX600 2023",         service: "PPF جزئي",           total_price: 8000,  paid: 7000,  remaining: 1000, status: "جاري",       salesman: "أحمد محمد",  nameownercar: "طارق رضا",       phone: "01445566778" },
  { id: "8",  car: "Chevrolet Tahoe 2022",     service: "تلميع احترافي",      total_price: 3500,  paid: 3500,  remaining: 0,    status: "تم التسليم", salesman: "محمود علي",  nameownercar: "أحمد السيد",     phone: "01678912345" },
  { id: "9",  car: "Kia Telluride 2023",       service: "PPF كامل",           total_price: 11000, paid: 11000, remaining: 0,    status: "تم التسليم", salesman: "كريم سامي",  nameownercar: "مصطفى علي",      phone: "01789123456" },
  { id: "10", car: "Hyundai Palisade 2022",    service: "عزل حراري",          total_price: 5000,  paid: 4500,  remaining: 500,  status: "جاري",       salesman: "أحمد محمد",  nameownercar: "رامي خالد",      phone: "01890123456" },
  { id: "11", car: "Ford Expedition 2023",     service: "نانو سيراميك",       total_price: 7500,  paid: 7500,  remaining: 0,    status: "تم التسليم", salesman: "محمود علي",  nameownercar: "وليد حسين",      phone: "01901234567" },
  { id: "12", car: "Nissan Patrol 2022",       service: "PPF كامل + عزل",    total_price: 18000, paid: 18000, remaining: 0,    status: "تم التسليم", salesman: "كريم سامي",  nameownercar: "إسلام محمود",    phone: "01112345678" },
];

export default function Page() {
  const [cars] = useState<Car[]>(MOCK_CARS);

  const totalRevenue = cars.reduce((acc, item) => acc + (item.paid ?? 0), 0);
  const totalRemain  = cars.reduce((acc, item) => acc + (item.remaining ?? 0), 0);
  const totalCars    = cars.length;

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
            <h3 className="text-3xl font-black">{cars.filter(c => c.status === "تم التسليم").length}</h3>
            <p className="font-bold mt-2 text-sm">تم تسليمها</p>
          </div>
        </div>

        {/* Table — Desktop */}
        <div className="hidden lg:block border border-primary rounded-3xl" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", minWidth: "950px", borderCollapse: "collapse", textAlign: "center", tableLayout: "fixed" }}>
            <thead className="bg-primary">
              <tr>
                {["السيارة","المالك","الهاتف","الخدمة","السيلز مان","السعر الكلي","المدفوع","المتبقي","الحالة"].map((h) => (
                  <th key={h} style={{ padding: "16px 10px", fontWeight: 700, fontSize: "0.85rem", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cars.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid rgba(220,38,38,0.15)" }} className="hover:bg-primary/10 transition">
                  <td style={{ padding: "14px 10px", fontWeight: 700, whiteSpace: "nowrap" }}>{item.car}</td>
                  <td style={{ padding: "14px 10px", whiteSpace: "nowrap" }}>{item.nameownercar}</td>
                  <td style={{ padding: "14px 10px", whiteSpace: "nowrap" }}>{item.phone}</td>
                  <td style={{ padding: "14px 10px", whiteSpace: "nowrap" }}>{item.service}</td>
                  <td style={{ padding: "14px 10px" }}>
                    <span style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626", fontWeight: 700, fontSize: "0.8rem", borderRadius: "20px", padding: "4px 14px", whiteSpace: "nowrap" }}>
                      {item.salesman}
                    </span>
                  </td>
                  <td style={{ padding: "14px 10px", whiteSpace: "nowrap" }}>{item.total_price?.toLocaleString()} ج</td>
                  <td style={{ padding: "14px 10px", color: "#22c55e", fontWeight: 700, whiteSpace: "nowrap" }}>{item.paid?.toLocaleString()} ج</td>
                  <td style={{ padding: "14px 10px", color: (item.remaining ?? 0) > 0 ? "#DC2626" : "#22c55e", fontWeight: 700, whiteSpace: "nowrap" }}>
                    {item.remaining?.toLocaleString()} ج
                  </td>
                  <td style={{ padding: "14px 10px" }}>
                    <span className={`text-white text-sm font-bold`} style={{ borderRadius: "20px", padding: "5px 14px", whiteSpace: "nowrap", background: item.status === "تم التسليم" ? "#22c55e" : "#eab308" }}>
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
                <span className="text-white text-sm font-bold" style={{ borderRadius: "20px", padding: "5px 14px", background: item.status === "تم التسليم" ? "#22c55e" : "#eab308" }}>
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

        {/* Export */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <button className="bg-primary hover:scale-105 transition-all duration-300 font-bold rounded-2xl" style={{ padding: "15px 40px" }}>
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