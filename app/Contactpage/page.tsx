"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const socials = [
  {
    icon: <WhatsAppIcon style={{ fontSize: 28 }} />,
    label: "واتساب",
    value: "01003397852",
    href: "https://wa.me/201003397852",
    bg: "#25D366",
  },
  {
    icon: <InstagramIcon style={{ fontSize: 28 }} />,
    label: "انستجرام",
    value: "@brothers.protection",
    href: "https://www.instagram.com/brothers.protection?igsh=eWRvOTNtaGFyZ3ph&utm_source=qr",
    bg: "#E1306C",
  },
  {
    icon: <FacebookIcon style={{ fontSize: 28 }} />,
    label: "فيسبوك",
    value: "Brothers Car Protection",
    href: "https://www.facebook.com/brotherscarprotection",
    bg: "#1877F2",
  },
  {
    icon: <LanguageIcon style={{ fontSize: 28 }} />,
    label: "الموقع",
    value: "brothersProtection.com",
    href: "https://brothers-Protection.com",
    bg: "#DC2626",
  },
];

const branches = [
  {
    name: "التجمع الخامس",
    address: "التسعين الشمالي — مول اللوتس ٣",
    href: "https://www.google.com/maps/search/Codill+East+Mall/@30.030609,31.505521,17z",
  },
  {
    name: "الشيخ زايد",
    address: "محور جمال عبد الناصر — ممشي Square One",
    href: "https://maps.app.goo.gl/YtUA9sgrZxYNLtd98",
  },
  {
    name: "المهندسين",
    address: "٦ خان يونس متفرع من شارع شهاب",
    href: "https://maps.app.goo.gl/Ph5ucUxPeMuBY3UV8",
  },
];

export default function ContactPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 py-10"
      style={{ fontFamily: "inherit" }}
    >
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/img/452863198_122094958910449527_15294905101800547_n.png"
          alt="Brothers Protection"
          className="w-20 h-20 object-contain mb-4"
        />
        <h1 className="text-white text-[22px] font-black m-0 tracking-tight text-center">
          BROTHERS <span className="text-[#DC2626]">PROTECTION</span>
        </h1>
        <p className="text-white/40 text-xs mt-1">PREMIUM PPF & CAR CARE</p>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4">

        {/* Social Links */}
        <div className="flex flex-col gap-3" style={{margin:"auto"}}>
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl transition-all duration-200 active:scale-95"
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "14px 18px",
                textDecoration: "none",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  background: s.bg + "22",
                  color: s.bg,
                }}
              >
                {s.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-white/50 text-[11px] font-bold tracking-widest uppercase">
                  {s.label}
                </span>
                <span className="text-white text-[14px] font-bold mt-0.5">
                  {s.value}
                </span>
              </div>
              <div className="mr-auto text-white/20 text-lg">←</div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-[11px] font-bold tracking-widest">فروعنا</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Branches */}
        <div className="flex flex-col gap-3" style={{margin:"auto"}}>
          {branches.map((b, i) => (
            <a
              key={i}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl transition-all duration-200 active:scale-95"
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "14px 18px",
                textDecoration: "none",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0 mt-0.5"
                style={{
                  width: 48,
                  height: 48,
                  background: "rgba(220,38,38,0.12)",
                  color: "#DC2626",
                }}
              >
                <LocationOnIcon style={{ fontSize: 26 }} />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[15px] font-black">{b.name}</span>
                <span className="text-white/50 text-[13px] mt-0.5 leading-relaxed">{b.address}</span>
              </div>
              <div className="mr-auto text-white/20 text-lg mt-1">←</div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-white/20 text-[11px] text-center mt-2">
          © 2026 Brothers Protection — جميع الحقوق محفوظة
        </p>
      </div>
    </main>
  );
}