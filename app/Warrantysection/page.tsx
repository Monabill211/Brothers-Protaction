"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShieldIcon from "@mui/icons-material/Shield";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VerifiedIcon from "@mui/icons-material/Verified";
import Navbar from "../navbar";
import Footer from "../Footer";

type View = "btn" | "form" | "result";

type Warranty = {
  id: string;
  name: string;
  phone: string;
  car: string;
  production_date: string;
  installed_at: string;
  warranty_start: string;
  warranty_end: string;
};



export default function WarrantySection() {
  const [flipped, setFlipped] = useState(false);
  const [view, setView] = useState<View>("btn");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [warranty, setWarranty] = useState<Warranty | null>(null);

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const daysLeft = warranty
    ? Math.max(0, Math.round((new Date(warranty.warranty_end).getTime() - Date.now()) / 86400000))
    : 0;

  function openForm() {
    setFlipped(true);
    setView("form");
  }

  function closeForm() {
    setFlipped(false);
    setView("btn");
    setName("");
    setPhone("");
    setError("");
  }

  function handleLookup() {
    setError("");

    if (!name.trim() || !phone.trim()) {
      setError("ادخل الاسم ورقم التليفون");
      return;
    }

    setLoading(true);

    // UI only — no database connection
    setTimeout(() => {
      setLoading(false);

      const demoWarranty: Warranty = {
        id: "demo",
        name: name.trim(),
        phone: phone.trim(),
        car: "BMW 2022",
        production_date: new Date().toISOString(),
        installed_at: new Date().toISOString(),
        warranty_start: new Date().toISOString(),
        warranty_end: new Date(
          Date.now() + 12 * 365 * 24 * 60 * 60 * 1000
        ).toISOString(),
      };

      setWarranty(demoWarranty);
      setView("result");
    }, 500);
  }

  const rows = warranty ? [
    { label: "الاسم", value: warranty.name },
    { label: "السيارة", value: warranty.car },
    { label: "تاريخ التركيب", value: fmt(warranty.installed_at) },
    { label: "إنتاج الرول", value: fmt(warranty.production_date) },
    { label: "انتهاء الضمان", value: fmt(warranty.warranty_end), red: true },
  ] : [];

  const panelStyle: React.CSSProperties = {
    width: "240px",
    flexShrink: 0,
    background: "#1a1a1a",
    borderRight: flipped ? "none" : "1px solid rgba(255,255,255,0.07)",
    borderLeft: flipped ? "1px solid rgba(255,255,255,0.07)" : "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 24px",
    transition: "border 0.45s",
    order: flipped ? 1 : 2,
  };

  return (
    <>
    <Navbar />
   
    <section dir="rtl" style={{ background: "#0a0a0a", padding: "100px 20px" }}>
        
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "32px",
            display: "flex",
            minHeight: "320px",
            overflow: "hidden",
          }}
        >
          {/* Text side */}
          <div
            style={{
              flex: 1,
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: flipped ? 2 : 1,
              transition: "order 0s",
            }}
          >
            <div style={{ width: "52px", height: "52px", background: "rgba(220,38,38,0.12)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <ShieldIcon style={{ color: "#DC2626", fontSize: "28px" }} />
            </div>
            <p style={{ color: "#DC2626", fontSize: "11px", fontWeight: 800, letterSpacing: "3px", marginBottom: "14px" }}>
              BROTHERS PROTECTION
            </p>
            <h2 style={{ color: "#fff", fontSize: "26px", fontWeight: 900, lineHeight: 1.5, marginBottom: "14px" }}>
              امسح الكود اللي على العلبة{" "}
              <span style={{ color: "#DC2626" }}>لتفعيل ضمانك</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.9 }}>
              انضم لعملاء Brothers وسجّل ضمانك الرسمي لمدة 12 سنة
            </p>
          </div>

          {/* Action side */}
          <div style={panelStyle}>
            <AnimatePresence mode="wait">
              {view === "btn" && (
                <motion.button
                  key="btn"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onClick={openForm}
                  style={{
                    background: "#DC2626",
                    color: "#fff",
                    border: "none",
                    borderRadius: "14px",
                    padding: "14px 22px",
                    fontSize: "14px",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "inherit",
                  }}
                >
                  عرض ضماني
                  <ArrowBackIcon style={{ fontSize: "18px" }} />
                </motion.button>
              )}

              {view === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: "100%" }}
                >
                  <p style={{ color: "#DC2626", fontSize: "11px", fontWeight: 800, letterSpacing: "2px", marginBottom: "14px", textAlign: "center" }}>
                    عرض الضمان
                  </p>

                  <input
                    type="text"
                    placeholder="الاسم بالكامل"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setError(""); }}
                    style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "12px 14px", color: "#fff", fontSize: "14px", fontFamily: "inherit", outline: "none", marginBottom: "10px", textAlign: "right" }}
                  />

                  <input
                    type="tel"
                    placeholder="رقم التليفون"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setError(""); }}
                    style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "12px 14px", color: "#fff", fontSize: "14px", fontFamily: "inherit", outline: "none", marginBottom: error ? "8px" : "12px", textAlign: "right" }}
                  />

                  {error && <p style={{ color: "#f87171", fontSize: "12px", marginBottom: "10px" }}>{error}</p>}

                  <button
                    onClick={handleLookup}
                    style={{ width: "100%", background: "#DC2626", color: "#fff", border: "none", borderRadius: "10px", padding: "13px", fontSize: "14px", fontWeight: 800, cursor: "pointer", fontFamily: "inherit", marginBottom: "8px" }}
                  >
                    {loading ? "جاري البحث..." : "عرض الضمان"}
                  </button>

                  <button
                    onClick={closeForm}
                    style={{ width: "100%", background: "transparent", border: "none", color: "rgba(255,255,255,0.35)", fontSize: "12px", cursor: "pointer", fontFamily: "inherit", padding: "6px" }}
                  >
                    إغلاق
                  </button>
                </motion.div>
              )}

              {view === "result" && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: "100%" }}
                >
                  <div style={{ textAlign: "center", marginBottom: "14px" }}>
                    <VerifiedIcon style={{ fontSize: "42px", color: "#22c55e", marginBottom: "8px" }} />
                    <p style={{ color: "#fff", fontSize: "15px", fontWeight: 900, marginBottom: "5px" }}>ضمانك فعّال</p>
                    <span style={{ display: "inline-block", background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "20px", padding: "3px 14px", fontSize: "11px", fontWeight: 700 }}>
                      متبقي {daysLeft.toLocaleString("ar-EG")} يوم
                    </span>
                  </div>

                  <div style={{ background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.15)", borderRadius: "12px", padding: "12px", marginBottom: "12px" }}>
                    {rows.map((row, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", fontSize: "12px" }}>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>{row.label}</span>
                        <span style={{ color: row.red ? "#DC2626" : "#fff", fontWeight: row.red ? 700 : 500 }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => { setView("form"); setName(""); setPhone(""); }}
                    style={{ width: "100%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", borderRadius: "10px", padding: "11px", fontSize: "13px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginBottom: "8px" }}
                  >
                    بحث جديد
                  </button>

                  <button
                    onClick={closeForm}
                    style={{ width: "100%", background: "transparent", border: "none", color: "rgba(255,255,255,0.35)", fontSize: "12px", cursor: "pointer", fontFamily: "inherit", padding: "6px" }}
                  >
                    إغلاق
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
     <Footer />
    </>
  );
}
