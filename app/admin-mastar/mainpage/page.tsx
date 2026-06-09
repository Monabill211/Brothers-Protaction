"use client";
import React, { useEffect, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DashboardHeader from "../hedaer";
import Sidebar from "../controipanel";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ConstructionIcon from "@mui/icons-material/Construction";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";

const periods = ["اليوم", "أسبوع", "شهر", "سنة"];

const SALESMEN = ["أحمد محمد", "محمود علي", "كريم سامي"];

const links = [
  { href: "/admin-mastar/upcoming-cars", label: "تفاصيل الزيارات القادمة" },
  { href: "/admin-mastar/revenue", label: "تفاصيل الإيرادات" },
  { href: "/admin-mastar/workingCars", label: "تفاصيل الزيارات" },
  { href: "/admin-mastar/deliveredCars", label: "تفاصيل السيارات" },
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

export default function Page() {
  const [activePeriod, setActivePeriod] = useState("اليوم");
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

  // Stats per salesman
  const salesmanStats = SALESMEN.map((name) => {
    const filtered = cars.filter((c) => c.salesman === name);
    return {
      name,
      revenue: filtered.reduce((a, c) => a + (c.paid ?? 0), 0),
      visits: filtered.length,
      worked: filtered.length,
    };
  });

  // Total row
  const totals = {
    revenue: cars.reduce((a, c) => a + (c.paid ?? 0), 0),
    visits: cars.length,
    worked: cars.length,
  };

  // Last worked cars
  const lastCars = cars.slice(0, 4);

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
                  background: activePeriod === p
                    ? "linear-gradient(135deg,#DC2626,#F97316)"
                    : "rgba(220,38,38,0.15)",
                  color: "#fff",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                }}
              >
                {p}
                <AssessmentIcon style={{ fontSize: "20px" }} />
              </button>
            ))}
          </div>

          {/* Salesman Header Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "16px", marginBottom: "8px" }}>
            {allColumns.map((name) => (
              <div
                key={name}
                className="bg-primary hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                style={{ borderRadius: "20px", padding: "20px 16px", textAlign: "center", color: "#fff" }}
              >
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
            <div
              key={row.label}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "16px", marginBottom: "16px" }}
            >
              {row.values.map((val, i) => (
                <div
                  key={i}
                  className="bg-primary"
                  style={{ borderRadius: "20px", padding: "20px 16px", color: "#fff", textAlign: "center" }}
                >
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
                  <div
                    className="bg-primary-dark hover:bg-primary hover:-translate-y-2 transition-all duration-300"
                    style={{ borderRadius: "16px", padding: "20px", color: "#fff", fontWeight: 700, textAlign: "center", minHeight: "72px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    {l.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Last Worked Cars */}
            <div className="border border-primary" style={{ borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
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