"use client";

import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";

const bookings = [
  { car: "BMW M4", service: "أفلام حماية PPF", date: "2026-06-01", time: "الشيخ زايد", notes: "حماية كاملة للواجهة الأمامية" },
  { car: "Mercedes C200", service: "نانو سيراميك", date: "2026-06-02", time: "الشيخ زايد", notes: "تلميع قبل تركيب النانو" },
  { car: "Audi RS5", service: "عزل حراري", date: "2026-06-03", time: "المهندسين", notes: "عزل زجاج كامل" },
  { car: "Toyota Corolla", service: "تلميع سيارات", date: "2026-06-04", time: "التجمع الخامس", notes: "إزالة خدوش بسيطة" },
];

export default function Page() {
  return (
    <>
      <DashboardHeader />
      <Sidebar />

      <div className="upcoming-content" style={{ marginRight: "300px", padding: "30px" }}>

        {/* Title */}
        <div className="border border-primary rounded-3xl bg-primary-dark" style={{ padding: "25px", marginBottom: "30px" }}>
          <h1 className="text-3xl md:text-4xl font-black text-center">الزيارات القادمة</h1>
          <p className="text-center text-white/60 mt-3">جميع الحجوزات القادمة الخاصة بالعملاء</p>
        </div>

        {/* Table — Desktop */}
        <div className="hidden lg:block overflow-x-auto border border-primary rounded-3xl">
          <table className="w-full text-center">
            <thead className="bg-primary">
              <tr>
                <th className="py-5">نوع السيارة</th>
                <th>الخدمة</th>
                <th>التاريخ</th>
                <th>الفرع</th>
                <th>الملاحظات</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border-b border-primary/20 hover:bg-primary/10 transition">
                  <td className="py-5 font-bold">{booking.car}</td>
                  <td>{booking.service}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626", fontWeight: 700, fontSize: "0.8rem", borderRadius: "20px", padding: "4px 14px" }}>
                      {booking.time}
                    </span>
                  </td>
                  <td>{booking.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards — Mobile */}
        <div className="lg:hidden flex flex-col gap-4">
          {bookings.map((booking, index) => (
            <div key={index} className="bg-[#111111] border border-primary/20 rounded-3xl" style={{ padding: "20px" }}>
              <h3 className="text-xl font-black" style={{ marginBottom: "16px" }}>{booking.car}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
                <p><span style={{ color: "#DC2626", fontWeight: 700 }}>الخدمة: </span>{booking.service}</p>
                <p><span style={{ color: "#DC2626", fontWeight: 700 }}>التاريخ: </span>{booking.date}</p>
                <p>
                  <span style={{ color: "#DC2626", fontWeight: 700 }}>الفرع: </span>
                  <span style={{ background: "rgba(220,38,38,0.15)", color: "#DC2626", fontWeight: 700, fontSize: "0.8rem", borderRadius: "20px", padding: "3px 12px" }}>
                    {booking.time}
                  </span>
                </p>
                <p><span style={{ color: "#DC2626", fontWeight: 700 }}>الملاحظات: </span>{booking.notes}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "20px", marginTop: "30px" }}>
          <div className="bg-primary rounded-3xl text-center" style={{ padding: "25px" }}>
            <h3 className="text-4xl font-black">{bookings.length}</h3>
            <p className="font-bold mt-2">إجمالي الحجوزات</p>
          </div>
          <div className="bg-primary-dark border border-primary rounded-3xl text-center" style={{ padding: "25px" }}>
            <h3 className="text-4xl font-black">3</h3>
            <p className="font-bold mt-2">هذا الأسبوع</p>
          </div>
          <div className="bg-primary-dark border border-primary rounded-3xl text-center" style={{ padding: "25px" }}>
            <h3 className="text-4xl font-black">1</h3>
            <p className="font-bold mt-2">اليوم</p>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .upcoming-content {
            margin-right: 0 !important;
            padding: 16px !important;
          }
        }
      `}</style>
    </>
  );
}