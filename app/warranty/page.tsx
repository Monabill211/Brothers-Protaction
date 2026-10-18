"use client";

import { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../navbar";
import Footer from "../Footer";

type View = "register" | "login" | "mywarranty";

const MATERIALS = ["PPF Standard", "PPF Premium", "PPF Elite", "PPF Ultra"];

const today = new Date().toISOString().split("T")[0];
const warrantyEnd = new Date();
warrantyEnd.setFullYear(warrantyEnd.getFullYear() + 12);
const warrantyEndStr = warrantyEnd.toISOString().split("T")[0];

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("ar-EG", {
    year: "numeric", month: "long", day: "numeric",
  });

export default function WarrantyPage() {
  const [view, setView] = useState<View>("register");
  const [showPopup, setShowPopup] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");
  const [plate, setPlate] = useState("");
  const [material, setMaterial] = useState("");

  const [loginName, setLoginName] = useState("");
  const [loginPhone, setLoginPhone] = useState("");

  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative"
        style={{ padding: "24px 16px", fontFamily: "inherit" }}
      >
        <div className="w-full max-w-[440px]  ">

          {/* Logo */}
          <div className="text-center mb-8 h-48" style={{marginBottom:"30px"}}>
            <img
              src="/img/452863198_122094958910449527_15294905101800547_n.png"
              alt="Brothers Protection"
              className="w-[70px]"
              style={{margin:"auto"}}
            />
            <h1 className="text-white text-[22px] font-black m-0">
              BROTHERS <span className="text-primary">PROTECTION</span>
            </h1>
            <p className="text-white/40 text-[13px] mt-1">نظام ضمان المنتجات</p>
          </div>

          {/* ── REGISTER ── */}
          {view === "register" && (
            <Card>
              <div className="flex items-center gap-2 mb-5">
                <ShieldIcon className="text-primary" style={{ fontSize: 28 }} />
                <h2 className="text-white text-[18px] font-black m-0">تسجيل ضمان جديد</h2>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl mb-5" style={{ padding: "14px 16px" }}>
                <InfoRow label="تاريخ التركيب" value={formatDate(today)} />
                <InfoRow label="بداية الضمان" value={formatDate(today)} />
                <InfoRow label="انتهاء الضمان" value={formatDate(warrantyEndStr)} accent />
              </div>

              <Field icon={<PersonIcon style={{ fontSize: 18 }} />} placeholder="الاسم بالكامل" value={name} onChange={setName} />
              <Field icon={<PhoneIcon style={{ fontSize: 18 }} />} placeholder="رقم التليفون" value={phone} onChange={setPhone} type="tel" />
              <Field icon={<DirectionsCarIcon style={{ fontSize: 18 }} />} placeholder="نوع السيارة (مثال: BMW 2022)" value={car} onChange={setCar} />
              <Field icon={<span className="text-[13px]">🔢</span>} placeholder="رقم اللوحة" value={plate} onChange={setPlate} />

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl mb-3 h-[52px]" style={{ padding: "0 16px" }}>
                <span className="text-white/40 text-[13px]">🛡️</span>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="bg-transparent border-none outline-none text-white text-[14px] flex-1 text-right font-[inherit] cursor-pointer"
                  style={{ direction: "rtl" }}
                >
                  <option value="" disabled style={{ background: "#111", color: "#fff" }}>اختر الخامة</option>
                  {MATERIALS.map((m) => (
                    <option key={m} value={m} style={{ background: "#111", color: "#fff" }}>{m}</option>
                  ))}
                </select>
              </div>

              <Btn primary onClick={() => setShowPopup(true)}>تسجيل الضمان</Btn>

              <button
                onClick={() => setView("login")}
                className="w-full bg-transparent border-none text-white/40 text-[13px] mt-3 cursor-pointer font-[inherit]"
              >
                عندك ضمان مسجل؟ اعرض بياناته
              </button>
            </Card>
          )}

          {/* ── LOGIN ── */}
          {view === "login" && (
            <Card>
              <div className="flex items-center gap-2 mb-5">
                <ShieldIcon className="text-primary" style={{ fontSize: 28 }} />
                <h2 className="text-white text-[18px] font-black m-0">عرض ضماني</h2>
              </div>

              <Field icon={<PersonIcon style={{ fontSize: 18 }} />} placeholder="الاسم بالكامل" value={loginName} onChange={setLoginName} />
              <Field icon={<PhoneIcon style={{ fontSize: 18 }} />} placeholder="رقم التليفون" value={loginPhone} onChange={setLoginPhone} type="tel" />

              <Btn primary onClick={() => setView("mywarranty")}>عرض الضمان</Btn>

              <button
                onClick={() => setView("register")}
                className="w-full bg-transparent border-none text-white/40 text-[13px] mt-3 cursor-pointer font-[inherit]"
              >
                مسحت الكود دلوقتي؟ سجّل ضمانك
              </button>
            </Card>
          )}

          {/* ── MY WARRANTY ── */}
          {view === "mywarranty" && (
            <Card>
              <div className="text-center mb-5">
                <ShieldIcon className="text-primary" style={{ fontSize: 48, marginBottom: 8 }} />
                <h2 className="text-white text-[20px] font-black m-0 mb-2">بيانات الضمان</h2>
                <span className="inline-block rounded-full text-[12px] font-bold px-4 py-1 border bg-green-500/15 text-green-400 border-green-500/30">
                  متبقي 4380 يوم
                </span>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl" style={{ padding: 20 }}>
                <InfoRow label="الاسم" value={loginName || "محمد أحمد"} />
                <InfoRow label="رقم التليفون" value={loginPhone || "01012345678"} />
                <InfoRow label="نوع السيارة" value="BMW X5 2023" />
                <InfoRow label="رقم اللوحة" value="أ ب ج 1234" />
                <InfoRow label="الخامة" value="PPF Premium" />
                <div className="h-px bg-white/10 my-2" />
                <InfoRow label="تاريخ التركيب" value={formatDate(today)} />
                <InfoRow label="بداية الضمان" value={formatDate(today)} />
                <InfoRow label="انتهاء الضمان" value={formatDate(warrantyEndStr)} accent />
              </div>

              <div className="mt-5">
                <Btn onClick={() => setView("login")}>رجوع</Btn>
              </div>
            </Card>
          )}
        </div>

        {/* ── SUCCESS POPUP ── */}
        {showPopup && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            style={{ padding: "24px 16px" }}
            onClick={(e) => { if (e.target === e.currentTarget) setShowPopup(false); }}
          >
            <div
              dir="rtl"
              className="bg-[#111] border border-white/10 rounded-3xl w-full max-w-[400px] relative"
              style={{ padding: "32px 28px" }}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 left-4 bg-white/10 border-none rounded-lg text-white cursor-pointer flex p-1.5"
              >
                <CloseIcon style={{ fontSize: 18 }} />
              </button>

              <div className="text-center mb-6">
                <VerifiedIcon style={{ fontSize: 60, color: "#22c55e", marginBottom: 12 }} />
                <h2 className="text-white text-[22px] font-black m-0 mb-1">تم التسجيل! 🎉</h2>
                <p className="text-white/50 text-[13px] m-0">ضمانك اتسجل بنجاح في نظام Brothers</p>
              </div>

              <div className="bg-green-500/[0.07] border border-green-500/20 rounded-2xl mb-4" style={{ padding: 18 }}>
                <InfoRow label="الاسم" value={name || "محمد أحمد"} />
                <InfoRow label="السيارة" value={car || "BMW X5 2023"} />
                <InfoRow label="رقم اللوحة" value={plate || "أ ب ج 1234"} />
                <InfoRow label="الخامة" value={material || "PPF Premium"} />
                <InfoRow label="رقم التليفون" value={phone || "01012345678"} />
                <div className="h-px bg-white/10 my-2" />
                <InfoRow label="تاريخ التركيب" value={formatDate(today)} />
                <InfoRow label="بداية الضمان" value={formatDate(today)} />
                <InfoRow label="انتهاء الضمان" value={formatDate(warrantyEndStr)} accent />
              </div>

              <div className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl mb-5" style={{ padding: "12px 16px" }}>
                <WhatsAppIcon style={{ color: "#25D366", fontSize: 22, flexShrink: 0 }} />
                <p className="text-white/70 text-[13px] m-0 leading-relaxed">
                  تم إرسال تفاصيل الضمان على الواتساب
                </p>
              </div>

              <Btn primary onClick={() => setShowPopup(false)}>تمام</Btn>
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
    <div className="bg-[#111] border border-white/[0.08] rounded-3xl" style={{ padding: "28px 24px" }}>
      {children}
    </div>
  );
}

function Field({ icon, placeholder, value, onChange, type = "text" }: {
  icon: React.ReactNode; placeholder: string; value: string; onChange: (v: string) => void; type?: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl mb-3 h-[52px]" style={{ padding: "0 16px" }}>
      <span className="text-white/40">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-none outline-none text-white text-[14px] flex-1 text-right font-[inherit] placeholder:text-white/30"
      />
    </div>
  );
}

function InfoRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between items-center py-1.5">
      <span className="text-white/45 text-[13px]">{label}</span>
      <span className={`text-[13px] ${accent ? "text-primary font-bold" : "text-white font-medium"}`}>{value}</span>
    </div>
  );
}

function Btn({ children, onClick, primary, style }: {
  children: React.ReactNode; onClick: () => void; primary?: boolean; style?: React.CSSProperties;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-[52px] rounded-2xl text-white text-[15px] font-black cursor-pointer transition-opacity duration-200 font-[inherit] ${primary ? "border-none bg-gradient-to-l from-[#DC2626] to-[#F97316]" : "border border-white/10 bg-white/5"}`}
      style={style}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </button>
  );
}