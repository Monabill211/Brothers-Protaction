"use client";

import { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../Footer";

type View = "register" | "login" | "mywarranty";

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

const today = new Date().toISOString().split("T")[0];
const warrantyEnd = new Date();
warrantyEnd.setFullYear(warrantyEnd.getFullYear() + 12);
const warrantyEndStr = warrantyEnd.toISOString().split("T")[0];

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function WarrantyPage() {
  const [view, setView] = useState<View>("register");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Register
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");

  // Login
  const [loginName, setLoginName] = useState("");
  const [loginPhone, setLoginPhone] = useState("");

  const [warranty, setWarranty] = useState<Warranty | null>(null);

//   async function handleRegister() {
//     setError("");
//     if (!name.trim() || !phone.trim() || !car.trim()) {
//       setError("من فضلك ادخل كل البيانات");
//       return;
//     }
//     setLoading(true);
//     const { error: err } = await supabase.from("warranties").insert({
//       name: name.trim(),
//       phone: phone.trim(),
//       car: car.trim(),
//       production_date: today,
//       installed_at: today,
//       warranty_start: today,
//       warranty_end: warrantyEndStr,
//     });
//     setLoading(false);
//     if (err) { setError("حصل خطأ، حاول تاني"); return; }
//     setShowPopup(true);
//   }

//   async function handleLogin() {
//     setError("");
//     if (!loginName.trim() || !loginPhone.trim()) {
//       setError("ادخل الاسم ورقم التليفون");
//       return;
//     }
//     setLoading(true);
//     const { data, error: err } = await supabase
//       .from("warranties")
//       .select("*")
//       .eq("name", loginName.trim())
//       .eq("phone", loginPhone.trim())
//       .single();
//     setLoading(false);
//     if (err || !data) { setError("البيانات مش موجودة، تأكد من الاسم والرقم"); return; }
//     setWarranty(data);
//     setView("mywarranty");
//   }

//   const daysLeft = warranty
//     ? Math.max(0, Math.ceil((new Date(warranty.warranty_end).getTime() - Date.now()) / 86400000))
//     : 0;

  return (
    <>
    <Navbar />

    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        fontFamily: "inherit",
        position: "relative",
      }}
    >
      <div style={{ width: "100%", maxWidth: "440px" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <img
            src="/img/452863198_122094958910449527_15294905101800547_n.png"
            alt="Brothers Protection"
            style={{ width: "70px", marginBottom: "12px" }}
          />
          <h1 style={{ color: "#fff", fontSize: "22px", fontWeight: 900, margin: 0 }}>
            BROTHERS <span style={{ color: "#DC2626" }}>PROTECTION</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "6px" }}>
            نظام ضمان المنتجات
          </p>
        </div>

        {/* ── REGISTER ── */}
        {view === "register" && (
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <ShieldIcon style={{ color: "#DC2626", fontSize: "28px" }} />
              <h2 style={{ color: "#fff", fontSize: "18px", fontWeight: 900, margin: 0 }}>
                تسجيل ضمان جديد
              </h2>
            </div>

            <div style={{ background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.15)", borderRadius: "14px", padding: "14px 16px", marginBottom: "20px" }}>
              <InfoRow label="تاريخ التركيب" value={formatDate(today)} />
              <InfoRow label="بداية الضمان" value={formatDate(today)} />
              <InfoRow label="انتهاء الضمان" value={formatDate(warrantyEndStr)} accent />
            </div>

            <Field icon={<PersonIcon style={{ fontSize: "18px" }} />} placeholder="الاسم بالكامل" value={name} onChange={setName} />
            <Field icon={<PhoneIcon style={{ fontSize: "18px" }} />} placeholder="رقم التليفون" value={phone} onChange={setPhone} type="tel" />
            <Field icon={<DirectionsCarIcon style={{ fontSize: "18px" }} />} placeholder="نوع السيارة (مثال: BMW 2022)" value={car} onChange={setCar} />

            {error && <p style={{ color: "#ef4444", fontSize: "13px", margin: "4px 0 8px" }}>{error}</p>}

            <Btn primary onClick={handleRegister}>
              {loading ? "جاري التسجيل..." : "تسجيل الضمان"}
            </Btn>
عرض الضمان
            <Link href="/warrantysection"> 

            <button

              
              style={{ width: "100%", background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "14px", cursor: "pointer", fontFamily: "inherit" }}
            >
              عندك ضمان مسجل؟ اعرض بياناته
            </button></Link>
          </Card>
        )}

        {/* ── LOGIN ── */}
        {view === "login" && (
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <ShieldIcon style={{ color: "#DC2626", fontSize: "28px" }} />
              <h2 style={{ color: "#fff", fontSize: "18px", fontWeight: 900, margin: 0 }}>
                عرض ضماني
              </h2>
            </div>

            <Field icon={<PersonIcon style={{ fontSize: "18px" }} />} placeholder="الاسم بالكامل" value={loginName} onChange={setLoginName} />
            <Field icon={<PhoneIcon style={{ fontSize: "18px" }} />} placeholder="رقم التليفون" value={loginPhone} onChange={setLoginPhone} type="tel" />

            {error && <p style={{ color: "#ef4444", fontSize: "13px", margin: "4px 0 8px" }}>{error}</p>}

            <Btn primary onClick={handleLogin}>
              {loading ? "جاري البحث..." : "عرض الضمان"}
            </Btn>

            <button
              onClick={() => { setView("register"); setError(""); }}
              style={{ width: "100%", background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "14px", cursor: "pointer", fontFamily: "inherit" }}
            >
              مسحت الكود دلوقتي؟ سجّل ضمانك
            </button>
          </Card>
        )}

        {/* ── MY WARRANTY ── */}
        {view === "mywarranty" && warranty && (
          <Card>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <ShieldIcon style={{ fontSize: "48px", color: "#DC2626", marginBottom: "8px" }} />
              <h2 style={{ color: "#fff", fontSize: "20px", fontWeight: 900, margin: "0 0 8px" }}>
                بيانات الضمان
              </h2>
              <span style={{
                display: "inline-block",
                background: daysLeft > 365 ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
                color: daysLeft > 365 ? "#22c55e" : "#ef4444",
                border: `1px solid ${daysLeft > 365 ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
                borderRadius: "20px", padding: "4px 16px", fontSize: "12px", fontWeight: 700,
              }}>
                {daysLeft > 0 ? `متبقي ${daysLeft.toLocaleString("ar-EG")} يوم` : "انتهى الضمان"}
              </span>
            </div>

            <div style={{ background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: "16px", padding: "20px" }}>
              <InfoRow label="الاسم" value={warranty.name} />
              <InfoRow label="رقم التليفون" value={warranty.phone} />
              <InfoRow label="نوع السيارة" value={warranty.car} />
              <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "10px 0" }} />
              <InfoRow label="تاريخ التركيب" value={formatDate(warranty.installed_at)} />
              <InfoRow label="بداية الضمان" value={formatDate(warranty.warranty_start)} />
              <InfoRow label="انتهاء الضمان" value={formatDate(warranty.warranty_end)} accent />
            </div>

            <div style={{ marginTop: "20px" }}>
              <Btn onClick={() => { setView("register"); setLoginName(""); setLoginPhone(""); }}>
                رجوع
              </Btn>
            </div>
          </Card>
        )}
      </div>

      {/* ── SUCCESS POPUP ── */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "24px 16px",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) { setShowPopup(false); setName(""); setPhone(""); setCar(""); } }}
        >
          <div
            dir="rtl"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "32px 28px",
              width: "100%",
              maxWidth: "400px",
              position: "relative",
            }}
          >
            {/* Close */}
            <button
              onClick={() => { setShowPopup(false); setName(""); setPhone(""); setCar(""); }}
              style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(255,255,255,0.08)", border: "none", borderRadius: "8px", color: "#fff", cursor: "pointer", padding: "6px", display: "flex" }}
            >
              <CloseIcon style={{ fontSize: "18px" }} />
            </button>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <VerifiedIcon style={{ fontSize: "60px", color: "#22c55e", marginBottom: "12px" }} />
              <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 900, margin: "0 0 6px" }}>
                تم التسجيل! 🎉
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: 0 }}>
                ضمانك اتسجل بنجاح في نظام Brothers
              </p>
            </div>

            {/* Data */}
            <div style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "16px", padding: "18px", marginBottom: "18px" }}>
              <InfoRow label="الاسم" value={name} />
              <InfoRow label="السيارة" value={car} />
              <InfoRow label="رقم التليفون" value={phone} />
              <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "10px 0" }} />
              <InfoRow label="تاريخ التركيب" value={formatDate(today)} />
              <InfoRow label="بداية الضمان" value={formatDate(today)} />
              <InfoRow label="انتهاء الضمان" value={formatDate(warrantyEndStr)} accent />
            </div>

            {/* WhatsApp note */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: "12px", padding: "12px 16px", marginBottom: "20px" }}>
              <WhatsAppIcon style={{ color: "#25D366", fontSize: "22px", flexShrink: 0 }} />
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>
                تم إرسال تفاصيل الضمان على الواتساب
              </p>
            </div>

            <Btn primary onClick={() => { setShowPopup(false); setName(""); setPhone(""); setCar(""); }}>
              تمام
            </Btn>
          </div>
        </div>
      )}
    </main>
        <Footer />
    </>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "28px 24px" }}>
      {children}
    </div>
  );
}

function Field({ icon, placeholder, value, onChange, type = "text" }: {
  icon: React.ReactNode; placeholder: string; value: string; onChange: (v: string) => void; type?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", padding: "0 16px", marginBottom: "12px", height: "52px" }}>
      <span style={{ color: "rgba(255,255,255,0.4)" }}>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: "14px", flex: 1, textAlign: "right", fontFamily: "inherit" }}
      />
    </div>
  );
}

function InfoRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0" }}>
      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>{label}</span>
      <span style={{ color: accent ? "#DC2626" : "#fff", fontSize: "13px", fontWeight: accent ? 700 : 500 }}>{value}</span>
    </div>
  );
}

function Btn({ children, onClick, primary, style }: {
  children: React.ReactNode; onClick: () => void; primary?: boolean; style?: React.CSSProperties;
}) {
  return (
    <button
      onClick={onClick}
      style={{ width: "100%", height: "52px", borderRadius: "14px", border: primary ? "none" : "1px solid rgba(255,255,255,0.1)", background: primary ? "linear-gradient(135deg,#DC2626)" : "rgba(255,255,255,0.05)", color: "#fff", fontSize: "15px", fontWeight: 800, cursor: "pointer", transition: "opacity 0.2s", fontFamily: "inherit", ...style }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </button>
  );
}