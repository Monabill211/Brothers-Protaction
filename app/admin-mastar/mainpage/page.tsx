"use client";
import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ConstructionIcon from "@mui/icons-material/Construction";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Link from "next/link";

const periods = ["اليوم", "أسبوع", "شهر", "سنة"];
const SALESMEN = ["أحمد محمد", "محمود علي", "كريم سامي"];

const links = [
  { href: "/admin-mastar/upcoming-cars", label: "تفاصيل الزيارات القادمة" },
  { href: "/admin-mastar/revenue", label: "تفاصيل الإيرادات" },
  { href: "/admin-mastar/workingCars", label: "تفاصيل السيارات جارية" },
  { href: "/admin-mastar/deliveredCars", label: "تفاصيل السيارات المُسلَّمة" },
];

type Car = {
  id: string;
  car: string;
  service: string;
  total_price: number;
  paid: number;
  remaining: number;
  status: string;
  salesman: string;
  created_at: string;
};

// بيانات وهمية بتواريخ متنوعة
const now = new Date();
const d = (daysAgo: number) => {
  const date = new Date(now);
  date.setDate(now.getDate() - daysAgo);
  return date.toISOString();
};

const MOCK_CARS: Car[] = [
  { id: "1",  car: "BMW X5 2022",            service: "PPF كامل",           paid: 15000, total_price: 15000, remaining: 0,    status: "تم التسليم", salesman: "أحمد محمد",  created_at: d(0)  },
  { id: "2",  car: "Mercedes GLE 2023",       service: "نانو سيراميك",       paid: 8000,  total_price: 9000,  remaining: 1000, status: "جاري",       salesman: "محمود علي",  created_at: d(0)  },
  { id: "3",  car: "Toyota Land Cruiser 2021",service: "تلميع + PPF جزئي",  paid: 12000, total_price: 12000, remaining: 0,    status: "تم التسليم", salesman: "كريم سامي",  created_at: d(1)  },
  { id: "4",  car: "Porsche Cayenne 2023",    service: "PPF كامل + تلميع",  paid: 22000, total_price: 22000, remaining: 0,    status: "تم التسليم", salesman: "أحمد محمد",  created_at: d(1)  },
  { id: "5",  car: "Range Rover Vogue 2022",  service: "عزل حراري كامل",    paid: 6500,  total_price: 7000,  remaining: 500,  status: "جاري",       salesman: "محمود علي",  created_at: d(2)  },
  { id: "6",  car: "Audi Q8 2023",            service: "نانو سيراميك",       paid: 9500,  total_price: 9500,  remaining: 0,    status: "تم التسليم", salesman: "كريم سامي",  created_at: d(3)  },
  { id: "7",  car: "Lexus LX600 2023",        service: "PPF جزئي",           paid: 7000,  total_price: 8000,  remaining: 1000, status: "جاري",       salesman: "أحمد محمد",  created_at: d(4)  },
  { id: "8",  car: "Chevrolet Tahoe 2022",    service: "تلميع احترافي",      paid: 3500,  total_price: 3500,  remaining: 0,    status: "تم التسليم", salesman: "محمود علي",  created_at: d(5)  },
  { id: "9",  car: "Kia Telluride 2023",      service: "PPF كامل",           paid: 11000, total_price: 11000, remaining: 0,    status: "تم التسليم", salesman: "كريم سامي",  created_at: d(10) },
  { id: "10", car: "Hyundai Palisade 2022",   service: "عزل حراري",          paid: 4500,  total_price: 5000,  remaining: 500,  status: "جاري",       salesman: "أحمد محمد",  created_at: d(15) },
  { id: "11", car: "Ford Expedition 2023",    service: "نانو سيراميك",       paid: 7500,  total_price: 7500,  remaining: 0,    status: "تم التسليم", salesman: "محمود علي",  created_at: d(20) },
  { id: "12", car: "Nissan Patrol 2022",      service: "PPF كامل + عزل",    paid: 18000, total_price: 18000, remaining: 0,    status: "تم التسليم", salesman: "كريم سامي",  created_at: d(25) },
  { id: "13", car: "Jeep Grand Cherokee 2023",service: "تلميع + نانو",       paid: 6000,  total_price: 6000,  remaining: 0,    status: "تم التسليم", salesman: "أحمد محمد",  created_at: d(40) },
  { id: "14", car: "Volvo XC90 2022",         service: "PPF جزئي",           paid: 9000,  total_price: 10000, remaining: 1000, status: "جاري",       salesman: "محمود علي",  created_at: d(60) },
  { id: "15", car: "Cadillac Escalade 2023",  service: "PPF كامل",           paid: 25000, total_price: 25000, remaining: 0,    status: "تم التسليم", salesman: "كريم سامي",  created_at: d(200)},
  { id: "16", car: "Lincoln Navigator 2022",  service: "عزل + تلميع",        paid: 8000,  total_price: 8500,  remaining: 500,  status: "تم التسليم", salesman: "أحمد محمد",  created_at: d(300)},
];

function getStartDate(period: string): Date {
  const now = new Date();
  const start = new Date(now);
  switch (period) {
    case "اليوم":  start.setHours(0, 0, 0, 0); break;
    case "أسبوع": start.setDate(now.getDate() - 7); break;
    case "شهر":   start.setMonth(now.getMonth() - 1); break;
    case "سنة":   start.setFullYear(now.getFullYear() - 1); break;
  }
  return start;
}

export default function Page() {
  const [activePeriod, setActivePeriod] = useState("اليوم");

  const startDate = getStartDate(activePeriod);
  const periodCars = MOCK_CARS.filter((c) => new Date(c.created_at) >= startDate);

  const salesmanStats = SALESMEN.map((name) => {
    const filtered = periodCars.filter((c) => c.salesman === name);
    return {
      name,
      revenue: filtered.reduce((a, c) => a + (c.paid ?? 0), 0),
      visits: filtered.length,
      worked: filtered.length,
    };
  });

  const totals = {
    revenue: periodCars.reduce((a, c) => a + (c.paid ?? 0), 0),
    visits: periodCars.length,
    worked: periodCars.length,
  };

  const lastCars = periodCars.slice(0, 4);
  const allColumns = [...SALESMEN, "الإجمالي"];

  return (
    <>
      <DashboardHeader />

      <div className="admin-layout" style={{ display: "flex" }}>
        <Sidebar />

        <div className="admin-content" style={{ flex: 1, padding: "30px", marginRight: "300px" }}>

          {/* Period Filter */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px", marginTop: "20px" }}>
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className="hover:-translate-y-2 transition-all duration-300"
                style={{
                  padding: "14px 28px", borderRadius: "18px", border: "none",
                  cursor: "pointer", fontWeight: 700, fontSize: "1rem",
                  background: activePeriod === p ? "linear-gradient(135deg,#DC2626,#F97316)" : "rgba(220,38,38,0.15)",
                  color: "#fff",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                }}
              >
                {p}
                <AssessmentIcon style={{ fontSize: "20px" }} />
              </button>
            ))}
          </div>

          {/* Period label */}
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "20px", marginTop: "-20px" }}>
            عرض بيانات: <strong style={{ color: "#DC2626" }}>{activePeriod}</strong> — {periodCars.length} سيارة
          </p>

          {/* Salesman Header Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "16px", marginBottom: "8px" }}>
            {allColumns.map((name) => (
              <div key={name} className="bg-primary hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                style={{ borderRadius: "20px", padding: "20px 16px", textAlign: "center", color: "#fff" }}>
                <span style={{ fontWeight: 700, fontSize: "1rem", display: "block", marginBottom: "8px" }}>{name}</span>
                <ArrowDownwardIcon style={{ fontSize: "28px" }} />
              </div>
            ))}
          </div>

          {/* Stats Rows */}
          {[
            {
              label: "الإيرادات",
              icon: <AccountBalanceWalletIcon />,
              values: [...salesmanStats.map((s) => `${s.revenue.toLocaleString()} ج`), `${totals.revenue.toLocaleString()} ج`],
            },
            {
              label: "الزيارات",
              icon: <DirectionsRunIcon />,
              values: [...salesmanStats.map((s) => s.visits), totals.visits],
            },
            {
              label: "سيارات اتعملت",
              icon: <ConstructionIcon />,
              values: [...salesmanStats.map((s) => s.worked), totals.worked],
            },
          ].map((row) => (
            <div key={row.label} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "16px", marginBottom: "16px" }}>
              {row.values.map((val, i) => (
                <div key={i} className="bg-primary" style={{ borderRadius: "20px", padding: "20px 16px", color: "#fff", textAlign: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontWeight: 700, fontSize: "0.88rem", marginBottom: "8px" }}>
                    {row.label} {row.icon}
                  </div>
                  <span style={{ fontWeight: 900, fontSize: "1.3rem" }}>{val}</span>
                </div>
              ))}
            </div>
          ))}

          {/* Bottom Section */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start", marginTop: "30px" }} className="bottom-grid">

            {/* Quick Links */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                  <div className="bg-primary-dark hover:bg-primary hover:-translate-y-2 transition-all duration-300"
                    style={{ borderRadius: "16px", padding: "20px", color: "#fff", fontWeight: 700, textAlign: "center", minHeight: "72px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {l.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Last Worked Cars */}
            <div className="border border-primary" style={{ borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ color: "#fff", textAlign: "center", fontWeight: 900, fontSize: "1.2rem", margin: 0 }}>
                آخر عربيات تم العمل عليها ({activePeriod})
              </p>
              {lastCars.length === 0 ? (
                <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", fontSize: "0.9rem" }}>لا توجد سيارات في هذه الفترة</p>
              ) : (
                lastCars.map((car) => (
                  <div key={car.id} className="bg-primary-light hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ borderRadius: "14px", padding: "12px", fontWeight: 700, textAlign: "center", color: "#fff", fontSize: "0.95rem" }}>
                    {car.car}
                    <span style={{ fontSize: "0.75rem", opacity: 0.7, marginRight: "8px" }}>— {car.salesman}</span>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .admin-content { margin-right: 0 !important; padding: 16px !important; }
          .bottom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}